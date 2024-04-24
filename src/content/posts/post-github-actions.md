---
title: 使用Github Actions同步文章
published: 2024-04-23
description: '使用Github Actions触发远程服务器打包部署文章'
image: ''
tags: ['Github']
category: '记录存档'
draft: false 
---

# Github Actions

由于本站点使用Astro静态生成，每次发布或更新新文章都需要到服务器上打包一次，比较麻烦。查找之下发现Github Actions可以监控当前仓库的操作，当发生操作后可以执行一些任务。

通过Github Actions我们只需要push提交更新，Github Action监控到push操作时，就可以自动执行`pnpm build`命令，打包的内容通过Nginx发布出来。

Action存放在`./github/workflows`下，后缀为`.yml`。一个Action相当于一个工作流workflows，一个工作流允许有多个任务
job，任务又可以有多个任务step。任务、步骤依次执行。

可以通过下面这种格式来使用别人写好的 action，@借用了指针的概念：

```shell
actions/setup-node@74bc508 # 指向一个 commit
actions/setup-node@v1.0    # 指向一个标签
actions/setup-node@master  # 指向一个分支
```

现在需要实现一个 Action，使其能够执行 hexo clean、hexo g -d 操作。

以下是我个人使用的配置文件

```yml
name: Auto Deploy
on:
    push:
        branches: main

jobs:
    deploy:
        name: Deploy
        runs-on: ubuntu-latest
        environment: Deploy
        steps:
            - name: Remote SSH
              uses: appleboy/ssh-action@v1.0.3
              with:
                host: ${{ secrets.SERVER_IP }}
                username: ${{ secrets.USERNAME }}
                key: ${{ secrets.SSH_PRIVATE_KEY }}
                port: 22
                script: |
                    cd ~/blog
                    git pull
                    pnpm build

```
