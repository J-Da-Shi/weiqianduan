import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hmr: false
  },
  base: process.env.NODE_ENV === 'production' ? './' : './',
  build: {
    // 👇 关键：输出为 IIFE 格式（非模块）
    cssCodeSplit: false, // ← 注意：设为 false 才会生成 single CSS 文件！
    rollupOptions: {
      output: {
        format: 'iife', // ← 立即执行函数表达式
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: ({ name }) => {
          if (name?.endsWith('.css')) {
            return 'assets/app.css'; // 固定名称，便于引用
          }
          return 'assets/[name].[ext]';
        },
      },
    },
    // 👇 禁用 dynamic import polyfill（可选）
    dynamicImportVarsOptions: {
      exclude: [/./], // 防止生成 import() 相关代码
    },
  },
})
