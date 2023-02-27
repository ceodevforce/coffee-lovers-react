/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vitest/config";
// import react from '@vitejs/plugin-react-swc'
export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        exclude: [
            'node_modules'
        ]
    }
})
