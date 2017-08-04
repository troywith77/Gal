import React, { Component } from 'react';
import { Tabs } from 'antd';
import StoreHOC from '../containers/StoreHOC'
import allComponent from './all'

const TabPane = Tabs.TabPane

class HomeTabs extends Component {
  constructor(props) {
    super(props);
  }
  onChange = (activeKey) => {
    this.setState({ activeKey });
    this.props.actions.SET_TABS_ACTIVE_KEY(activeKey)
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    this.props.actions.ADD_TAB()
  }
  remove = (targetKey) => {
    this.props.actions.REMOVE_TAB(targetKey)
  }
  render() {
    const { tabs } = this.props
    
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={tabs.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {tabs.panes.map(pane => {
          const Comp = allComponent[pane.content]
          return (
            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
              <Comp />
            </TabPane>
          )
        })}
      </Tabs>
    );
  }
}

export default StoreHOC({
  mapStateToProps: state => ({ tabs: state.tabs })
})(HomeTabs)