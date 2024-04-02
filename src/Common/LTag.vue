<template>
    <div class="tag" :style="`background: ${this.background}`">{{ content }}</div>
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
        background: String
    },
    mounted() {
        console.log(this.content)
    }

}
</script>

<style scoped>
.tag{
    font-size: 12px;
    border-radius: 2px;
    padding: 2px 6px;
}
</style>