<template>
  <div id="rose-container">
    <div class="chartRose"></div>
    <div class="canmer-borders">
      <div class="iconfont icon-jiankongshexiangtou icon"></div>
    </div>
    <div class="content">
      <template v-for="(item, index) in handleData">
        <span :key="index" style="font-style: italic;font-size: 18px" :style="{color: index === 0 ? '#0DA7F1':'#FAC126' }">{{ item.name }}率： </span>
        <span style="font-style: italic;font-size: 18px" :style="{color: index === 0 ? '#0DA7F1':'#FAC126' }">{{ item.percent }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
      </template>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, computed, ref } from 'vue';
import $axios from '@/axios';
import roseOption from './rosePie';
export default {
  name: "index",
  setup() {
    const chartDom = document.getElementsByClassName('chartRose');
    let myChart = null;
    const { proxy:vue } = getCurrentInstance();
    let resultRef = ref([]);

    // 获取到统计图得数据信息
    $axios.http('camera/test').then(res => {
      resultRef.value = res.data;
      const option = roseOption(resultRef.value);
      for (let i = 0; i < chartDom.length; i++) {
        vue.$nextTick(() => {
          myChart = vue.$echarts.init(chartDom[i]);
          myChart.setOption(option);
        })
      }
    })

    const handleData = computed(() => {
      // 计算出数据得总量，可以不写在计算属性里，最好声明全局变量
      let res = resultRef.value.reduce((prev, item) => {
        prev += item.value;
        return prev;
      }, 0);
      // 计算每一个数据占据得百分比
      resultRef.value.forEach(item => {
        item.percent = ((item.value / res).toFixed(2) * 100) + '%';
      })
      return resultRef.value;
    });


    return {
      resultRef,
      handleData
    }
  }
}
</script>

<style scoped lang="scss">
#rose-container {
  position: relative;
  .chartRose {
    width: 100%;
    height: 100%;
  }
  .content {
    position: absolute;
    width: 100%;
    bottom: 80px;
    text-align: center;
  }


    .canmer-borders {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -115%);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #00ffff;

      box-shadow: inset 0 0 20px 0 rgba(1,220,239,.8);

      .icon {
        width: 36px;
        height: 42px;
        font-size: 36px;
        color: #53FEC8;
        line-height: 80px;
        margin: 0 auto;
      }
  }

}
</style>