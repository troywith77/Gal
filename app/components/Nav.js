import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';

const MenuItem = Menu.Item

export default class Nav extends Component {
  render() {
    return (
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
      >
        <MenuItem key="1">
          <Icon type="pie-chart" />
          <span>Option 1</span>
        </MenuItem>
        <MenuItem key="2">
          <Icon type="desktop" />
          <span>Option 2</span>
        </MenuItem>
        <MenuItem key="3">
          <Icon type="inbox" />
          <span>Option 3</span>
        </MenuItem>
      </Menu>
    )
  }
}