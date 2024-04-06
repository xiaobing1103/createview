<template>
    <div class="AppSkcProject">
        <header class="AppSkcProject_header">
            <span>同SKC+同加工项目</span>

        </header>
        <el-card>
            <div class="AppSkcProject_mainbox">
                <article class="AppSkcProject_mainbox_article">DE78675458671 </article>
                <div class="AppSkcProject_mainbox_article_tagBox">
                    <LTag content="ZARA" background="#DEECFC" color="#2C68FF" direction />
                    <LTag content="返" background="#2AD0AC" color="#fff" direction />
                    <LTag content="卡其色" background="#E3E6EB" color="#000" direction />
                </div>
            </div>

            <div class="AppSkcProject_mainbox_content">
                <div class="leftBox">
                    <img class="leftBox_imgBox" src="http://file.1foo.com/2024/04/06/e7864dc815f3e890c4220113da766985.png"
                        alt="">
                </div>
                <div class="rightBox">
                    <div class="rightBox_content" v-for="(items, index) of list" :key="index">
                        <span class="rightBox_title">{{ items.title }} </span>
                        <span v-if="items.desc" class="rightBox_desc">{{ items.desc }} </span>
                        <span v-if="items.prices" class="rightBox_desc"> {{ items.prices }} <i
                                :class="items.pricesIcon"></i></span>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import LTag from '../Common/LTag'
export default {
    name: 'AppSkcProject',
    data() {
        return {
            list: [
                { title: '加工方:', desc: '公安盛乾厂' },
                { title: '加工项目:', desc: '工艺', },
                { title: '申请排单价:', prices: "19.26元(备注：工序价格17.20，工艺价格2.06)", pricesIcon: 'el-icon-warning-outline' },
                { title: '历史最低价:', prices: "本厂18.96元 | 外厂 - " }
            ]
        }
    },
    components: {
        LTag
    },
    props: {
    },
    methods: {

    }
}
</script>

<style scoped>
.AppSkcProject {

    padding: 10px 0;
}


.AppSkcProject_header {
    font-size: 12px;
    padding: 10px 0;
}

.AppapplyProcess_text {
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
}

.AppSkcProject_mainbox {
    display: flex;
}


.AppSkcProject_mainbox_article_tagBox {
    display: flex;
}


.AppSkcProject_mainbox_content {
    display: flex;
    padding: 10px 0;
}

.leftBox {
    width: 60px;
    height: 80px;
}

.leftBox_imgBox {
    width: 60px;
    height: 80px;
}

.rightBox {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    flex: 1;
}
.rightBox_content{
    display: flex;
}
.rightBox_title {
    font-size: 12px;
    color: #7F8790;
    min-width: 100px;
    width: 100px;
    text-align: end;
    display: block;
}

.rightBox_desc {
    font-size: 12px;
    margin-left: 10px;
}
</style>