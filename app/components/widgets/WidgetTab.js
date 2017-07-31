import React, { Component } from 'react';
import cx from 'classnames'
import styles from './WidgetTab.scss'

const addWidgetTab = config => WrappedComponent => class Widget extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      title: ''
    }
  }
  
  onRemoveItem = i => {
    this.props.removeItem(i)
  }
  
  setTitle = title => {
    this.setState({
      title
    })
  }
  
  render() {
    const { item } = this.props
    const headerClassNames = cx({
      [styles.widgetHeader]: true
    }, 'widget-drag')
    return (
      <div className={styles.widgetTab}>
        <header className={headerClassNames}>
          {this.state.title}
          <span className={styles.remove} onClick={this.onRemoveItem.bind(this, item.i)}>x</span>
        </header>
        <div>
          <WrappedComponent 
            {...this.props} 
            setTitle={this.setTitle}
          />
        </div>
      </div>
    )
  }
}

export default addWidgetTab