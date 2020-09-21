/*
 * @Date: 2020-09-21 16:34:26
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-21 16:44:46
 * @FilePath: /iLife/store/index.js
 */
/**
 * @description:  base 公共状态处理
 * @param {type}
 * @return {type}
 */

export const state = () => ({
    isShow: false, // 是否显示
})

export const mutations = {
    increment(state, call) {
        state.isShow = call
    },
}
