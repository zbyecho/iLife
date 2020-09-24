/*
 * @Date: 2020-09-22 10:55:11
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-22 11:34:04
 * @FilePath: /iLife/router/index.js
 */
const routes = [
    {
        name: 'index',
        path: '/',
        meta: { title: '首页' },
    },
    {
        name: 'about',
        path: '/about',
        meta: { title: '个人中心' },
    },
]

const meageRoute = (list) => {
    console.log('list', list)
    for (let item in list) {
        for (const m in routes) {
            if (
                list[item].name === routes[m].name &&
                list[item].path === routes[m].path
            ) {
                list[item].meta = routes[m].meta
                // list[item].meta.requireAuth = true;
            }
        }
        if (list[item].children && list[item].children.length > 0) {
            meageRoute(list[item].children)
        } else {
            return list
        }
    }
}

export default (routes, resolve) => {
    routes = meageRoute(routes)
    console.log('routes', routes)
}
