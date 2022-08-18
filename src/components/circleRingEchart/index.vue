<template>
  <div id="circle-ring-container">
    <div class="circle-echart"></div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';
import getOption from './getOption';
import $axios from '@/axios';
export default {
  name: "index",
  setup() {
    const { proxy:vue } = getCurrentInstance();
    const chartDom = document.getElementsByClassName('circle-echart');
    let myChart = void 0;  // undefined默认

    onMounted(() => {

      $axios.http('circleRingEchart/test').then(res => {
        const result = res.data;
        const option = getOption(result);
        vue.$nextTick(() => {
          for (let i = 0; i < chartDom.length; i++) {
            myChart = vue.$echarts.init(chartDom[i]);
            myChart.setOption(option);
          }
        })
      })
    })

  }
}
</script>

<style scoped lang="scss">
#circle-ring-container {
  .circle-echart {
    width: 100%;
    height: 100%;
  }
}
</style>