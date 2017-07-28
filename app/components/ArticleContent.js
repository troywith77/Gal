import React, { Component } from 'react';
import { getMessage } from '../services/message';
import styles from './ArticleContent.scss';

export default class ArticleContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: {}
    }
  }
  
  fetchMessage(id) {
    const oldMsg = this.state.msg
    this.setState({ msg: {} })
    getMessage(id)
      .then(res => {
        this.setState({ msg: res.data })
      })
      .catch(err => {
        this.setState({ msg: oldMsg })
      })
  }
  
  componentDidMount() {
    
  }
  
  render() {
    const { msg } = this.state
    return (
      <div className="message-content">
        <h1>{msg.Title || '文章详情'}</h1>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: msg.Content || ''}} />
      </div>
    )
  }
}