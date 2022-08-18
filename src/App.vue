<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import { ref, onMounted, getCurrentInstance } from 'vue';
// import $axios from '@/axios'
export default {
  name: 'App',
  components: {

  },
  async created() {
    // const res = await $axios.http('test');
    // console.log(res, 'result')
  },

  // 测试compositionAPI
  // setup() {
  //   const instance = getCurrentInstance();
  //   console.log(instance.proxy.$enum, 'ctx')
  //   onMounted(async () => {
  //     const res = await $axios.http('test');
  //     console.log(res, 'result')
  //   })
  // }
}
</script>

<style lang="scss">
</style>
