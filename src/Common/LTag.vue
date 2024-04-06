<template>
    <div class="tag" :style="`background: ${background}; color:${color}; flex-direction: ${direction ? 'column' : 'row'};`">
        {{ content }}

        <div v-if="tips">
            <el-tooltip class="item" effect="dark" :content="tips" placement="top">
                <span :class="`${icon}`"></span>
            </el-tooltip>

        </div>
        <div v-else class="item">
            <span :class="`${icon}`"></span>
        </div>

    </div>
</template>

<script>


export default {
    name: 'LTag',
    data() {
        return {

        }
    },
    props: {
        content: String,
        background: String,
        icon: String,
        tips: String,
        color: String,
        direction: Boolean
    },
    mounted() {
        console.log(this.content)
    }

}
</script>

<style scoped>
.tag {
    font-size: 12px;
    border-radius: 2px;
    padding: 2px 6px;
    display: flex;
    margin-left: 8px;
    justify-content: center;
    align-items: center;
}

.item {
    margin-left: 5px;
}
</style>