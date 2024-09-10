import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import { ViteEjsPlugin } from "vite-plugin-ejs";

const root = process.cwd();
const pathResolve = (dir: string) => resolve(root, '.', dir);

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  const argMode = process.argv[3] === '--mode' ? process.argv[4] : process.argv[3];
  const configDir = pathResolve('config');
  const env = loadEnv(isBuild ? mode : argMode, configDir);
  return {
    envDir: pathResolve('config'),
    base: env.VITE_BASE_URL,
    build: {
      minify: 'terser',
      target: 'es2015',
      outDir: env.VITE_OUT_DIR || 'dist',
    },
    plugins: [
      vue(),
      ViteEjsPlugin({
        title: env.VITE_APP_TITLE
      })
    ],
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
      alias: [
        {
          find: /\@\//,
          replacement: `${pathResolve('src')}/`
        }
      ]
    },
    server: {
      proxy: {
        // 接口代理
        // [env.VITE_API_BASEPATH]: {
        //   target: env.VITE_BASE_URL,
        //   changeOrigin: true,
        //   // rewrite: (path) => path.replace(/^\/web/, '')
        // },
      }
    }
  };
};
