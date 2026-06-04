# 山宁 Shanning | 东方茶饮新美学

这是一个基于 Next.js 15 和 Firebase 构建的新式中药健康茶饮品牌原型。

## 如何让别人看到我的网站？

要将此项目发布到互联网上，您需要使用 **Firebase App Hosting**。

### 部署步骤：

1. **推送代码到 GitHub**：将您的代码提交并推送到一个 GitHub 仓库。
2. **访问 Firebase 控制台**：前往 [Firebase Console](https://console.firebase.google.com/)。
3. **创建 App Hosting 后端**：
   - 在侧边栏找到“构建” -> “App Hosting”。
   - 点击“开始使用”并连接您的 GitHub 仓库。
   - 选择此项目的分支（通常是 `main`）。
4. **自动部署**：一旦连接成功，Firebase 会自动检测您的 Next.js 配置并开始构建和部署。

### 您的网址是什么？

部署完成后，Firebase 会在 App Hosting 仪表板中为您提供一个自动生成的域名，格式通常如下：
- `https://<your-project-id>.web.app`
- `https://<your-project-id>.firebaseapp.com`

您也可以在 Firebase 控制台中绑定您自己的自定义域名。

## 技术栈

- **前端**: Next.js 15 (App Router), React 19, Tailwind CSS
- **UI 组件**: ShadCN UI (Lucide Icons)
- **AI 功能**: Genkit (Gemini 2.5 Flash)
- **后端服务**: Firebase App Hosting, Firestore (可选)

## 本地开发

```bash
npm run dev
```

打开 [http://localhost:9002](http://localhost:9002) 查看效果。
