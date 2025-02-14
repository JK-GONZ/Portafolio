import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/components/App"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
    "extensions": [".json"]
  },
})
