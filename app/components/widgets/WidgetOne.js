import React, { Component } from 'react'
import addWidgetTab from './WidgetTab'

class WidgetOne extends Component {
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