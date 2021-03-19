import React, { Component } from 'react';
import styles from './index.less';
import { FileOutlined } from '@ant-design/icons';

export default class Left extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
    }
  }

  componentDidMount(): void {

  };

  render() {
    return (
      <>
        <div className={styles.leftMain}>
        </div>
        <div className={styles.leftContent} style={{width:'209px'}}>
          <aside className={styles.aSd} >
            <header>
              <ol className={styles.nav}>
                <li className={styles.navItem} >
                  <span style={{ color: 'rgb(242, 244, 245)' }}>组件列表</span>
                </li>
              </ol>
            </header>
            <div className={styles.screenList}>
                <ul>
                  <li>
                    <div className={`${styles.componentItem} ${styles.componentItemSed}`}>
                      <FileOutlined style={{marginRight:'10px'}} />
                      Counter
                    </div>
                  </li>
                  <li>
                    <div className={styles.componentItem}>
                      <FileOutlined style={{marginRight:'10px'}} />
                      Radar
                    </div>
                  </li>
                </ul>
            </div>
          </aside>
        </div>
      </>
    )
  }
}