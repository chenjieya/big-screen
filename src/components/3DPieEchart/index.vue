<template>
  <div class="chart-container" style="padding-top: 25px">
    <div id="chart" ref="chart" class="chart"></div>
    <!-- 底座背景 -->
    <div class="bg"></div>

    <div style="height: 60px;display: flex;flex-wrap: wrap;padding-left: 30px;margin-top: 20px">
      <div style="width: 50%; padding-left: 30px;" v-for="(item, index) in json" :key="index">
        <span style="color: #fff; display: inline-block; width: 10px;height:10px;margin-right: 10px" :style="{backgroundColor: item.itemStyle.color}"></span>
        <span style="color: #fff; margin-right: 5px">{{ item.name }}</span>
        <span style="color: #fff; font-family: Electronica-Oblique;font-style: oblique;">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getPie3D } from "@/common/utils/chart"; //工具类js
import $axios from '@/axios';

const color = ["#00A0B3", "#FF8818", "#FFC238", "#61B8FF"];

export default {
  name: "chart",
  data() {
    return {
      statusChart: null,
      option: {},  // echarts配置对象
      json: [],
    };
  },
  async mounted() {
    const res = await $axios.http('pie/test');
    this.json = res.data;
    this.setLabel();
    this.initChart();
  },
  methods: {
    // 初始化label样式
    setLabel() {
      this.json.forEach((item, index) => {
        item.itemStyle = {
          color: color[index],
        };
        item.label = {
            show: true,
            color: color[index],
            formatter: ["{b|{b}}", "{c|{c}}{b|台}", "{d|{d}%}"].join("\n"), // 用来换行
            rich: {
              b: {
                color: color[index],
                lineHeight: 25,
                align: "left",
              },
              c: {
                fontSize: 22,
                color: "#fff",
                textShadowColor: "#1c90a6",
                textShadowOffsetX: 0,
                textShadowOffsetY: 2,
                textShadowBlur: 5,
              },
              d: {
                color: color[index],
                align: "left",
              },
            },
        };
        item.labelLine = {
            lineStyle: {
              width: 1,
              color: color[index],
            },
        };
      });
    },
    // 图表初始化
    initChart() {
      // this.statusChart = this.$echarts.init(this.$refs.chart);

      let chartDom = document.getElementsByClassName('chart');

      for (let i = 0; i < chartDom.length; i++) {
        this.$nextTick(() => {
          this.statusChart = this.$echarts.init(chartDom[i]);
          this.statusChart.setOption(this.option);
          this.statusChart.setOption(this.option);
        })
      }

      // 传入数据生成 option, 构建3d饼状图, 参数工具文件已经备注的很详细
      this.option = getPie3D(this.json, 0.7, 250, 28, 36, 0.7);

      // 是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
      this.option.series.push({
        name: "设备状态", //自己根据场景修改
        type: "pie",
        label: {
          opacity: 1,
          fontSize: 13,
          lineHeight: 20,
        },
        startAngle: -40, // 起始角度，支持范围[0, 360]。
        clockwise: false, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ["20%", "40%"],
        center: ["50%", "50%"],
        data: this.json,
        itemStyle: {
          opacity: 0, //这里必须是0，不然2d的图会覆盖在表面
        },
      });

    },
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  z-index: 10000;
  /* width: 100vw;
  height: 100vh; */
}
#chart,
.bg {
  width: 100%;
  height: 100%;
}

.bg {
  position: absolute;
  bottom: 43px;
  left: 50%;
  z-index: -1;
  width: 180px;
  height: 73px;
  background: no-repeat center;
  background-image: url("~@/assets/pie.png");
  background-size: 90% 90%;
  transform: translateX(-50%);
}
</style>