import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/port_homepage/page1/dist/',  // 배포용 - 필요시 활성화
})
