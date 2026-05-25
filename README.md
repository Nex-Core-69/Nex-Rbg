<div align="center">

#  NEX-RBG
##  Super Fast Background Remover Web

<img src="https://i.postimg.cc/1RpbXGB3/20260525-030618.jpg" width="120" style="border-radius:20px;" />

<br>

###  Remove Image Backgrounds Instantly 

<br>

<img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/License-MIT-3b82f6?style=for-the-badge">
<img src="https://img.shields.io/badge/API-Remove.bg-ff6b6b?style=for-the-badge">

<br><br>

>  Professional • Fast • Secure • Modern UI

</div>

---

# 📌 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Installation](#-installation)
- [⚙️ Config Setup](#️-config-setup)
- [📱 Running on Termux](#-running-on-termux-android)
- [☁️ Deploy on Render](#️-deploy-on-render)
- [📁 Project Structure](#-project-structure)
- [🎨 Color Theme](#-color-theme)
- [🎬 Animation Effects](#-animation-effects)
- [🔧 Troubleshooting](#-troubleshooting)
- [👨‍💻 Owner](#-owner)

---

# ✨ Features

| Feature | Description |
|----------|-------------|
|      Super | Super background removal |
| ⚡ Lightning Fast | Process images in seconds |
| 🎨 Modern UI | Dark blue professional design |
| 🖱️ Easy image uploading |
| 👁️ Live Preview |
| 📥 Save PNG in one click |
| 🔄 Auto Scroll | Smooth page navigation |
| 📱 Mobile Friendly | Responsive on all devices |

---

# 🛠️ Tech Stack

```text
Frontend:
├── HTML5
├── CSS3
├── JavaScript
└── Font Awesome 6

Backend:
├── Node.js
├── Express.js
├── Multer
└── Axios

API:
└── Remove.bg API

Deployment:
├── Render
├── Termux
└── VPS Support
```

---

# 📦 Installation

## 📋 Requirements

```text
✔ Node.js v14+
✔ npm or yarn
✔ Remove.bg API Keys
✔ Internet Connection
```

---

## 🚀 One Click Installation

```bash
git clone https://github.com/nex-core-69/nex-rbg.git && \
cd nex-rbg && \
npm install && \
npm start
```

---

##  Step-by-Step Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/nex-core-69/nex-rbg.git
```

---

### 2️⃣ Open Project Folder

```bash
cd nex-rbg
```

---

### 3️⃣ Modify Config File

```bash
nano config.json & replace with your api keys
```

---

### 4️⃣ Install Dependencies

```bash
npm install
```

---

### 5️⃣ Start Server

```bash
npm start
```

---

### 6️⃣ Open Website

```text
http://localhost:3000 or your Website URL
```

---

# ⚙️ Config Setup

## 📄 config.json

Type nano `config.json` in the root directory.

```json
{
  "api_keys": [
    "your-first-api-key",
    "your-second-api-key",
    "your-third-api-key",
    "your-fourth-api-key"
  ]
}
```

---

## 🔑 How to Get Remove.bg API Key

```text
1. Go to https://www.remove.bg/
2. Create an account
3. Open Dashboard
4. Go to API Keys
5. Generate new API key
6. Copy and paste into config.json
7. You should to generate 4 keys or more than 4 because 4 keys make this suoer fast.
```

---

## 📌 Important Notes

```text
✅ Minimum 4 API keys recommended
✅Don't Remove Author Name
✅ Keys rotate automatically
✅ Never upload config.json publicly
✅ Keep your API keys private
```

---

# 📱 Running on Termux (Android)

## 📥 Step 1 — Install Termux

```text
Download from F-Droid
Avoid Play Store version (outdated)
```

---

## 🔄 Step 2 — Update Packages

```bash
pkg update && pkg upgrade -y
```

---

## 📦 Step 3 — Install Dependencies

```bash
pkg install nodejs-lts git nano -y
```

---

## 📂 Step 4 — Clone Repository

```bash
git clone https://github.com/nex-core-69/nex-rbg.git
cd nex-rbg
```

---

## 📥 Step 5 — Install Node Modules

```bash
npm install
```

---

## ⚙️ Step 6 — Configure API Keys

```bash
nano config.json
```

Paste this:

```json
{
  "api_keys": [
    "api-key-1",
    "api-key-2",
    "api-key-3",
    "api-key-4"
  ]
}
```

Save file:

```text
CTRL + X → Y → ENTER
```

---

## 🚀 Step 7 — Start Server

```bash
npm start
```

---

## 🌐 Step 8 — Open Website

```text
http://localhost:3000
```

---

# 💡 Termux Pro Tips

## 🔥 Run in Background with PM2

### Install PM2

```bash
npm install -g pm2
```

---

### Start Server

```bash
pm2 start nexcore.js
```

---

### Save Process

```bash
pm2 save
```

---

### Startup PM2 Automatically

```bash
pm2 startup
```

---

## 📋 Useful PM2 Commands

```bash
pm2 list
pm2 logs
pm2 restart nexcore
pm2 stop nexcore
pm2 delete nexcore
```

---

## 💻 Access From PC/Laptop

### Check Phone IP

```bash
ifconfig
```

---

### Open In Browser

```text
http://YOUR_PHONE_IP:3000
```

---

# ☁️ Deploy on Render

# 🚀 Step 1 — Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial Commit"
git remote add origin https://github.com/YOUR_USERNAME/nex-rbg.git
git push -u origin main
```

---

# 🌐 Step 2 — Create Render Service

```text
1. Open Render.com
2. Login with GitHub
3. Click "New +"
4. Select "Web Service"
5. Connect Repository
```

---

# ⚙️ Render Settings

```text
┌─────────────────────────────┬────────────────────┐
│ Name                        │ nex-rbg            │
├─────────────────────────────┼────────────────────┤
│ Environment                 │ Node               │
├─────────────────────────────┼────────────────────┤
│ Build Command               │ npm install        │
├─────────────────────────────┼────────────────────┤
│ Start Command               │ node nexcore.js    │
├─────────────────────────────┼────────────────────┤
│ Branch                      │ main               │
├─────────────────────────────┼────────────────────┤
│ Plan                        │ Free               │
└─────────────────────────────┴────────────────────┘
```

---

# 🌍 Live URL Example

```text
https://nex-bg.onrender.com
```

---

# 🔄 Auto Deploy

Every push to GitHub automatically redeploys.

```bash
git add .
git commit -m "update"
git push origin main
```

---

# 📁 Project Structure

```text
nex-rbg/
│
├── 📄 nexcore.js
├── 📄 index.js
├── 📄 config.json
├── 📄 package.json
├── 📄 README.md
│
├── 📁 public/
│   ├── 📄 nex.html
│   ├── 📄 nex.css
│   └── 📄 nex-script.js
│
└── 📁 uploads/
```

---

# 🎨 Color Theme

```css
┌──────────────────┬────────────┬──────────────┐
│ Element          │ Color      │ Usage        │
├──────────────────┼────────────┼──────────────┤
│ Background       │ #0a0e1a    │ Main BG      │
│ Card Background  │ #06090f    │ Cards        │
│ Primary Blue     │ #3b82f6    │ Buttons      │
│ Border Color     │ #1e2a4a    │ Borders      │
│ Text White       │ #f1f5f9    │ Headings     │
│ Text Gray        │ #94a3b8    │ Paragraphs   │
└──────────────────┴────────────┴──────────────┘
```

---

# 🎬 Animation Effects

| Animation | Usage |
|------------|--------|
| fadeInUp | Container animation |
| slideInDown | Header animation |
| pulseGlow | Status glow |
| iconFloat | Floating icons |
| zoomIn | Image zoom |
| ripple | Button click effect |
| auto-scroll | Smooth preview |

---

# 🔧 Troubleshooting

## ❌ Cannot Find Module

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## ❌ Port Already In Use

```javascript
const PORT = 3001;
```

---

## ❌ API Limit Exceeded

```text
Add more API keys in config.json
```

---

## ❌ Termux Permission Denied

```bash
termux-setup-storage
```

---

## ❌ Render Deploy Failed

```text
Check start command:

node nexcore.js
```

---

# 📞 Quick Commands

## 🚀 Local Development

```bash
npm install
npm start
```

---

## 📱 Termux

```bash
pkg install nodejs-lts git
git clone YOUR_REPO_URL
cd nex-rbg
npm install
npm start
```

---

## 🔥 PM2

```bash
npm install -g pm2
pm2 start nexcore.js
pm2 save
```

---

## 🌐 GitHub Push

```bash
git add .
git commit -m "update"
git push origin main
```

---

# 👨‍💻 Owner

<div align="center">

## Nex Core 

<br>

📧 info.nexcore.business@gmail com

<br>

⭐ If you like this project, give it a star on GitHub!

<br>

### Made with ❤️ by Nex Core

</div>

---

# 📄 License

```text
MIT License © 2026 NEX-RBG
```

---

<div align="center">

# 🚀 Ready to Remove Backgrounds Like a Pro 🚀

### Fast • Modern • AI Powered

</div>