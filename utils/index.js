/*
 * @Date: 2020-09-22 10:29:12
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-22 11:46:53
 * @FilePath: /iLife/utils/index.js
 */
export const setHeade = (store, title) => {
    console.log(store)
    store.commit('CommitTitle', title)
}
