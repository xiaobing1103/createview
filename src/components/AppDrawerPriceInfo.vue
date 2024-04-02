<template>
    <div class="AppDrawerPriceInfo">
        <div class="AppDrawerPriceInfo_headerBox">
            <article class="AppDrawerPriceInfo_headerBox_text">价格信息</article>
            <div class="tagClass">客户</div>
            <LTag content="客户" background="#DEECFC" />
            <div class="tagClass" effect="dark">首</div>
            <div class="tagClass" type="info">卡其色</div>
        </div>

    </div>
</template>

<script>
import LTag from '../Common/LTag'

export default {
    name: 'AppDrawerPriceInfo',
    data() {
        return {

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
.AppDrawerPriceInfo {}

.AppDrawerPriceInfo_headerBox {
    display: flex;
    align-items: center;
}

.tagClass {
    margin-left: 6px;
    padding: 0 4px;
    font-size: 12px;
}
</style>