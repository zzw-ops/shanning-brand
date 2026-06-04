# 山宁 Shanning | 东方茶饮新美学

这是一个基于 Next.js 15 和 Firebase 构建的新式中药健康茶饮品牌原型。

## 如何下载并在本地运行？

如果你已经从平台上下载了项目的 ZIP 压缩包，请按照以下步骤在你的电脑上运行：

1. **解压文件**：将下载的压缩包解压到你的工作目录。
2. **安装依赖**：在项目根目录下运行终端（Terminal），执行：
   ```bash
   npm install
   ```
3. **启动开发服务器**：
   ```bash
   npm run dev
   ```
4. **访问网站**：打开浏览器访问 `http://localhost:9002`。

---

## 如何发布上线让别人看到？

要将此项目发布到互联网上，建议使用 **GitHub** + **Firebase App Hosting**。

### 第一步：将代码推送到 GitHub

1. **在 GitHub 创建仓库**：访问 [github.com](https://github.com/) 创建名为 `shanning-tea` 的新仓库。
2. **推送代码**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<你的用户名>/shanning-tea.git
   git branch -M main
   git push -u origin main
   ```

### 第二步：使用 Firebase 部署

1. **打包（Build）**：如果你想手动打包，可以运行：
   ```bash
   npm run build
   ```
   这会生成一个 `.next` 文件夹，里面是优化后的生产环境代码。
2. **自动部署**：在 [Firebase Console](https://console.firebase.google.com/) 中开启 **App Hosting**，连接你的 GitHub 仓库，Firebase 会自动帮你完成“打包”和“发布”的全过程。

---

## 技术栈

- **前端**: Next.js 15 (App Router), React 19, Tailwind CSS
- **UI 组件**: ShadCN UI (Lucide Icons)
- **AI 功能**: Genkit (Gemini 2.5 Flash)
- **后端服务**: Firebase App Hosting

## 开发指令

- `npm run dev`: 启动本地开发预览。
- `npm run build`: 构建用于生产环境的压缩包。
- `npm run start`: 运行构建后的生产环境版本。
