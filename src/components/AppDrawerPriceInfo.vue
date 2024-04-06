<template>
    <div class="AppDrawerPriceInfo">
        <div class="AppDrawerPriceInfo_headerBox">
            <article class="AppDrawerPriceInfo_headerBox_text">价格信息</article>
            <LTag content="二级工艺" background="#DEECFC" icon="el-icon-warning-outline"
                tips="当前订单在CNT【6.5<CMT价格<8】    优选‘外车车缝+尾部，次选‘外车车缝’,不合理‘本厂’" />
            <LTag content="排单不合理" background="#FCE9DE" icon="el-icon-info" color="#FF7D00" />

        </div>
        <div class="girdBox">

            <div class="girdBoxTitle" v-for="(items, index ) of list.slice(0,4)" :key="index">
                <span class="girdBoxTitle_text">{{ items.title }}</span>
                <span class="girdBoxTitle_desc">{{ items.desc }}</span>
             
            </div>
        </div>
      

                <div class="gird2Box">

                <div class="girdBoxTitle" v-for="(items, index ) of list.slice(4)" :key="index">
                    <span class="girdBoxTitle_text">{{ items.title }}</span>
                    <span class="girdBoxTitle_desc">{{ items.desc }}</span>
                    <span class="girdBoxTitle_elseDesc" v-if="items.elseDesc">
                        <span v-for="(desc, descIndex) of items.elseDesc" :key="descIndex">
                            {{ desc }}</span>
                    </span>
                </div>
            </div>
    </div>
</template>

<script>
import LTag from '../Common/LTag'

export default {
    name: 'AppDrawerPriceInfo',
    data() {
        return {
            list: [
                { title: '加工方:', desc: '公安盛乾厂' },
                { title: '加工项目:', desc: '工艺' },
                { title: '申请排单价:', desc: '1.20元(备注：工序价格1.20，工艺价格0.00）' },
                { title: '历史最低价:', desc: '本厂 0.10元 | 外厂 -' },
                { title: '触发审核原因:', elseDesc: ['1.加工方法选择不合理，建议选择‘本厂’车缝', '2.排单价超合理价'] },
                { title: '申请原因:', desc: '这里是申请原因，这里是申请原因，这里是申请原因，这里是申请原因，这里是申请原因。' }
            ]

        }
    },
    components: {
        LTag
    },
    props: {
        drawer: Boolean,
        direction: String,
        handleClose: Function
    },
    methods: {
        // 封装一个方法来处理关闭前的逻辑
    }
}
</script>

<style scoped>
.AppDrawerPriceInfo {
    height: 100%;
}

.AppDrawerPriceInfo_headerBox {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.tagClass {
    margin-left: 6px;
    padding: 0 4px;
    font-size: 12px;
}

.girdBox {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    flex: 1;
}

.girdBoxTitle {
    display: flex;
    font-size: 12px;
    padding: 6px 0;
    align-items: center;
}

.girdBoxTitle_text {
    color: #7F8790;
    min-width: 100px;
        display: block;
    text-align: end;
}


.girdBoxTitle_desc {
    margin-left: 10px;
}



.girdBoxTitle_elseDesc {
    display: flex;
    flex-direction: column;
    color: #FF7D00;
}
.gird2Box{
    display: grid;

}
</style>