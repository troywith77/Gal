// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Nav from './Nav';
import Tabs from './Tabs';

export default class Home extends Component {
  render() {
    const { state, actions } = this.props 
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
