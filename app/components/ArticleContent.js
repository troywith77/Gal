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
    getMessage(id).then(res => {
      console.log(res.data)
      this.setState({ msg: res.data })
    })
  }
  
  componentDidMount() {
    
  }
  
  render() {
    const { msg } = this.state
    return (
      <div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: msg.Content || ''}} />
      </div>
    )
  }
}