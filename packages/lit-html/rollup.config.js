import typescript from '@rollup/plugin-typescript';
import {dts} from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    plugins: [typescript()],
    output: [
      {file: 'dist/lit-html.js', format: 'es', sourcemap: true},
    ],
  },
  {
    input: "dist/temp/index.d.ts",
    output: [{ file: "dist/lit-html.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
