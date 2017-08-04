import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import StoreHOC from '../containers/StoreHOC'

const MenuItem = Menu.Item

class Nav extends Component {
  onSelect = e => {
    this.props.actions.SELECT_NAV(e.key)
    this.props.actions.ADD_TAB(e.key, e.key, e.item.props.title)
  }
  
  render() {
    const { nav } = this.props
    return (
      <Menu
        selectedKeys={nav.selectedKeys}
        mode="inline"
        theme="dark"
        onSelect={this.onSelect}
      >
        <MenuItem key="Live" title="实时">
          <Icon type="pie-chart" />
          <span>实时</span>
        </MenuItem>
        <MenuItem key="Zhutiku" title="主题库">
          <Icon type="desktop" />
          <span>主题库</span>
        </MenuItem>
        <MenuItem key="Ban" title="打板神器">
          <Icon type="inbox" />
          <span>打板神器</span>
        </MenuItem>
      </Menu>
    )
  }
}

export default StoreHOC({
  mapStateToProps: state => ({ nav: state.nav })
})(Nav)