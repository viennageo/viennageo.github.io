import typescript2 from 'rollup-plugin-typescript2'
import run from '@rollup/plugin-run'

export default {
    input: 'src/app.tsx',
    output: {
        file: 'bundle.js',
        format: 'cjs',
    },
    external: ['preact', 'preact-render-to-string', 'prettier', 'fs', 'path'],
    plugins: [typescript2(), run()],
    treeshake: false,
}
