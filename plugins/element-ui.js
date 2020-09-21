/*
 * @Date: 2020-09-21 14:08:43
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-21 16:03:25
 * @FilePath: /iLife/plugins/element-ui.js
 */
import Vue from 'vue'
import { Container, Header, Main, Row, Col, Button } from 'element-ui'

const components = [Container, Header, Main, Row, Col, Button]

const ElementUi = {
    install(Vue) {
        components.forEach((component) => {
            Vue.component(component.name, component)
        })
    },
}

Vue.use(ElementUi)
