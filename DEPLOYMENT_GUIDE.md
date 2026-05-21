# 🚀 Vercel 部署指南

## 📋 准备工作清单

- ✅ 应用已完全本地化（不依赖 Supabase）
- ✅ 静态数据已导出（193 个链接 + 21 个文件夹）
- ✅ 配置文件已创建（`.gitignore`, `vercel.json`）

---

## 🎯 部署步骤（10分钟搞定！）

### 第 1 步：创建 GitHub 仓库

1. **登录 GitHub**（如果没有账号，先注册一个）
   - 访问：https://github.com

2. **创建新仓库**
   - 点击右上角 `+` → `New repository`
   - 仓库名称：`farfalla-links-database`（或任何你喜欢的名字）
   - 设置为 **Public**（公开）或 **Private**（私有）都可以
   - **不要**勾选 "Initialize with README"
   - 点击 `Create repository`

3. **上传你的代码**

在你的项目目录中运行以下命令：

```bash
# 初始化 git
git init

# 添加所有文件
git add .

# 创建第一个提交
git commit -m "Initial commit - Farfalla's Links Database"

# 连接到 GitHub（替换成你的用户名和仓库名）
git remote add origin https://github.com/你的用户名/farfalla-links-database.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

---

### 第 2 步：部署到 Vercel

1. **访问 Vercel**
   - 网址：https://vercel.com
   - 点击 `Sign Up`（注册）或 `Log In`（登录）
   - **推荐：用 GitHub 账号登录**（一键连接，超方便）

2. **导入项目**
   - 登录后，点击 `Add New...` → `Project`
   - 选择你刚创建的 GitHub 仓库：`farfalla-links-database`
   - 点击 `Import`

3. **配置项目**（大多数自动识别，无需修改）
   - **Project Name**: `farfalla-links`（或保持默认）
   - **Framework Preset**: Vite（应该自动识别）
   - **Build Command**: `npm run build`（自动填好）
   - **Output Directory**: `dist`（自动填好）
   - **Install Command**: 保持默认

4. **部署！**
   - 点击 `Deploy` 按钮
   - 等待 1-3 分钟...
   - 🎉 部署成功！

5. **访问你的网站**
   - Vercel 会给你一个免费域名：`farfalla-links-xxx.vercel.app`
   - 点击链接查看你的网站！

---

### 第 3 步：绑定自定义域名（可选）

如果你有自己的域名（比如 `farfalla.com`），可以绑定子域名：

#### 3.1 在 Vercel 添加域名

1. 在 Vercel 项目页面，点击 `Settings`
2. 点击左侧 `Domains`
3. 输入你的子域名：`links.farfalla.com`
4. 点击 `Add`

#### 3.2 配置 DNS 记录

Vercel 会显示需要添加的 DNS 记录。去你的域名提供商（阿里云、Cloudflare、腾讯云等）：

**添加 CNAME 记录：**
```
类型：CNAME
名称：links
值：cname.vercel-dns.com
TTL：自动或 3600
```

#### 3.3 等待生效

- DNS 生效时间：几分钟到 48 小时（通常 10 分钟内）
- Vercel 自动配置 HTTPS 证书
- 完成后访问：`https://links.farfalla.com` 🎉

---

## 🔄 更新网站（以后添加新链接后）

### 方法 1：更新静态数据（推荐）

如果你想让所有访问者看到你的新链接：

1. **导出当前数据**
   - 打开浏览器控制台（F12）
   - 复制并运行导出脚本（见下方）
   
2. **更新 `src/app/data/localData.ts` 文件**

3. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Update links database"
   git push
   ```

4. **自动部署**
   - Vercel 检测到推送后自动重新部署
   - 1-2 分钟后网站更新完成

### 方法 2：只在本地添加（不更新网站）

- 直接在网站上添加链接
- 数据只保存在你的浏览器中
- 其他人看不到你的新链接

---

## 📊 导出数据脚本

在浏览器控制台运行此脚本，导出当前所有数据：

```javascript
// 1. 获取所有数据
const getAllData = async () => {
  const dm = await import('./src/app/utils/dataManager.js')
  const links = dm.getAllLinks()
  const folders = dm.getAllFolders()
  
  console.log('=== 复制以下内容到 localData.ts ===\n')
  console.log(`export const localFolders: LocalFolder[] = ${JSON.stringify(folders, null, 2)}`)
  console.log(`\nexport const localLinks: LocalLink[] = ${JSON.stringify(links, null, 2)}`)
}

getAllData()
```

---

## 🗑️ 清理（可选）

你现在不再需要 Supabase 了，可以：

### 1. 删除 Supabase 项目
- 登录 https://supabase.com
- 进入你的项目
- Settings → General → Delete project

### 2. 删除项目中的 Supabase 文件
```bash
# 删除 Supabase 目录
rm -rf supabase/

# 删除 Supabase 依赖相关文件
rm -rf src/app/utils/supabase/
```

---

## ⚠️ 重要提醒

### 数据安全

- ✅ **静态数据**（`localData.ts`）：提交到 GitHub，所有人可见
- ✅ **个人数据**（localStorage）：只在你的浏览器中，别人看不到
- ⚠️ **不要**提交敏感信息到 GitHub

### 免费额度

- **Vercel 免费版限制**：
  - 100GB 流量/月
  - 100GB-小时 构建时间/月
  - 对个人博客/小项目完全够用

- **超出免费额度会怎样？**
  - 网站会暂停（不会收费）
  - 下个月自动恢复
  - 实际上很难超出（除非有大量访问）

---

## 🎉 完成！

现在你有了：
- ✅ 免费的静态网站托管
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 自定义域名（可选）
- ✅ 自动部署（推送代码即更新）

**总费用：0 元/月** 🎊

---

## 📞 需要帮助？

如果遇到问题，检查：
1. GitHub 仓库是否成功推送
2. Vercel 构建日志是否有错误
3. DNS 记录是否正确配置

祝部署顺利！🚀
