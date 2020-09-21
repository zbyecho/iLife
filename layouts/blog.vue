<!--
 * @Date: 2020-09-21 13:58:26
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-21 17:22:15
 * @FilePath: /iLife/layouts/blog.vue
-->
<template>
    <div class="hclass">
        <el-container>
            <transition name="el-fade-in-linear">
                <el-header v-show="$store.state.isShow" class="fxd">
                    <Zheader />
                </el-header>
            </transition>
            <el-main class="main-cnt">
                <nuxt />
            </el-main>
        </el-container>
        <Zbacktop />
    </div>
</template>

<script>
export default {
    computed: {
        isShow() {
            return this.$store.state.isShow
        },
    },
}
</script>

<style lang="less" scoped>
.hclass {
    background-color: #ffffff;
    height: calc(100% - 80px);
    overflow: hidden;
}
.fxd {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    padding: 0;
}
.main-cnt {
    overflow-y: scroll;
    height: calc(100 - 100px);
}
</style>
