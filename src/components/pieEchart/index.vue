<template>
  <div id="pie-container">
    <div class="pie"></div>
    <div class="iconfont icon-xiaofangshuibeng icon"></div>
    <div class="bg"></div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue'
import $axios from '@/axios';
export default {
  setup(){
    const { proxy:vue } = getCurrentInstance();
    const chartDom = document.getElementsByClassName('pie');
    let myChart = null;
    let option = {
      series: {
        type: 'pie',
        radius: ['40%', '60%'],
        label:{
          formatter: '{b}\n{d}%',
          lineHeight: 26,
          color: 'inherit',
          fontSize: 14,
        },
        labelLine: {
          length: 20,
          length2: 30,
        },
        data: []
      }
    };

    onMounted(() => {
      $axios.http('pieplus/test').then(res => {
        option.series.data = res.data;

        for(let i = 0; i < chartDom.length; i++) {
          vue.$nextTick(() => {
            myChart = vue.$echarts.init(chartDom[i]);
            myChart.setOption(option)
          })
        }
      })
    })
  }
}
</script>

<style scoped lang="scss">
#pie-container {
  position: relative;
  .pie {
    width: 100%;
    height: 100%;
  }
  .icon {
    width: 66px;
    height: 66px;
    font-size: 66px;
    color: #53FEC8;
    line-height: 80px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    z-index: -9;
  }

  .bg{
    width: 250px;
    height: 250px;
    background: url("@/assets/pie_2.png") 0 0 no-repeat;
    background-size: 100% 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>