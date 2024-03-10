#!/bin/bash

# 1、chmod +x clean.sh
# 2、./clean.sh

# 停止所有容器
docker stop $(docker ps -a -q)

# 删除所有容器
docker rm $(docker ps -a -q)

# 清理未使用的镜像
docker image prune -a -f

# 清理未使用的卷
docker volume prune -f

# 清理未使用的资源
docker system prune -a -f

