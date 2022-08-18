// 导入公共组件
import echartMiddle from './EchartMiddle'; // echart中间件
import barEchart from './3DBarEchart';  // 3D柱状图
import liquidEchart from './liquidFillEchart'; // 水球图
import scrollInfo from './scrollInfo'; // 信息滚动
import pieEchart from './3DPieEchart'; // 3D曲面图
import dashPanel from './dashPanelEchart'; // 仪表盘统计图
import ladderEchart from './ladderEchart'; // 用传统计
import roseEchart from './rosePieEchart'; // 玫瑰饼状图-摄像头
import lineEchart from './lineEchart';  // 折线图-液位传感器
import lineMoreEchart from './lineMoreEchart'; // 多个折线图-室外栓
import ciclePieEchart from './pieEchart'; // 饼状图-消防泵
import sortBy from './sortBy';  // 排序-智慧用电装置
import circleRingEchart from './circleRingEchart'; // 圆环统计图-可燃气探测器
import areaLineEchart from './areaLineEchart'; // 区域面积折线图-压力传感器
import weather from './weather'; // 天气组件

const install = function (Vue) {
    Vue.component('echartMiddle', echartMiddle);
    Vue.component('barEchart', barEchart);
    Vue.component('liquidEchart', liquidEchart);
    Vue.component('scrollInfo', scrollInfo);
    Vue.component('pieEchart', pieEchart);
    Vue.component('dashPanel', dashPanel);
    Vue.component('ladderEchart', ladderEchart);
    Vue.component('roseEchart', roseEchart);
    Vue.component('lineEchart', lineEchart);
    Vue.component('lineMoreEchart', lineMoreEchart);
    Vue.component('ciclePieEchart', ciclePieEchart);
    Vue.component('sortBy', sortBy);
    Vue.component('circleRingEchart', circleRingEchart);
    Vue.component('areaLineEchart', areaLineEchart);
    Vue.component('weather', weather);
}

// 将install导出，注意变量名一定要使用install，两种使用方法，具体可以自己百度
export default {
    install
}
