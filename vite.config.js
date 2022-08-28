import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';
import postcssPresetEnv from 'postcss-preset-env';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  plugins: [
    vue(),
    vueJsx(),
    eslint({
      cache: false
    }),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv]
    },
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/index.less";'
      }
    }
  }
});
