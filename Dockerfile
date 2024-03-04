# 使用官方 Node.js 基础镜像
FROM node:20

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 文件
COPY package*.json ./

RUN npm install pm2 -g

# 复制项目文件
COPY . .

# 构建应用
# RUN npm run build

# 暴露端口
EXPOSE 3008

# 启动应用
# CMD ["pm2", "start", "./main.js"]
CMD ["node", "./main.js"]
