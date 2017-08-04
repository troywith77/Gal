import React, { Component } from 'react'
import addWidgetTab from './WidgetTab'

class WidgetTwo extends Component {
  constructor(props) {
    super(props)
  }

  static uiState = {
    minW: 2,
    minH: 4,
    w: 4,
    h: 4
  }

  static title = '组件二'
  
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

export default addWidgetTab()(WidgetTwo)