<template>
  <div id="app">
    <el-row>
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        点我打开
      </el-button>
    </el-row>

    <AppDrawer :drawer="drawer" :direction="direction" @handleClose="handleClose" />
  </div>
</template>

<script>
import AppDrawer from './components/AppDrawer.vue'

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    };
  },
  components: {
    // HelloWorld
    AppDrawer
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          console.log(_)
          this.drawer = !this.drawer
          done();
        })

        .catch(_ => {
          console.log(_)
        });
    }
  }
}
</script>

