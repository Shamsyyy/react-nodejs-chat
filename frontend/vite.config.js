import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['axios', 'react-chat-engine-pretty']
  }
})

// https://vitejs.dev/config/