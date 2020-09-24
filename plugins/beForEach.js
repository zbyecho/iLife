/*
 * @Date: 2020-09-22 10:17:08
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-22 11:40:09
 * @FilePath: /iLife/plugins/beForEach.js
 */

import { setHeade } from '@/utils/index'
export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        // to and from are both route objects. must call `next`.
        console.log('------to-------')
        console.log(to)
        console.log('------from-------')
        console.log(from)
        if (from.meta.title) {
            setHeade(app, from.meta.title)
        } else {
            setHeade(app, 'iLife')
        }
        next()
    })
}
