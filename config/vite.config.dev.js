import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import mkcert from 'vite-plugin-mkcert'
import dns from 'dns';

import common from './vite.config.base.js';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    const plugins = [
        splitVendorChunkPlugin(), 
        mkcert()
    ];
    common.plugins.push(plugins);

    return {
        ...common,
        base: env.VITE_BASE_URL,
        server: {
            https: true,
            port: 347,
        },
        build: {
            sourcemap: true,
            target: 'esnext', //browsers can handle the latest ES features
        },
    };
});
