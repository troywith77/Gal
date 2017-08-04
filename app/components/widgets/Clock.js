import React, { Component } from 'react'
import addWidgetTab from './WidgetTab'
import { format } from 'date-fns'

class WidgetClock extends Component {
  state = {
    time: ''
  }
  
  static uiState = {
    minW: 2,
    minH: 2,
    w: 4,
    h: 2
  }

  static title = '时钟'

  refreshTimer = () => {
    this.setState({ time: format(new Date(), 'YYYY-MM-DD HH:mm:ss') })
  }
  
  componentDidMount() {
    this.refreshTimer()
    this.interval = setInterval(() => {
      this.refreshTimer()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  render() {
    return (
      <div>
        {this.state.time}
      </div>
    )
  }
}

export default addWidgetTab()(WidgetClock)