import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

const storeHOC = ({
  mapStateToProps
}) => WrappedComponent => class StoreHOC extends Component {
  render() {
    WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
    return (
      <WrappedComponent />
    )
  }
}

export default storeHOC