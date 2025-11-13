import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Plugin to inline CSS into JS
function inlineCSSPlugin(): Plugin {
  let cssCode = ''

  return {
    name: 'inline-css',
    apply: 'build',
    transform(code, id) {
      if (id.endsWith('.css')) {
        cssCode += code
        return {
          code: `
const style = document.createElement('style');
style.textContent = ${JSON.stringify(code)};
document.head.appendChild(style);
`,
          map: null
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inlineCSSPlugin()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'HybridWidget',
      fileName: 'widget',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        // Don't externalize anything - bundle everything
        manualChunks: undefined,
        // Ensure CSS is not extracted
        assetFileNames: (assetInfo) => {
          return 'assets/[name][extname]'
        }
      }
    },
    cssCodeSplit: false
  }
})
