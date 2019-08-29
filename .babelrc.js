const moduleEnv = process.env.MODULE || 'es6';
const presets = [
  "@babel/preset-react"
];
const plugins = [
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-syntax-import-meta",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-json-strings",
  [
    "@babel/plugin-proposal-decorators",
    {
      "legacy": true
    }
  ],
  "@babel/plugin-proposal-function-sent",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-numeric-separator",
  "@babel/plugin-proposal-throw-expressions",
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
