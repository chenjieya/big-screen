<template>
  <div id="third-container">
    <div id="echart" ref="echart"></div>
  </div>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue';
import $axios from '@/axios';
import { echartMethodInit } from './drawRect';
export default {
  setup() {
    // api
    const url = {
      equAlramUrl: 'bar/list'
    };

    // mounted生命周期
    onMounted(async () => {
      const { proxy:vue } = getCurrentInstance();
      const res = await $axios.http(url.equAlramUrl, null, 'get');
      const result = res.data;
      const length = result.yData.length;
      const maxData = Math.max(...result.yData);
      const constant = 10;
      let MAX = new Array(length).fill(maxData + constant);
      let xList = result.xData;
      let yList = result.yData;
      echartMethodInit(xList, yList, MAX, vue);
    });


  }
};
</script>

<style scoped>
#echart {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 99999;
}
</style>