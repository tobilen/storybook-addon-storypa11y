import includePaths from 'rollup-plugin-includepaths';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [includePaths({ paths: ['./'] })],
};
