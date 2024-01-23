/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from "path"
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";


export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, './src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
      /**
       * 自定义插入位置
       * @default: body-last
       */
      inject: 'body-last',
      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__',
      svgoOptions: {
        full: true,
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: 'fill'
            }
          }
        ]
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './src/test/setup.ts'),
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: false,
      }
    }
  },
})
