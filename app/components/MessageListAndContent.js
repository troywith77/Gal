import React, { Component } from 'react'
import MessageList from './MessageList'
import ArticleContent from './ArticleContent'
import styles from './MessageListAndContent.scss'

export default class MessageListAndContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  selectMsg = (msg) => {
    this.setState({ msg })
    this.refs.article.fetchMessage(msg.Id)
  }
  
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.list}>
          <MessageList selectMsg={this.selectMsg} />
        </div>
        <div className={styles.article}>
          <ArticleContent msg={this.state.msg} ref="article" />
        </div>
      </div>
    )
  }
}