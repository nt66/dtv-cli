# React可视化组件库 基于 D3.js 开发

<!-- > 灵峯顶上一朵花 -->

## 安装
```bash
npm install
```
or
```bash
yarn
```


## 运行
```bash
npm start
```

## Radar栗子
```javascript
import { Radar } from '@dtv/visual-cli';

import './App.css';

const radarData = [
  { id: 'completeness', name: '完整性', value: '75' },
  { id: 'accuracy', name: '准确性', value: '80' },
  { id: 'freshness', name: '时效性', value: '90' },
  { id: 'unique', name: '唯一性', value: '100' },
  { id: 'consistency', name: '规范性', value: '25' },
  { id: 'stability', name: '稳定性', value: '100' },
];

const trendIssueOpt = {
  width: 385,
  height: 303,
};

function App() {
  return (
    <div className="App">
      <h1>组件测试页面</h1>
      <Radar data={radarData} opts={trendIssueOpt} />
    </div>
  );
}

export default App;
```

<br/>

## 特性
常用组件封装,开箱即用
