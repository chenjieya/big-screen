<template>
  <div id="liquid-container">
    <div id="echart" ref="myEchart"></div>
    <img class="liquid1 liquid" :src="require('@/assets/liquid1.png')">
    <img class="liquid2 liquid" :src="require('@/assets/liquid2.png')">
    <img class="liquid3 liquid" :src="require('@/assets/liquid3.png')">
  </div>
</template>

<script>
import "echarts-liquidfill/src/liquidFill.js"; // 水球图插件
import { onMounted, getCurrentInstance, ref } from 'vue';
import $axios from '@/axios';
import { handleOption } from './liquid';
export default {
  setup() {
    const { proxy:vue } = getCurrentInstance();
    const myEchart = ref(null);
    let myChart = null;
    const url = {
      liquidUrl: 'liquid/test'
    };

    onMounted(async () => {
      const res = await $axios.http(url.liquidUrl);
      // console.log(res, 'res');
      const result = res.data;
      initEchart(result);
    })

    // 初始化统计图
    function initEchart(result) {
      let option;
      myChart = vue.$echarts.init(myEchart.value);
      option = handleOption(result);
      myChart.setOption(option);
    }

    return {
      myEchart,
    }
  }
};
</script>

<style scoped lang="scss">
#liquid-container {
  position: relative;

  #echart {
    width: 100%;
    height: 100%;
  }

  .liquid {
    position: absolute;
    top: 55px;
  }

  .liquid1 {
    left: 25px;
  }

  .liquid2 {
    left: 157px;
  }

  .liquid3 {
    left: 287px;
  }
}
</style>