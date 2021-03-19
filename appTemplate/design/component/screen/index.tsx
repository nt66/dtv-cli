import React, { Component } from 'react';
// import { Counter } from '../../../src';
import { Counter } from '@dtv/visual-cli';
import { connect } from 'dva';

import styles from './index.less';

class Screen extends Component<any, any>  {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { data,fontSize, color,timer } = this.props;
    const option = {
      data,
      fontSize,
      color,
      timer
    };
    return (
      <>
        <Counter option={option} />
      </>
    )
  }
}

export default connect(
  ({ attribute }) => ({
    data:attribute?.data,
    fontSize: attribute?.fontSize,
    color: attribute?.color,
    timer: attribute?.timer
  })
)(Screen);