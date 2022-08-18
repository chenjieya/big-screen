<template>
  <div id="sortby-container">
    <div class="sortby"></div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';
import getOption from "@/components/sortBy/sortBy";
import $axios from '@/axios';
export default {
  setup() {
    const chartDom = document.getElementsByClassName('sortby');
    const { proxy:vue } = getCurrentInstance();
    let myChart = null;

    onMounted(() => {

      $axios.http('sortby/test').then(res => {
        let result = res.data;
        let y1 = [];  // 左侧名字
        let y2 = [];  // 右侧数据展示百分比
        let total = [];  // 总数
        // 整理数据
        result.forEach(item => {
          let percent = (item.value / item.total * 100).toFixed(2);
          y2.push(+percent);
          y1.push(item.name);
        })
        const option = getOption(vue, y1, y2);

        // 初始化echart并渲染
        vue.$nextTick(() => {
          for (let i = 0; i < chartDom.length; i++) {
            myChart = vue.$echarts.init(chartDom[i]);
            myChart.setOption(option);
          }
        })

      });

    })

  }
}
</script>

<style scoped lang="scss">
#sortby-container {
  .sortby {
    width: 100%;
    height: 100%;
  }
}
</style>