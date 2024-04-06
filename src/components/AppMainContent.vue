<template>
    <el-card>
        <div ref="containerBox">
            <div class="Dheader">
                <div class="Dheader_right">
                    <article class="Dheader_right_article"> NB7896764654</article>
                    <LTag content="客户" color="#2C68FF" background="#DEECFC" />
                    <LTag content="首" background="#2C68FF" color="#fff" />
                    <LTag content="卡其色" background="#E3E6EB " />
                </div>
                <div class="Dheader_left" @click="changeHeight">
                    {{ isChangeHeight ? '展开' : '收起' }}

                    <i :class="isChangeHeight ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></i>
                </div>
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


                <div class="tableMainBox">
                    <el-table :header-cell-style="{ background: '#F6F7FA' }" :data="tableData" height="110" border
                        style="width: 100%">
                        <el-table-column v-for="(items, index) in columnsData" :key="index" :prop="items.prop"
                            :label="items.label" :width="items.width">
                        </el-table-column>
                    </el-table>
                </div>

                <AppDrawerPriceInfo />

                <AppapplyProcess />
            </div>

        </div>


    </el-card>
</template>

<script>
import LTag from '../Common/LTag.vue'
import AppDrawerPriceInfo from './AppDrawerPriceInfo.vue'
import AppapplyProcess from './AppapplyProcess.vue'
import { columns } from './data'
export default {
    name: 'AppMainContent',
    data() {
        return {
            columnsData: columns,
            isChangeHeight: false
        }
    },
    components: {
        LTag,
        AppDrawerPriceInfo,
        AppapplyProcess,
    },
    props: {
        tableData: Array,
    },
    methods: {
        changeHeight() {
            this.isChangeHeight = !this.isChangeHeight
            this.$refs.containerBox.style.height = this.isChangeHeight ? '0px' : '100%'

        }
    }
}
</script>

<style scoped>
.Dheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.Dcontent {
    /* display: flex; */
    transition: 1s all;
}

.Dheader_right {
    display: flex;
    align-items: center;
}

.Dheader_left {
    font-size: 14px;
    color: #2C68FF;
    cursor: pointer;
}

.Dheader_right_article {
    font-size: 16px;
    font-weight: 700;
}

.Dcontent_imageBox {
    display: flex;
    flex-direction: column;
}

.Dcontent_imageBox_title {
    padding: 5px 0;
    font-size: 14px;
    font-weight: 700;
}

.Dcontent_imageBox_mainBox {
    display: flex;
}

.Dcontent_imageBox_leftBox_imgBox {
    width: 60px;
    height: 80px;

}

.Dcontent_imageBox_rightBox {
    display: grid;
    font-size: 12px;
    padding: 15px;
    grid-template-columns: repeat(3, 1fr);
    flex: 1;
}

.Dcontent_imageBox_rightBox_contentBox {
    display: flex;
    align-items: center;
}

.Dcontent_imageBox_rightBox_contentBox_title {
    color: #7F8790;
    width: 60px;
    display: block;
    text-align: end;
}

.Dcontent_imageBox_rightBox_contentBox_desc {
    padding-left: 10px;
}



.tableMainBox {
    padding: 12px 0;
    border-bottom: 1px dashed #D4D8E1;
}

/* .Tableheader{
    background-color: #0074f9 !important;
} */
.el-table /deep/ th {
    padding: 6px 0;
}

.el-table /deep/ td {
    padding: 6px 0;

}
</style>