import React,{ Component } from 'react';
import icon from '../../assets/datav.png';
import styles from './index.less';

export default class Top extends Component  {
  constructor(prop){
    super(prop);
    this.state={
      act:''
    }
  }

  componentDidMount():void{

  };

  render(){
    return(
      <div className={styles.topMain}>
        <img className={styles.icon} alt="" src={icon} />
        <div className={styles.projectName}>
          <span>可视化组件库编辑器</span>
        </div>
      </div>
    )
  }
}