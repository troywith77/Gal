import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import StoreHOC from '../containers/StoreHOC'

const MenuItem = Menu.Item

class Nav extends Component {
  onSelect = e => {
    this.props.actions.ADD_TAB(e.key, e.key, e.item.props.title)
  }

  createElement = (item) => {
    const { key, title, iconType} = item
    return (
      <MenuItem key={key} title={title}>
        <Icon type={iconType} />
        <span>{title}</span>
      </MenuItem>
    )
  }
  
  render() {
    const { tabs } = this.props
    return (
      <Menu
        selectedKeys={[tabs.activeKey]}
        mode="inline"
        theme="dark"
        onSelect={this.onSelect}
      >
        {
          tabs.navItems.map(this.createElement)
        }
      </Menu>
    )
  }
}

export default StoreHOC({
  mapStateToProps: state => ({ tabs: state.tabs })
})(Nav)