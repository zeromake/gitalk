// webpack config for export react component
const baseConfig = require('./webpack.config.js')

const webpackConfig = Object.assign({}, baseConfig);

webpackConfig.entry = { gitalk: './src/gitalk.jsx' }
webpackConfig.output = Object.assign({}, webpackConfig.output)
webpackConfig.output.filename = 'gitalk-component.js'

delete webpackConfig.resolve.alias
webpackConfig.externals = {
  react: 'commonjs react',
  'react-dom': 'commonjs react-dom'
}

module.exports = webpackConfig
