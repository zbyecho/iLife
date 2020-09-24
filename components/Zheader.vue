<!--
 * @Date: 2020-09-21 14:30:34
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-22 09:52:05
 * @FilePath: /iLife/components/Zheader.vue
-->
<template>
    <div :class="hclass">
        <el-row>
            <el-col :span="8">
                <Logo :width="80" :height="60" />
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20">
                    <el-col :span="4" class="traget_box">
                        <div class="traget_box" @click="go('index', {})">
                            首页
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="traget_box" @click="go('about', {})">
                            个人中心
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="traget_box">个人技能</div>
                    </el-col>
                    <el-col :span="4">
                        <div class="traget_box">项目案例</div>
                    </el-col>
                    <el-col :span="4">
                        <div class="traget_box">人生格言</div>
                    </el-col>
                    <el-col :span="4">
                        <div class="traget_box">欢迎留言</div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Zheader',
    props: {
        hclass: {
            type: String,
            default: 'Hbg',
        },
    },
    methods: {
        /**
         * @description: 头部导航跳转
         * @param {type} { name: ”路由名称“, params 参数}
         * @return {type}
         */
        go(routeName, _params) {
            this.$router.push({
                name: routeName,
                params: _params,
            })
        },
    },
}
</script>

<style lang="less" scoped>
.traget_box {
    height: 60px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
}
.Hbg {
    background-color: #ffffff;
    padding: 8px 10px;
}
</style>
