#!/bin/bash

# 🚀 快速部署脚本
# 用法: ./deploy.sh "你的提交信息"

set -e

echo "🦋 Farfalla's Links Database - 快速部署"
echo "========================================"
echo ""

# 检查是否有提交信息
if [ -z "$1" ]; then
    COMMIT_MSG="Update links database - $(date +%Y-%m-%d)"
else
    COMMIT_MSG="$1"
fi

echo "📝 提交信息: $COMMIT_MSG"
echo ""

# 检查是否有 git 仓库
if [ ! -d ".git" ]; then
    echo "❌ 错误: 未找到 git 仓库"
    echo "请先运行以下命令初始化 git:"
    echo ""
    echo "  git init"
    echo "  git remote add origin https://github.com/你的用户名/你的仓库名.git"
    echo ""
    exit 1
fi

# 添加所有更改
echo "📦 添加文件..."
git add .

# 检查是否有更改
if git diff --staged --quiet; then
    echo "✅ 没有需要提交的更改"
    exit 0
fi

# 提交
echo "💾 提交更改..."
git commit -m "$COMMIT_MSG"

# 推送
echo "🚀 推送到 GitHub..."
git push

echo ""
echo "✅ 部署完成！"
echo "🌐 Vercel 将在 1-2 分钟内自动重新部署你的网站"
echo ""
