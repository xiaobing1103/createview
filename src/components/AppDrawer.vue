<template>
    <el-drawer size="60%" title="排单审核" :visible="drawer" :direction="direction" :before-close="handleBeforeClose">
        <el-card>
            <div class="Dheader">
                NB7896764654
                <el-tag>客户</el-tag>
                <el-tag>首</el-tag>
                <el-tag>卡其色</el-tag>

            </div>
            <div class="Dcontent">

                <div class="Dcontent_imageBox">
                    <div class="Dcontent_imageBox_title">订单信息</div>
                    <div class="Dcontent_imageBox_mainBox">
                        <div class="Dcontent_imageBox_leftBox">
                            <img class="Dcontent_imageBox_leftBox_imgBox"
                                src="http://ai-img-1foo.oss-cn-guangzhou.aliyuncs.com/2024/04/01/1711951755.41028794f370fcb888f51e7c8e40fa2428a2b49.png">
                        </div>
                        <div class="Dcontent_imageBox_rightBox">
                            <div class="Dcontent_imageBox_rightBox_contentBox">
                                <span class="Dcontent_imageBox_rightBox_contentBox_title">
                                    订单编号:
                                </span>
                                <span class="Dcontent_imageBox_rightBox_contentBox_desc">NB7896764654</span>
                            </div>
                            <div class="Dcontent_imageBox_rightBox_contentBox">
                                <span class="Dcontent_imageBox_rightBox_contentBox_title">
                                    颜色:
                                </span>
                                <span class="Dcontent_imageBox_rightBox_contentBox_desc">杏仁色</span>
                            </div>
                            <div class="Dcontent_imageBox_rightBox_contentBox">
                                <span class="Dcontent_imageBox_rightBox_contentBox_title">
                                    订单时间:
                                </span>
                                <span class="Dcontent_imageBox_rightBox_contentBox_desc">2022-10-26 12:23:45</span>
                            </div>
                            <div class="Dcontent_imageBox_rightBox_contentBox">
                                <span class="Dcontent_imageBox_rightBox_contentBox_title">
                                    SKC:
                                </span>
                                <span class="Dcontent_imageBox_rightBox_contentBox_desc">K20231020121</span>
                            </div>
                            <div class="Dcontent_imageBox_rightBox_contentBox">
                                <span class="Dcontent_imageBox_rightBox_contentBox_title">
                                    合同货期:
                                </span>
                                <span class="Dcontent_imageBox_rightBox_contentBox_desc">2012-01-01</span>
                            </div>
                            <div class="Dcontent_imageBox_rightBox_contentBox">
                                <span class="Dcontent_imageBox_rightBox_contentBox_title">
                                    设计款号:
                                </span>
                                <span class="Dcontent_imageBox_rightBox_contentBox_desc">SH5465468411545</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </el-drawer>
</template>

<script>
export default {
    name: 'AppDrawer',
    props: {
        drawer: Boolean,
        direction: String,
        handleClose: Function
    },
    methods: {
        // 封装一个方法来处理关闭前的逻辑
        handleBeforeClose(done) {
            this.$emit('handleClose', done);

        }
    }
}
</script>

<style scoped>
.Dcontent {
    padding: 10px;
}

.Dcontent_imageBox {
    display: flex;
    flex-direction: column;
}

.Dcontent_imageBox_title {
    padding: 5px 0;
}

.Dcontent_imageBox_mainBox{
    display: flex;
}
.Dcontent_imageBox_leftBox_imgBox {
    width: 100px;

}

.Dcontent_imageBox_rightBox {
    display: grid;
    font-size: 12px;
    padding: 15px;
    grid-template-columns: repeat(3, 1fr);
}
</style>