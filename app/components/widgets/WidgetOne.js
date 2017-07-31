import React, { Component } from 'react'
import addWidgetTab from './WidgetTab'

class WidgetOne extends Component {
  constructor(props) {
    super(props)
  }

  static uiState = {
    minW: 2,
    minH: 2,
    w: 2,
    h: 2
  }
  
  componentDidMount() {
    this.props.setTitle('组件一')
  }
  
  render() {
    return (
      <div>
        One One
      </div>
    )
  }
}

export default addWidgetTab()(WidgetOne)