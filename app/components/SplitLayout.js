import React,  { Component } from 'react';
import { Select } from 'antd';
import ReactGridLayout, { Responsive, WidthProvider} from 'react-grid-layout';
import styles from './SplitLayout.scss';
import allComponents from './all'
import AllWidgets from './widgets/AllWidgets'

const ReactGridWidthLayout = WidthProvider(ReactGridLayout)
const Option = Select.Option

const defaultLayout = [
  {i: '1', x: 0, y: 0, w: 4, h: 4, component: 'WidgetOne'},
]

export default class MyFirstGrid extends Component {
  constructor(props) {
    super(props)
    const layout = JSON.parse(window.localStorage.getItem('layout1')) || defaultLayout
    this.state = {
      layout
    }
  }
   
  onLayoutChange = (currentLayout, allLayout) => {
    const layout = currentLayout.map((item, index) => {
      return Object.assign({}, this.state.layout[index], item)
    })
    window.localStorage.setItem('layout1', JSON.stringify(layout))
    this.setState({
      layout
    })
  }

  onSelect = (value) => {
    if(!value) return false
    const uiState = AllWidgets[value].uiState
    this.setState({
      layout: [
        ...this.state.layout, {
          i: String(Math.random()), x: 0, y: Infinity, component: value, ...uiState
        }
      ]
    })
  }

  onRemoveItem = (i) => {
    this.setState({
      layout: this.state.layout.filter(item => item.i !== i)
    })
  }

  createElement = (el) => {
    const Comp = AllWidgets[el.component]
    
    return (
      <div key={el.i}>
        {
        Comp ? 
          <Comp 
            item={el} 
            removeItem={this.onRemoveItem}
          /> : null
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        <Select onChange={this.onSelect} style={{width: 200}} allowClear>
          <Option value="WidgetOne">组件一</Option>
          <Option value="WidgetTwo">组件二</Option>
          <Option value="Clock">时钟</Option>
        </Select>
        <ReactGridWidthLayout 
          className={styles.layout} 
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          onWidthChange={this.onWidthChange}
          rowHeight={30}
          cols={24}
          containerPadding={[20, 20]}
          draggableHandle=".widget-drag"
        >
          {this.state.layout.map(this.createElement)}
        </ReactGridWidthLayout>
      </div>
    )
  }
}