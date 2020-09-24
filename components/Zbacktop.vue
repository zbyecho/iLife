<!--
 * @Date: 2020-09-21 16:02:34
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-09-22 14:57:47
 * @FilePath: /iLife/components/Zbacktop.vue
-->
<template>
    <div class="Zbacktop">
        <transition name="el-fade-in-linear">
            <el-button
                v-show="isShow"
                icon="el-icon-caret-top"
                circle
                @click="OnClick"
            ></el-button>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Zbacktop',
    props: {
        height: {
            type: Number,
            default: 100,
        },
    },
    computed: {
        isShow() {
            return this.$store.state.isShow
        },
    },
    data() {
        return {
            scrollTop: 0,
        }
    },
    methods: {
        OnClick() {
            this.$emit('OnClick', this.isShow)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        },
        OnScorll() {
            const _this = this
            window.addEventListener('scroll', () => {
                _this.scrollTop =
                    document.documentElement.scrollTop ||
                    window.pageYOffset ||
                    document.body.scrollTop
                if (
                    (_this.scrollTop > _this.$props.height || this.$route, name)
                ) {
                    // console.log()
                    // 符合条件
                    _this.$store.commit('increment', true)
                } else {
                    // 不否和条件
                    _this.$store.commit('increment', false)
                }
            })
        },
    },
    mounted() {
        this.OnScorll()
    },
}
</script>

<style lang="less" scoped>
.Zbacktop {
    position: fixed;
    bottom: 100px;
    right: 60px;
}
</style>
