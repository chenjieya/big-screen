<template>
  <div id="line-container">
    <div :class="classEchart" class="lineChart"></div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';
import { lineChart } from "./line";
import $axios from '@/axios';

export default {
  name: "index",
  props: {
    classEchart: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const { proxy:vue } = getCurrentInstance();
    const chartDom = document.getElementsByClassName(props.classEchart);
    let myChart = null;
    const url = {
      lineUrl: 'line/test'
    };


    onMounted(() => {
      $axios.http(url.lineUrl).then(res => {
        const servies = []; // 统计图的servie

        const legendConfig = {
          show: false,
          data: []
        }; // 统计图图例

        res.data.forEach(item => {

          const servieItem = {
            data: [],
            type: 'line',
            name: '',
            smooth: true,
            symbolSize: 6,
            areaStyle: { //区域填充样式
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new vue.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "rgba(79,221,231,.3)"
              },
                {
                  offset: 1,
                  color: "rgba(79,221,231, 0)"
                }
              ], false),
              shadowColor: 'rgba(79,221,231, 0.5)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            },
          }; // 系列的每一项

          legendConfig.data.push(item.name);
          servieItem.data = item.data;
          servieItem.name = item.name;

          servies.push(servieItem);
        })

        const option = lineChart(res.data, null, legendConfig, servies);

        for(let i = 0; i < chartDom.length; i++) {
          vue.$nextTick(() => {
            myChart = vue.$echarts.init(chartDom[i]);
            myChart.setOption(option);
          })
        }
      });

    })

  }
}
</script>

<style scoped lang="scss">
#line-container {
  .lineChart {
    width: 100%;
    height: 100%;
  }
}
</style>