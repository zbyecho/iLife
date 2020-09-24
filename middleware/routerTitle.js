/*
 * @Date: 2020-09-22 11:42:50
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-22 14:57:26
 * @FilePath: /iLife/middleware/routerTitle.js
 */
import { setHeade } from '@/utils/index'
export default ({ store, route }) => {
    if (route.meta[0].title) {
        setHeade(store, route.meta[0].title)
    } else {
        setHeade(store, 'iLife')
    }
}
