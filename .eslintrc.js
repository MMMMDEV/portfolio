/* eslint-disable no-undef */
module.exports = {
    "parser": "@babel/eslint-parser",
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "sourceType": "module",
        "requireConfigFile": false,
        "babelOptions": {
            "presets": ["@babel/preset-react"]
         },
},
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "off",
        "no-unused-vars": "warn"
    },
}
