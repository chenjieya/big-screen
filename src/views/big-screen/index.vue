<template>
  <div id="screen-container">
    <!--  大屏-顶部header-布局  -->
    <header>
      <img :src="require('@/assets/screen-header.png')"
           class="title-img"
           alt="智能消防物联网监控大数据系统">
      <div class="weather-container">
        <weather></weather>
      </div>
      <div class="time-container">
        {{ dateRef }}
      </div>
    </header>
    <!--  大屏-主区域main-布局  -->
    <main>
      <div class="main-left">
        <div class="first-screen">
            <echartMiddle headerTitle="设备报警排行榜" :footerStatus="true">
              <barEchart style="height: 192px;width: 100%"></barEchart>
              <template v-slot:footer>
                <liquidEchart style="height: 148px; width: 100%;"></liquidEchart>
              </template>
            </echartMiddle>
        </div>
        <div class="second-screen">
          <echartMiddle headerTitle="设备故障数量排行">
            <scrollInfo style="height: 268px; width: 90%;"></scrollInfo>
          </echartMiddle>
        </div>
        <div class="third-screen">
          <echartMiddle headerTitle="视频监控">

          </echartMiddle>
        </div>
      </div>
      <div class="main-middle">
        <div class="middle-bottom"
             v-for="(item, index) in middleDataRef"
             :key="index"
             :style="{color:imgColorArrRef[index % imgColorArrRef.length].color }">
          <img :src="imgColorArrRef[index % imgColorArrRef.length].src" alt="中间底部的指示标">
          <p class="middle-bottom-value">{{ item.value }}</p>
          <p class="middle-bottom-name">{{ item.name }}</p>
        </div>
      </div>
      <div class="main-right swiper-container" v-if="flageRef">
        <div class="swiper-wrapper">
          <!--  第一层轮播图  -->
          <div class="swiper-slide">
            <div class="first-screen">
              <echartMiddle headerTitle="设备状况">
                <pieEchart style="height: 225px;width: 80%;"></pieEchart>
              </echartMiddle>
            </div>
            <div class="second-screen">
              <echartMiddle headerTitle="环境监测">
                <dashPanel classEchart="test1" style="height: 200px;width: 80%;" :url="{dashPanelUrl: 'dashpanel/test'}"></dashPanel>
              </echartMiddle>
            </div>
            <div class="third-screen">
              <echartMiddle headerTitle="用传统计">
                <ladderEchart style="height: 324px;width: 100%;" :textObj="textObjRef" :url="{lodderUrl: 'lodder/test'}"></ladderEchart>
              </echartMiddle>
            </div>
          </div>
          <!--  第二层轮播图  -->
          <div class="swiper-slide">
            <div class="first-screen">
              <echartMiddle headerTitle="用传统计">
                <ladderEchart style="height: 324px;width: 100%;" :textObj="textObjRef" :url="{lodderUrl: 'lodderya/test'}"></ladderEchart>
              </echartMiddle>
            </div>
            <div class="second-screen">
              <echartMiddle headerTitle="环境监测">
                <dashPanel classEchart="test" style="height: 200px;width: 80%;" :url="{dashPanelUrl: 'dashtwo/test'}"></dashPanel>
              </echartMiddle>
            </div>
            <div class="third-screen">
              <echartMiddle headerTitle="摄像头">
                <roseEchart style="height: 324px;width: 100%;"></roseEchart>
              </echartMiddle>
            </div>
          </div>
          <!--  第三层轮播图  -->
          <div class="swiper-slide">
            <div class="first-screen">
              <echartMiddle headerTitle="液位传感器">
                <lineEchart classEchart="lineTop" style="height: 324px;width: 100%;"></lineEchart>
              </echartMiddle>
            </div>
            <div class="second-screen">
              <echartMiddle headerTitle="压力传感器" :footerStatus="true">
                <areaLineEchart style="height: 260px;width: 90%;"></areaLineEchart>
              </echartMiddle>
            </div>
            <div class="third-screen">
              <echartMiddle headerTitle="室外栓">
                <lineMoreEchart classEchart="lineBottom" style="height: 324px;width: 100%;"></lineMoreEchart>
              </echartMiddle>
            </div>
          </div>

          <!--  第四层轮播图  -->
          <div class="swiper-slide">
            <div class="first-screen">
              <echartMiddle headerTitle="消防泵">
                <ciclePieEchart style="height: 324px;width: 100%;"></ciclePieEchart>
              </echartMiddle>
            </div>
            <div class="second-screen">
              <echartMiddle headerTitle="智慧用电装置">
                <sortBy style="height: 260px;width: 80%;"></sortBy>
              </echartMiddle>
            </div>
            <div class="third-screen">
              <echartMiddle headerTitle="可燃气探测器">
                <circleRingEchart style="height: 324px;width: 100%;"></circleRingEchart>
              </echartMiddle>
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import $axios from '@/axios';
import 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.css';
import swiper from './swiper';
import { dateFormat } from "@/common/utils/date";

export default {
  name: "BigScreen",
  setup() {
    let flageRef = ref(true);
    let middleDataRef = ref([]);
    let dateRef = ref('2022年8月17日 星期三');

    dateRef.value = dateFormat(+new Date(), 'YYYY年MM月DD日 星期dd');


    const url = {
      middleDataUrl: 'middle/test'
    };
    // 传递给用传统计图的信息
    const textObjRef = ref({
        leftTop: '处理结果-误报',
        leftBottom: '报警量',
        rightTop: '处理结果-真实',
        rightBottom: '重复报警量',
        middle: '处理时间间隔'
    });

    // 中间底部的图片和文字颜色
    const imgColorArrRef =ref(
        [
          {src: require('@/assets/middle_pic1.png'), color: '#EB5729'},
          {src: require('@/assets/middle_pic2.png'), color: '#F85AA2'},
          {src: require('@/assets/middle_pic3.png'), color: '#159CFE'},
          {src: require('@/assets/middle_pic4.png'), color: '#DAC947'},
          {src: require('@/assets/middle_pic5.png'), color: '#66FEFF'},
          {src: require('@/assets/middle_pic6.png'), color: '#8B4BFA'}
        ]
    );
    $axios.http(url.middleDataUrl).then(res => middleDataRef.value = res.data);

    onMounted(() => {
      // 轮播图配置
      swiper('.swiper-container');
    })

    return {
      flageRef,
      textObjRef,
      imgColorArrRef,
      middleDataRef,
      dateRef
    }
  }
}
</script>

<style scoped lang="scss">
@import './scss/screen';
</style>