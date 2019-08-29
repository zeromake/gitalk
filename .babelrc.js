const moduleEnv = process.env.MODULE || 'es6';
const presets = [
  "@babel/preset-react"
];
const plugins = [
  "@babel/plugin-proposal-class-properties",
];

if (moduleEnv === 'umd') {
  presets.push(
    [
      "@babel/env",
      {
        "modules": "umd"
      }
    ]
  )
  plugins.push(
    "babel-plugin-add-module-exports"
  )
} else {
  presets.push(
    "@babel/env"
  )
}

module.exports = {
  "sourceMaps": true,
  "presets": presets,
  "plugins": plugins
}
