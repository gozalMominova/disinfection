import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	build: {
		target: 'esnext', // Zamonaviy maqsadlarni belgilang
	},
	esbuild: {
		target: 'esnext', // ESbuild uchun ham maqsad belgilang
	},
})
