# 山宁 Shanning | 东方茶饮新美学

这是一个基于 Next.js 15 和 Firebase 构建的新式中药健康茶饮品牌原型。

## 如何让别人看到我的网站？

要将此项目发布到互联网上，您需要执行两个主要步骤：**托管代码到 GitHub** 和 **部署到 Firebase App Hosting**。

### 第一步：将代码推送到 GitHub

1. **登录 GitHub**：访问 [github.com](https://github.com/) 并创建一个新的仓库（Repository），命名为 `shanning-tea`。
2. **在终端初始化 Git**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 山宁品牌网站原型"
   ```
3. **关联远程仓库并推送**：
   （请将下面的 `<your-username>` 替换为您的 GitHub 用户名）
   ```bash
   git remote add origin https://github.com/<your-username>/shanning-tea.git
   git branch -M main
   git push -u origin main
   ```

### 第二步：使用 Firebase App Hosting 部署

1. **访问 Firebase 控制台**：前往 [Firebase Console](https://console.firebase.google.com/)。
2. **创建项目**：点击“添加项目”并按照指引操作。
3. **设置 App Hosting**：
   - 在侧边栏找到“构建” -> “App Hosting”。
   - 点击“开始使用”并连接您的 GitHub 账号。
   - 选择您刚刚创建的 `shanning-tea` 仓库。
   - 保持默认设置，点击“部署”。
4. **获取网址**：部署完成后，Firebase 会在仪表板中为您提供一个自动生成的域名（如 `https://shanning-tea.web.app`）。

## 技术栈

- **前端**: Next.js 15 (App Router), React 19, Tailwind CSS
- **UI 组件**: ShadCN UI (Lucide Icons)
- **AI 功能**: Genkit (Gemini 2.5 Flash)
- **后端服务**: Firebase App Hosting

## 本地开发

```bash
npm run dev
```

打开 [http://localhost:9002](http://localhost:9002) 查看效果。
