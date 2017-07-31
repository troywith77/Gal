import React, { Component } from 'react';
import { Tabs } from 'antd';
import allComponent from './all'

const TabPane = Tabs.TabPane

export default class HomeTabs extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'SplitLayout', key: '1', closable: false },
      { title: 'Tab 2', content: 'MessageListAndContent', key: '2' },
      { title: 'Tab 3', content: 'MessageListAndContent', key: '3' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  render() {
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map(pane => {
          const Comp = allComponent[pane.content]
          return <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            <div style={{height: 'calc(100vh - 42px)', overflowY: 'auto', overflowX: 'hidden'}}><Comp messages={[{Id: 1}]} /></div>
          </TabPane>
        })}
      </Tabs>
    );
  }
}