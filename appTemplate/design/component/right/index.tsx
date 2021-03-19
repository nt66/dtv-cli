import React, { Component } from 'react';
import { Input } from 'antd';
import TextToInput from "react-text-to-input";
import { connect } from 'dva';

import styles from './index.less';

class Right extends Component<any, any>  {
  constructor(prop) {
    super(prop);
    // this.state = {
    //   isEdit: false,
    //   fontSize: '50',
    //   color: '#FF000',
    // }
  }

  textChange(key: string, value: string): void {
    const { dispatch } = this.props;
    
    if (key === 'fontSize') {
      // state动态赋值
      // this.setState({
      //   [key]: value
      // },()=>{
      //   // console.log('99999');
      // })

      dispatch({
        type: 'attribute/upDateFontSize',
        payload:value
      });
    }else if(key === 'color'){
      dispatch({
        type: 'attribute/upDateColor',
        payload:value
      });
    }else if(key === 'data'){
      dispatch({
        type: 'attribute/upDateNum',
        payload:value
      });
    }else if(key === 'timer'){
      dispatch({
        type: 'attribute/upDateTimer',
        payload:value
      });
    }
  }

  render() {
    const { data, fontSize, color,timer } = this.props;
    console.log('ppppp:',this.props.fontSize,this.props.color);
    return (
      <div className={styles.RightMain}>
        <div className={styles.RightContent}>
          <aside className={styles.aSd} >
            <header>
              <ol className={styles.nav}>
                <li className={styles.navItem} >
                  <span style={{ color: 'rgb(242, 244, 245)' }}>属性</span>
                  <span className={styles.navUnderline}></span>
                </li>
                <li className={styles.navItem}>
                  <span>事件</span>
                </li>
              </ol>
            </header>
            <div className={styles.main}>
            <div className={styles.selection}>
                <div className={styles.attrName}>data</div>
                {/* <div className={styles.attrValue}>200</div> */}
                <TextToInput
                  inputClassName={styles.attrEdit}
                  value={data}
                  onChange={this.textChange.bind(this, 'data')}
                />
              </div>
              <div className={styles.selection} >
                <div className={styles.attrName}>fontSize</div>
                <TextToInput
                  inputClassName={styles.attrEdit}
                  value={fontSize}
                  onChange={this.textChange.bind(this, 'fontSize')}
                />
              </div>
              <div className={styles.selection}>
                <div className={styles.attrName}>color</div>
                <TextToInput
                  inputClassName={styles.attrEdit}
                  value={color}
                  onChange={this.textChange.bind(this, 'color')}
                />
              </div>
              <div className={styles.selection}>
                <div className={styles.attrName}>timer</div>
                <TextToInput
                  inputClassName={styles.attrEdit}
                  value={timer}
                  onChange={this.textChange.bind(this, 'timer')}
                />
              </div>
              
            </div>
          </aside>
        </div>
      </div>
    )
  }
}

export default connect(
  ({attribute})=> ({
    data: attribute?.data,
    fontSize:attribute?.fontSize,
    color:attribute?.color,
    timer:attribute?.timer
  })
)(Right);