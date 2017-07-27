import React, { Component } from 'react';
import { Card } from 'antd';

export default class MessageListItem extends Component {
  render() {
    const { msg, selectMsg } = this.props;
    return (
      <li style={{marginBottom: 10}} onClick={selectMsg}>
        <Card>
          <h3>{msg.Title}</h3>
        </Card>
      </li>
    )
  }
}