import React, { Component } from 'react';
import MessageListItem from './MessageListItem'
import { getSubject } from '../services/message'

export default class MessageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        Messages: [],
        Subject: {}
      }
    }
  }
  
  fetchMessageData() {
    getSubject({
      id: 1
    }).then(res => {
      this.setState({ data: res.data })
    })
  }

  selectMsg = (item) => {
    this.props.selectMsg(item)
  }
  
  componentDidMount() {
    this.fetchMessageData()
  }
  
  render() {
    return (
      <ul style={{padding: '0 10px'}}>
        {
          this.state.data.Messages.map(item => (
            <MessageListItem 
              key={item.Id} 
              msg={item} 
              selectMsg={e => this.selectMsg(item)}
            />
          ))
        }
      </ul>
    )
  }
}