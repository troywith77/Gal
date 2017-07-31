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
  
  componentDidMount() {
    this.props.setTitle('组件二')
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