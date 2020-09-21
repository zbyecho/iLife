/*
 * @Date: 2020-09-21 09:59:16
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-21 11:55:26
 * @FilePath: /iLife/.eslintrc.js
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {},
}
