import { defineConfig } from "rollup";
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import run from '@rollup/plugin-run';


export default defineConfig({
    input: './src/index.ts',
    output: {
        dir: './build',
        format: 'module'
    },
    external: ['express'],
    plugins: [
        typescript(),
        nodeResolve(),
        commonjs(),
        json(),
        run()
    ]
})