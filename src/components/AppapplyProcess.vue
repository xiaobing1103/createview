<template>
    <div class="AppapplyProcess">
        <header class="AppapplyProcess_header">
            <span>审批流程</span>
            <span class="AppapplyProcess_text" @click="changeHeight">{{ isActiveHeight ? '收起' : ' 查看' }} <i
                    class="el-icon-arrow-down"></i></span>
        </header>
        <main ref="mainBox" class="main">
            <div class="stepsBox" style="height: 300px;">
                <el-steps direction="vertical" :active="active">

                    <el-step v-for="(items, index) of steps" :title="items.title" :description="items.desc" :key="index">
                        <template #icon>
                            <!-- 你的自定义图标，比如一个 SVG 或图片 -->
                            <span :class="index == active - 1 && 'round'"></span>

                        </template> </el-step>

                </el-steps>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'AppapplyProcess',
    data() {
        return {
            isActiveHeight: false,
            active: 1,
            steps: [
                {
                    title: '提交',
                    desc: '厂长'
                },
                {
                    title: '合伙人审核',
                    desc: '系统'
                },
                {
                    title: '厂长审核',
                    desc: '苏大强'
                },
                {
                    title: '反审核',
                    desc: '苏大强'
                },
                {
                    title: '合伙人审核',
                    desc: '祁红纺织科技'

                }
            ]
        }
    },
    components: {
    },
    props: {
    },
    methods: {
        changeHeight() {
            this.isActiveHeight = !this.isActiveHeight
            this.$refs.mainBox.style.height = this.isActiveHeight ? '0px' : '100%'
        }
    }
}
</script>

<style scoped>
.AppapplyProcess {
    font-size: 14px;
    font-weight: 700;
    padding: 5px 0;
}

.main {
    overflow: hidden;
}

.AppapplyProcess_header {}

.AppapplyProcess_text {
    font-size: 12px;
    font-weight: 500;
    margin-left: 15px;
}

.active {}

.round {
    border-radius: 50px;

    width: 10px;
    background-color: #2C68FF;
    height: 10px;
}

.el-step /deep/ .el-step__icon {
    width: 10px;
    height: 10px;
}


.el-step /deep/ .el-step__head {
    display: flex;
    justify-content: center;
}

.stepsBox {
    padding: 15px;
}
</style>