const resolve = require('@rollup/plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const path = require('path');
const fs = require('fs');
const json = require('@rollup/plugin-json');
const micromatch = require('micromatch');
const PATHS = require('../../config/paths');
const { highlightLog } = require('../utils');
const { asyncCopyTo } = require('../../scripts/utils');
const glob = require('glob');

const rollupConfigFactory = (pkgName, externals = []) => {
  const LIB_BASE_PATH = path.resolve(PATHS.packages, pkgName, 'src', 'lib');

  const allFilesAndFolders = glob.sync(`${LIB_BASE_PATH}/**/*`);

  const allLibFiles = allFilesAndFolders.filter((file) => fs.statSync(file).isFile());

  const plugins = [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    }),
    json(),
    babel({
      presets: ['babel-preset-react-app/prod'],
      plugins: ['@babel/plugin-proposal-nullish-coalescing-operator'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    })
  ];

  const packageJson = require(path.resolve(PATHS.packages, pkgName, 'package.json'));
  const externalModules = Array.from(
    new Set([
      'react',
      'react-dom',
      'react-jss',
      packageJson.name,
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
      ...externals
    ])
  );

  highlightLog(`Build lib folder for ${pkgName}`);

  console.info('Copy index file');
  asyncCopyTo(
    path.resolve(PATHS.packages, pkgName, 'src', 'index.ts'),
    path.resolve(PATHS.packages, pkgName, `index.esm.js`)
  );

  return allLibFiles.map((file) => ({
    input: file,
    external: (id) => {
      const containsThisModule = (pkg) => id === pkg || id.startsWith(pkg + '/');
      return externalModules.some(containsThisModule);
    },
    treeshake: {
      moduleSideEffects: (id) => micromatch.isMatch(id, packageJson.sideEffects)
    },
    output: [
      {
        file: path.resolve(
          PATHS.packages,
          pkgName,
          'lib',
          file.replace(`${LIB_BASE_PATH}${path.sep}`, '').replace(/\.ts$/, '.js')
        ),
        format: 'es',
        sourcemap: true
      }
    ],
    plugins
  }));
};

module.exports = rollupConfigFactory;
