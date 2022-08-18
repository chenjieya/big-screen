<template>
  <div id="fivth-container">
    <div class="echart" :class="classEchart" ref="fivthEchart"></div>
    <div class="info-container">
      <div :class="['item', `item${index+1}`]" v-for="(it, index) in info">
        <span>{{ it.name }}</span>
        <span>{{ it.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import $axios from '@/axios';
export default {
  data() {
    return {
      myChart: null,
      dataArr1: [],
      dataArr2: [],
      total: 0,
      info: [],
    };
  },

  props: {
    url: {
      type: Object,
      require: true
    },
    classEchart: {
      type: String,
      require: true
    }
  },

  async mounted() {
    const res = await $axios.http(this.url.dashPanelUrl);
    this.dataArr1 = res.data.temperature;
    this.dataArr2 = res.data.humidity;
    this.info = res.data.info;
    this.total = res.data.total;
    this.initEchart();
  },

  methods: {
    initEchart() {
      let chartDom = document.getElementsByClassName(this.classEchart);
      for (let i = 0; i < chartDom.length; i++) {
        this.$nextTick(() => {
          this.myChart = this.$echarts.init(chartDom[i]);
          this.myChart.setOption(option);
        })
      }
      // this.myChart = this.$echarts.init(this.$refs.fivthEchart);
      // const dataArr1 = [{name: '平均温度', value: 42}];  // 仪表盘的数值
      // const dataArr2 = [{name: '平均湿度', value: 52}];  // 仪表盘的数值
      const center_1 = ["30%", "40%"];   // 仪表盘的位置
      const radius_1 = "61%";  // 仪表盘的直径
      const center_2 = ["70%", "40%"];   // 仪表盘的位置
      const radius_2 = "61%";  // 仪表盘的直径
      const color_offset_0 = "#74C567"; // 轴线的渐变色
      const color_offset_1 = "#1996FA"; // 轴线的渐变色
      const color_offset_2 = "#E15834"; // 轴线的渐变色
      const line_width = "10";  // 轴线的宽度
      const anchor_color = "#0e1327"; // 仪表盘中心点的颜色
      const anchor_size = 6;  // 仪表盘中心原点的大小
      const pointer_length = "70%"; // 仪表盘指针的长度
      const pointer_width = 8; // 仪表盘指针的宽度
      const pointer_offsetCenter = [0, "5%"];  // 仪表盘指针距离中心点的偏移位置，第一项水平，第二项竖直
      const pointer_color_offset_0 = "#BED8FF";  // 仪表盘指针渐变色
      const pointer_color_offset_1 = "#B4CCF3"; // 仪表盘指针渐变色
      const detail_color = "#BED8FF"; // 仪表盘中间展示数据的颜色
      const option = {
        title: {
          show: true,
          text: `${this.total} \n 设备总数（个）`,
          left: "center",
          bottom: 0,
          textStyle: {
            color: "#DAC947",
            fontFamily: "Microsoft YaHei",
            fontSize: 18,
            fontWeight: 'bold'
          },
          top: '50%',
        },
        series: [
          {
            data: this.dataArr1,
            name: "最外层",
            type: "gauge",
            roundCap: true,
            radius: radius_1,
            center: center_1,
            splitNumber: 0, //刻度数量
            startAngle: 180, // 开始的角度
            endAngle: 0,  // 结束的角度
            z: 4,
            zlevel: 0,
            axisLine: {  // 轴线的设置
              show: true,
              roundCap: true,  // 轴线的两端是否显示成圆形
              lineStyle: {
                // 轴线样式
                width: line_width, // 宽度
                color: [
                  [
                    1,
                    new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: color_offset_0,
                      },
                      {
                        offset: 0.5,
                        color: color_offset_1,
                      },
                      {
                        offset: 1,
                        color: color_offset_2,
                      },
                    ]),
                  ],
                ],
              },
            },
            //分隔线样式
            splitLine: {
              show: true,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: true,
            },
            // 仪表盘指针原点的固定
            anchor: {
              show: true,
              size: anchor_size,
              showAbove: true,
              itemStyle: {
                color: anchor_color,
              },
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              show: true,
              length: pointer_length,
              width: pointer_width,
              offsetCenter: pointer_offsetCenter,
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: pointer_color_offset_0,
                  },
                  {
                    offset: 1,
                    color: pointer_color_offset_1,
                  },
                ]),
              },
            },
            // 仪表盘的详情，中间展示的数据
            detail: {
              show: false,
              color: detail_color,
              fontStyle: "normal",
              fontWeight: "bold",
              fontFamily: "D-DIN",
              fontSize: 14,
              offsetCenter: [0, "30%"],
            },
            title: {
              show: true,
              color: detail_color,
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: "bold",
              fontFamily: "D-DIN",
              offsetCenter: [0, "30%"],
            }
          },
          // 刻度盘
          {
            name: "第二层刻度",
            type: "gauge",
            center: center_1,
            radius: "75%",
            startAngle: 180,
            endAngle: 0,
            splitNumber: 4,
            axisLine: {
              show: false,
            }, //仪表盘轴线
            axisLabel: {
              show: true,
              color: "#FFFFFF",
              distance: 20,
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 5,
              lineStyle: {
                color: "#f40", //用颜色渐变函数不起作用
                width: 1,
              },
              distance: 20,
              length: 5,
            },
            splitLine: {
              show: false,
            },
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
            title: {
              show: false
            }
          },
          {
            name: "内部细刻度",
            type: "gauge",
            center: center_1,
            radius: "55%",
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [
                  [
                    1,
                    new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: "#224570",
                      },
                      {
                        offset: 1,
                        color: "#224570",
                      },
                    ]),
                  ],
                ],
              },
            }, //仪表盘轴线
            axisTick: {
              show: false,
            },
            //刻度线文字
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
            title: {
              show: false
            }
          },

          {
            data: this.dataArr2,
            name: "最外层",
            type: "gauge",
            roundCap: true,
            radius: radius_2,
            center: center_2,
            splitNumber: 0, //刻度数量
            startAngle: 180, // 开始的角度
            endAngle: 0,  // 结束的角度
            z: 4,
            zlevel: 0,
            axisLine: {  // 轴线的设置
              show: true,
              roundCap: true,  // 轴线的两端是否显示成圆形
              lineStyle: {
                // 轴线样式
                width: line_width, // 宽度
                color: [
                  [
                    1,
                    new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: color_offset_2,
                      },
                      {
                        offset: 0.5,
                        color: color_offset_1,
                      },
                      {
                        offset: 1,
                        color: color_offset_0,
                      },
                    ]),
                  ],
                ],
              },
            },
            //分隔线样式
            splitLine: {
              show: true,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: 'auto',
              }
            },
            // 仪表盘指针原点的固定
            anchor: {
              show: true,
              size: anchor_size,
              showAbove: true,
              itemStyle: {
                color: anchor_color,
              },
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              show: true,
              length: pointer_length,
              width: pointer_width,
              offsetCenter: pointer_offsetCenter,
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: pointer_color_offset_0,
                  },
                  {
                    offset: 1,
                    color: pointer_color_offset_1,
                  },
                ]),
              },
            },
            // 仪表盘的详情，中间展示的数据
            detail: {
              show: false,
              color: detail_color,
              fontStyle: "normal",
              fontWeight: "bold",
              fontFamily: "D-DIN",
              fontSize: 20,
              offsetCenter: [0, "50%"],
            },
            title: {
              show: true,
              color: detail_color,
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: "bold",
              fontFamily: "D-DIN",
              offsetCenter: [0, "30%"],
            }
          },

          // 刻度盘
          {
            name: "第二层刻度",
            type: "gauge",
            center: center_2,
            radius: "75%",
            startAngle: 180,
            endAngle: 0,
            splitNumber: 4,
            axisLine: {
              show: false,
            }, //仪表盘轴线
            axisLabel: {
              show: true,
              color: "#FFFFFF",
              distance: 20,
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 5,
              lineStyle: {
                color: "#f40", //用颜色渐变函数不起作用
                width: 1,
              },
              distance: 20,
              length: 5,
            },
            splitLine: {
              show: false,
            },
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
            title: {
              show: false
            }
          },
          {
            name: "内部细刻度",
            type: "gauge",
            center: center_2,
            radius: "55%",
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [
                  [
                    1,
                    new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: "#224570",
                      },
                      {
                        offset: 1,
                        color: "#224570",
                      },
                    ]),
                  ],
                ],
              },
            }, //仪表盘轴线
            axisTick: {
              show: false,
            },
            //刻度线文字
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
            title: {
              show: false
            }
          },

        ],
      };

      // this.myChart.setOption(option);

    },
  },
};
</script>

<style scoped lang="scss">
#fivth-container {
  position: relative;
  display: flex;
  justify-content: center;

  .echart{
    height: 100%;
    width: 100%;
  }

  .info-container {
    position: absolute;
    bottom: -50px;
    height: 100px;
    width: 65%;


    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 101px;
      height: 31px;
      line-height: 31px;
      background: #082248;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
    }
    /*类名不要更改，和绑定的class对应的索引相照应*/
    .item1, .item2 {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #73C668;
    }
    /*类名不要更改，和绑定的class对应的索引相照应*/
    .item3, .item4 {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #EB5729;
    }
  }

}
</style>