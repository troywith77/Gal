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

  static title = '组件一'
  
  componentDidMount() {
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