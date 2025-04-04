import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader"
import { resolve } from 'path'
import zipPack from "vite-plugin-zip-pack" // make dist.zip file
import {dateFormatter} from "./src/utility";
const timeStringNow = dateFormatter(new Date(), 'yyyy-MM-dd hh-mm-ss')


// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 1021,
        host: '0.0.0.0',// 自定义主机名
        https: false,
        proxy: {
            '/portal': {
                // target: 'http://localhost:3000',
                target: 'http://kylebing.cn:3000',
                changeOrigin: true,
                rewrite: (path) => {
                    console.log(path)
                    return path.replace('/portal', '/')
                },
            },
        }
    },
    base: './',
    plugins: [
        vue(),
        svgLoader(),
        zipPack({
            inDir: 'dist',
            outDir: 'archive',
            outFileName: `index-${timeStringNow}.zip`,
            pathPrefix: ''
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },

})
