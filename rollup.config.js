import json from 'rollup-plugin-json'
import {terser} from 'rollup-plugin-terser'
export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: "mys",
    banner: "/*mys*/",
    footer: "/*mys*/",
  },
  plugins: [ json(),terser() ]
};