<template>
    <el-drawer size="1000px" title="排单审核" :visible="drawer" :direction="direction" :before-close="handleBeforeClose">
        <div class="container">
            <div class="mainBox">
                <div class="showSeleted">
                    <span class="seletedBox"><i class="el-icon-check"></i> </span>
                    <AppapplyProcess :tableData="tableData" />
                </div>
                <!-- 同SKC+同加工项目 -->
                <div>
                    <header class="AppSkcProject_header">
                        <span>同SKC+同加工项目</span>

                    </header>
                    <div class="showSeleted">
                        <span class="seletedBox"><i class="el-icon-check"></i> </span>
                        <AppSkcProject />
                    </div>
                </div>
                <div>
                    <header class="AppSkcProject_header">
                        <span>同SKC+同加工项目</span>

                    </header>
                    <div class="showSeleted">
                        <span class="seletedBox"><i class="el-icon-check"></i> </span>
                        <AppSkcProject />
                    </div>
                </div>

            </div>
            <footer class="footer">
                <div class="Seletedtotal">
                    已选 {{ 1 }} 条
                </div>
                <div class="btnGroup">
                    <el-button disabled>批量驳回</el-button>
                    <el-button disabled type="primary">批量审核</el-button>
                    <el-button>驳回</el-button>
                    <el-button type="primary">通过</el-button>
                </div>
            </footer>
        </div>


    </el-drawer>
</template>

<script>

// import AppDrawerPriceInfo from './AppDrawerPriceInfo.vue'
// import AppapplyProcess from './AppapplyProcess.vue'
import AppSkcProject from './AppSkcProject.vue'
import AppapplyProcess from './AppMainContent.vue'

// import LTag from '../Common/LTag'
export default {
    name: 'AppDrawer',
    data() {
        return {
            isChangeHeight: false,
            tableData: [{
                date: '下单数量',
                S: '80',
                M: '80',
                L: '80',
                XL: '80',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                total: '320'
            }, {
                date: '裁床数量',
                S: '2菲 | 100件',
                M: '2菲 | 100件',
                L: '2菲 | 100件',
                XL: '2菲 | 100件',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                total: '8菲 | 400件'
            }]
        }
    },
    components: {
        // AppDrawerPriceInfo,
        // AppapplyProcess,
        AppSkcProject,
        AppapplyProcess
        // LTag
    },
    props: {
        drawer: Boolean,
        direction: String,
        handleClose: Function
    },
    methods: {
        // 封装一个方法来处理关闭前的逻辑
        handleBeforeClose(done) {
            this.$emit('handleClose', done);


        },
    }
}
</script>

<style scoped>
.tagClass {
    margin-left: 6px;
    padding: 0 4px;
}

.container {
    /* height: 100%; */
    position: relative;
}

.mainBox {
    background-color: #EDEFF2;
    padding: 16px 24px;
    box-sizing: border-box;
    min-height: 100vh;
}


.footer {
    width: 100%;
    position: sticky;
    bottom: 0px;
    border-top: 1px solid #EDEFF2;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
}

.btnGroup {
    display: flex;
}

.showSeleted {
    border: 2px solid #9ac2fe;
    position: relative;
}

.showSeleted:hover {
    border: 2px solid #2C68FF;

}

.showSeleted:hover .seletedBox {
    background-color: #2C68FF;

}

.AppSkcProject_header {
    font-size: 12px;
    padding: 10px 0;
}

.seletedBox {
    color: #fff;
    background-color: #9ac2fe;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    clip-path: polygon(0 0, 100% 0, 0 100%);
}
</style>