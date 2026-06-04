# 山宁 Shanning | 东方茶饮新美学

这是一个基于 Next.js 15 和 Firebase 构建的新式中药健康茶饮品牌原型。

## 如何在本地电脑运行？

这个项目是网页源代码，需要通过 **终端（Terminal）** 指令启动。请按照以下步骤操作：

### 1. 准备环境（必须）
你的电脑需要安装 **Node.js** 才能运行此代码：
- **下载地址**: [https://nodejs.org/](https://nodejs.org/)
- **建议版本**: 下载左侧的 **LTS (长期支持版)**。
- 安装完成后，你可以打开“终端”（Mac）或“命令提示符”（Windows）输入 `node -v`，如果显示版本号则说明安装成功。

### 2. 启动步骤
1. **解压项目**：将下载的 `.zip` 压缩包解压到一个文件夹。
2. **定位文件夹**：
   - **Windows**: 进入文件夹后，在文件夹顶部的地址栏输入 `cmd` 并回车。
   - **Mac**: 在解压后的文件夹上点击右键 -> “服务” -> “在终端中打开”。
3. **安装依赖组件**（仅需第一次运行）：
   在弹出的黑色窗口中输入以下命令并按回车：
   ```bash
   npm install
   ```
   (这会自动下载项目运行所需的插件，请等待进度条完成)
4. **启动项目**：
   输入以下命令并按回车：
   ```bash
   npm run dev
   ```
5. **查看效果**：
   当看到窗口显示 `Ready in ...ms` 后，不要关闭窗口。打开浏览器（如 Chrome），在地址栏输入：
   `http://localhost:9002`

---

## 如何发布上线让别人看到？

如果想让其他人通过互联网访问，建议使用 **GitHub** + **Firebase App Hosting**。

1. **推送代码到 GitHub**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<你的用户名>/shanning-tea.git
   git push -u origin main
   ```
2. **连接 Firebase**：在 Firebase 控制台开启 **App Hosting** 服务，连接你的 GitHub 仓库，它会自动为你分配一个网址。

## 技术栈
- **前端**: Next.js 15 (App Router), React 19, Tailwind CSS
- **UI 组件**: ShadCN UI (Lucide Icons)
- **AI 功能**: Genkit (Gemini 2.5 Flash)
