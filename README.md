# Chrome Extension Boilerplate 🚀
A boilerplate for building Chrome extensions using **React 19**, **TypeScript**, **Webpack 5**, and **SCSS**. This setup includes state management with **Redux Toolkit** and data fetching with **React Query**.

---

## Features 🌟
- ⚛️ **React 19** for UI development  
- 🛠 **TypeScript** for type-safe code  
- 📦 **Webpack 5** for bundling and optimization  
- 🎨 **SCSS** for modular styles  
- 🗄 **Redux Toolkit** for state management  
- 🔄 **React Query** for efficient server-state management  
- 🔥 **Hot Reload** during development  

---

## Installation 🔧
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chromeextension.git
   cd chromeextension
2. Install dependencies:
   ```bash
   npm install
3. Run in development mode:
   ```bash
   npm run dev
4. Build for production:
   ```bash
   npm run build
5. Load the extension in Chrome:
   
   Go to chrome://extensions/.

   Enable Developer mode.

   Click Load unpacked and select the build folder.
## Scripts 📜
npm run dev - Start development with hot reload.

npm run build - Create an optimized production build.
## Dependencies 📦
Core:

react, react-dom, @reduxjs/toolkit, react-redux, @tanstack/react-query
## Dev Tools:

webpack, webpack-cli, ts-loader, sass-loader, babel-loader, html-webpack-plugin, dotenv-webpack, copy-webpack-plugin

## Configuration ⚙️
Webpack: Split into webpack.dev.js and webpack.prod.js for development and production builds.

TypeScript: Configured with tsconfig.json.

SCSS: Managed with sass-loader and css-loader.
