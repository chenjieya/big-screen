<template>
  <div id="area-line-container">
    <div class="header">
        <div class="header-left">
          <span style="color: #02A7FB;font-size: 14px;font-weight: 700">总台数：</span>
          <span style="font-size: 18px;color: #18EBC6;font-weight: 700">{{ totalRef }}台</span>
        </div>
        <div class="header-right">
          <span style="color: #02A7FB;font-size: 14px;font-weight: 700">压力低：</span>
          <span style="font-size: 18px;color: #18EBC6;font-weight: 700;margin-right: 12px">{{ lowRef }}台</span><span style="font-size: 12px;color: #18EBC6;font-weight: 700">占比{{ percent }}</span>
        </div>
    </div>
    <div class="arealine"></div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, ref, computed } from 'vue';
import $axios from '@/axios';
import getOption from './getOption';
export default {
  name: "index",
  setup() {
    const { proxy:vue } = getCurrentInstance();
    const chartDom = document.getElementsByClassName('arealine');
    let myChart = void 0;  // undefined 默认值
    let totalRef = ref(0);  // 总台数
    let lowRef = ref(0);  // 低压数

    onMounted(() => {

      $axios.http('arealine/test').then(res => {
        totalRef.value = res.data.total;
        lowRef.value = res.data.low;

        const option = getOption(null, null, res.data.data.xys, res.data.data.pl);

        for (let i = 0; i < chartDom.length; i++) {
          vue.$nextTick(() => {
            myChart = vue.$echarts.init(chartDom[i]);
            myChart.setOption(option);
          })
        }
      })
    })

    const percent = computed(() => {
      return (lowRef.value / totalRef.value * 100).toFixed(2) + '%';
    })

    return {
      totalRef,
      lowRef,
      percent
    }
  }
}
</script>

<style scoped lang="scss">
#area-line-container {
  padding-top: 19px;
  .header {
    height: 18px;
    display: flex;
    margin-bottom: 19px;
    justify-content: space-between;
  }
  .arealine {
    width: 100%;
    height: 100%;
  }
}
</style>