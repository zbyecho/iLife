/*
 * @Date: 2020-09-21 09:59:16
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-21 14:19:42
 * @FilePath: /iLife/nuxt.config.js
 */
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'iLife',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~/plugins/element-ui'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ['@nuxtjs/style-resources'],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        babel: {
            plugins: [
                [
                    'component',
                    {
                        libraryName: 'element-ui',
                        styleLibraryName: 'theme-chalk',
                    },
                ],
            ],
        },
    },

    styleResources: {
        less: './assets/**/*.less',
    },
}
