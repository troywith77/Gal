import React, { Component } from 'react'
import addWidgetTab from './WidgetTab'
import { getRank } from '../../services/bkj'
import { extractBkjs } from '../../utils/helpers'

class WidgetZhutiku extends Component {  
  static uiState = {
    minW: 2,
    minH: 2,
    w: 4,
    h: 4
  }

  static title = '主题库'

  state = {
    items: []
  }
 
  componentDidMount() {
    getRank({}).then(res => {
      this.setState({
        items: extractBkjs(res.data.data)
      })
    })
  }
  
  render() {
    return (
      <ul>
        {
          this.state.items.map(item => (
            <li key={item.plate_id}>
              {item.plate_name} | {item.pcp + '%'}
            </li>
          ))
        }
      </ul>
    )
  }
}

export default addWidgetTab()(WidgetZhutiku)