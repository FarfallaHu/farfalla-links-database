# 🦋 Farfalla's Links Database

一个精美的个人链接收藏管理系统，采用混合数据存储方案。

## ✨ 特性

- 📊 **混合数据存储**：静态数据（所有人可见）+ 本地数据（个人使用）
- 🗂️ **文件夹管理**：创建、重命名、删除、自定义图标
- 🔗 **链接管理**：添加、编辑、删除、拖拽排序
- 🎨 **Emoji 支持**：为文件夹添加个性化 emoji 图标
- 🔒 **密码保护**：敏感操作需要密码验证
- 📱 **响应式设计**：完美支持桌面和移动设备
- ⚡ **超快速度**：纯前端，无需服务器

## 🏗️ 技术栈

- **前端框架**: React 18
- **UI 组件**: Radix UI + Tailwind CSS
- **拖拽功能**: react-dnd
- **图标**: Lucide React
- **构建工具**: Vite
- **托管**: Vercel（推荐）

## 📦 数据存储

### 静态数据（对所有人可见）
- 位置：`src/app/data/localData.ts`
- 包含：193 个链接 + 21 个文件夹
- 用途：分享你的链接收藏

### 本地数据（仅你可见）
- 位置：浏览器 localStorage
- 包含：你的个人修改和新添加的内容
- 用途：个人使用，不影响他人

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 部署到 Vercel

查看详细步骤：[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 📊 当前数据统计

- **文件夹**: 21 个
- **链接**: 193 个
- **总记录**: 214 条

*数据导出时间: 2026-05-21*

## 🔐 安全设置

默认密码：`Hudie1022`

修改密码：编辑 `src/app/App.tsx` 第 276 行

## 📖 使用说明

### 查看所有人可见的链接
- 直接访问网站即可看到静态数据

### 添加个人链接
1. 在顶部表单输入 URL 和标题
2. 选择文件夹（可选）
3. 点击"Save Link"
4. 数据保存在你的浏览器中

### 编辑/删除
- 双击标题可编辑
- 或点击"更多选项"菜单
- 需要输入密码验证

### 拖拽排序
- 直接拖动链接或文件夹重新排序
- 顺序自动保存

## 🔄 更新静态数据

如果你想让其他人看到你的新链接：

1. 打开浏览器控制台
2. 运行导出脚本（见 DEPLOYMENT_GUIDE.md）
3. 复制数据到 `localData.ts`
4. 推送到 GitHub（Vercel 自动部署）

## 📁 项目结构

```
├── src/
│   ├── app/
│   │   ├── components/      # UI 组件
│   │   ├── data/
│   │   │   └── localData.ts # 静态数据
│   │   ├── utils/
│   │   │   └── dataManager.ts # 数据管理器
│   │   └── App.tsx          # 主应用
│   └── styles/              # 样式文件
├── .gitignore
├── vercel.json              # Vercel 配置
└── package.json
```

## 🙏 致谢

- UI 组件: [Radix UI](https://www.radix-ui.com/)
- 图标: [Lucide](https://lucide.dev/)
- CSS 框架: [Tailwind CSS](https://tailwindcss.com/)

## 📄 许可

个人使用 - Farfalla Hu

---

Made with 💜 by Farfalla
