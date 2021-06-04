可视化框架工程化的node指令工具
========================

# dtv-cli

## 支持
- [x] 初始化项目
- [x] 新建页面
- [x] 打包/发布
- [ ] 友好的输出（stdout / stderr）

## 安装
```
npm i -g dtv-cli
```

## CLI

```
dtv -h

Usage: dtv <command>

Options:

  -V, --version               output the version number
                              输出当前版本号
  -h, --help                  output usage information
                              获取帮助信息

Commands:

  init|i                     init project
                             初始化项目代码
  server|s                   start project
                             启动项目
  build|b                    Build project
                             编译镜像
  publish|p                  Publish project
                             发布镜像
  new|n [name]               new component
                             新建组件
```

