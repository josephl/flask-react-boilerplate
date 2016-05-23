import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';

export default class Index extends Component {
  render() {
    const { sheet } = this.props;

    return (
      <div className={sheet.classes.index}>
        <h1>Welcome</h1>
      </div>
    );
  }
}

const STYLES = {
  index: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#660000'
  }
};

export default connect(
  () => ({}),
  {}
)(
  useSheet(Index, STYLES)
);
