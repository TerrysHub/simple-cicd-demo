# 使用官方Node.js運行時作為基礎映像
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製package.json和package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用程式碼
COPY src/ ./src/

# 暴露應用程式埠
EXPOSE 3000

# 啟動應用
CMD ["npm", "run", "serve"]