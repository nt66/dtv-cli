import React from 'react';
import ReactDOM from 'react-dom';
import { Left, Top, Right, Screen } from './component';
import app from './models/index';

import styles from './App.less';



const App = () => {
  return (
    <div className={styles.mainV}>
      <Top />
      <div className={styles.mainContent}>
        <div className={styles.screen}>
          <Screen />
        </div>
        <Left />
        {/* <div style={{minWidth:'400px'}}></div> */}
        <Right />
      </div>
    </div>
  )
}

app.router(() => <App />);
app.start('#root');
