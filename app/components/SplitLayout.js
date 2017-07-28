import React,  { Component } from 'react';
import { Select } from 'antd';
import ReactGridLayout, { Responsive, WidthProvider} from 'react-grid-layout';
import styles from './SplitLayout.scss';
import allComponents from './all'

const ReactGridWidthLayout = WidthProvider(ReactGridLayout)
const Option = Select.Option

const defaultLayout = [
  {i: 'a', x: 0, y: 0, w: 1, h: 2, component: ''},
  {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, component: 'ArticleContent'},
  {i: 'c', x: 4, y: 0, w: 1, h: 2, component: ''}
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
    this.setState({
      layout: [
        ...this.state.layout, {
          i: String(Math.random()), x: 0, y: Infinity, w: 4, h: 4, minW: 2, component: value
        }
      ]
    })
  }

  onAddItem = () => {}
  onRemoveItem = (i) => {
    this.setState({
      layout: this.state.layout.filter(item => item.i !== i)
    })
  }

  createElement = (el) => {
    var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    const Comp = allComponents[el.component]
    
    return (
      <div key={el.i} data-grid={el}>
        {Comp ? <Comp /> : null}
        <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, el.i)}>x</span>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Select onChange={this.onSelect} style={{width: 200}} allowClear>
          <Option value="ArticleContent">文章</Option>
          <Option value="MessageListAndContent">文章列表</Option>
        </Select>
        <ReactGridWidthLayout 
          className={styles.layout} 
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          rowHeight={30}
          cols={24}
          autoSize={false}
        >
          {this.state.layout.map(this.createElement)}
        </ReactGridWidthLayout>
      </div>
    )
  }
}