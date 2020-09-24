<!--
 * @Date: 2020-09-21 09:59:16
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-22 13:33:08
 * @FilePath: /iLife/pages/index.vue
-->
<template>
    <div class="container">
        <div>
            <!-- <Logo /> -->
            <Zbanner />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '首页',
        }
    },
}
</script>

<style lang="less" scoped>
@import url('~/assets/conmm.less');
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
