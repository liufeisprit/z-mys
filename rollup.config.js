import json from 'rollup-plugin-json'
export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: "mys",
    banner: "/*mys*/",
    footer: "/*mys*/",
  },
  plugins: [ json() ]
};