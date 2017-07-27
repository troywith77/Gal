// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Nav from './Nav';
import Tabs from './Tabs';

function square(n: number): number {
  return n * n;
}

// const SubMenu = Menu.SubMenu;

export default class Home extends Component {
  render() {
    console.log()
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.tabs}>
          <Tabs />
        </div>
      </div>
    );
  }
}
