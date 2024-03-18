import resolve from '@rollup/plugin-node-resolve'

export default [
  // ES module config
  {
    input: 'src/index.js',
    plugins: [resolve()],
    output: {
      file: 'dist/index.mjs',
      format: 'es'
    }
  },
  // IIFE config
  {
    input: 'src/index.iife.js',
    plugins: [resolve()],
    output: {
      file: 'dist/index.js',
      format: 'iife',
      name: 'FadeEffects'
    }
  }
]
