// import { getCurrentInstance } from 'vue';
export function drawRect(vue) {

    // const { proxy:vue } = getCurrentInstance();

    // 绘制左侧面
    const CubeLeft = vue.$echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0,
        },
        buildPath: function (ctx, shape) {
            // 会canvas的应该都能看得懂，shape是从custom传入的
            const xAxisPoint = shape.xAxisPoint;
            const c0 = [shape.x, shape.y];
            const c1 = [shape.x - 10, shape.y - 4];
            const c2 = [xAxisPoint[0] - 10, xAxisPoint[1] - 0];
            const c3 = [xAxisPoint[0], xAxisPoint[1] + 5];
            ctx
                .moveTo(c0[0], c0[1])
                .lineTo(c1[0], c1[1])
                .lineTo(c2[0], c2[1])
                .lineTo(c3[0], c3[1])
                .closePath();
        },
    });
    // 绘制右侧面
    const CubeRight = vue.$echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0,
        },
        buildPath: function (ctx, shape) {
            const xAxisPoint = shape.xAxisPoint;
            const c1 = [shape.x, shape.y];
            const c2 = [xAxisPoint[0], xAxisPoint[1] + 0];
            const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 4];
            const c4 = [shape.x + 10, shape.y - 4];
            ctx
                .moveTo(c1[0], c1[1])
                .lineTo(c2[0], c2[1])
                .lineTo(c3[0], c3[1])
                .lineTo(c4[0], c4[1])
                .closePath();
        },
    });
    // 绘制顶面
    const CubeTop = vue.$echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0,
        },
        buildPath: function (ctx, shape) {
            const c1 = [shape.x, shape.y];
            const c2 = [shape.x + 10, shape.y - 4];
            const c3 = [shape.x, shape.y - 8];
            const c4 = [shape.x - 10, shape.y - 4];
            ctx
                .moveTo(c1[0], c1[1])
                .lineTo(c2[0], c2[1])
                .lineTo(c3[0], c3[1])
                .lineTo(c4[0], c4[1])
                .closePath();
        },
    });

    // 注册三个面图形;
    vue.$echarts.graphic.registerShape("CubeLeft", CubeLeft);
    vue.$echarts.graphic.registerShape("CubeRight", CubeRight);
    vue.$echarts.graphic.registerShape("CubeTop", CubeTop);
}

export function echartMethodInit(xList = [], yList = [], MAX = [], vue) {
    const fontSize = 12;
    const dom = 400;
    const barWidth = dom / 20;
    // const MAX = [100, 100, 100, 100, 100, 100];
    // const yList = [32, 58, 64, 64, 12, 45];
    // const xList = ['用传', 55, 44, 55, 12, 35];

    // 绘制并注册3D柱状图
    drawRect(vue);

    // 横坐标的数据，以及文字颜色
    let xData = xList.length > 0 ? xList.map((item, index) => {
        return {
            value: item,
            textStyle: {
                color: "#CEF4FF",
            },
        };
    }) : [];

    // 柱状图数据填充的颜色
    const colors = [
        {
            type: "linear",
            x: 0,
            x2: 0,
            y: 1,
            y2: 0,
            // 线性渐变
            colorStops: [
                {
                    offset: 0,
                    color: "#fcd838",
                },
                {
                    offset: 1,
                    color: "#fb6423",
                },
            ],
        },
        {
            type: "linear",
            x: 0,
            x2: 0,
            y: 1,
            y2: 0,
            colorStops: [
                {
                    offset: 0,
                    color: '#1fe983',
                },
                {
                    offset: 1,
                    color: "#02228f",
                },
            ],
        },
        {
            type: "linear",
            x: 0,
            x2: 0,
            y: 1,
            y2: 0,
            colorStops: [
                {
                  offset: 0,
                  color: "#002397",
                },
                {
                    offset: 1,
                    color: "#00d1e9",
                },
            ],
        },
        {
            type: "linear",
            x: 0,
            x2: 0,
            y: 1,
            y2: 0,
            colorStops: [
                {
                  offset: 0,
                  color: '#5f0bd7',
                },
                {
                    offset: 1,
                    color: "#8746f7",
                },
            ],
        },
    ];

    // 统计图配置
    const option = {
        //提示框
        tooltip: {
            trigger: "axis",
            formatter: "{c1}",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        /**区域位置*/
        grid: {
            left: "15%",
            right: "15%",
            top: 30
        },

        xAxis: {
            axisTick: {
                show: false,  // 坐标轴的刻度
            },
            data: xData,

            show: true,
            type: "category",
            axisLine: {
                show: false,  // 坐标轴轴线
            },
            splitLine: {
                show: false,
            },
            // x轴坐标展示样式的操作
            axisLabel: {
                show: true,
                fontSize: fontSize,
                color: "#ffffff",
                rotate: -45,
                interval: 0,
                margin: 12
            },
        },

        yAxis: {
            name: '单位：个',
            nameTextStyle: {
                color: '#ffffff',
                fontSize: fontSize
            },
            show: true,
            splitNumber: 4,  // y轴被分割的段数
            axisLine: {
                show: true,  // 坐标轴的线
                lineStyle: {
                    color: "rgba(255,255,255,0.2)",
                },
            },
            splitLine: {
                show: true,  // 坐标轴的分割线
                lineStyle: {
                    color: "rgba(255,255,255,0.2)",
                    type: 'dashed'
                },
            },
            axisLabel: {  // 坐标轴展示内容的样式
                show: true,
                color: "#ffffff",
                fontSize: fontSize,
            },
        },
        series: [
            // 3D柱状图，柱状图的虚拟背景色
            {
                type: "custom",
                renderItem: function (params, api) {
                    const location = api.coord([api.value(0), api.value(1)]);
                    return {
                        type: "group",
                        children: [
                            {
                                type: "CubeLeft",
                                shape: {
                                    api,
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0]),
                                },
                                style: {
                                    fill: "rgba(221,221,221,0.2)",
                                },
                            },
                            {
                                type: "CubeRight",
                                shape: {
                                    api,
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0]),
                                },
                                style: {
                                    fill: "rgba(221,221,221,0.3)",
                                },
                            },
                            {
                                type: "CubeTop",
                                shape: {
                                    api,
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0]),
                                },
                                style: {
                                    fill: "rgba(221,221,221,0.4)",
                                },
                            },
                        ],
                    };
                },
                data: MAX,
            },
            {
                type: "bar",
                barWidth: barWidth,
                itemStyle: {
                    color: function (params) {
                        if(params.value > 80) {
                            return colors[1];
                        } else{
                            return colors[0];
                        }
                    },
                },
                data: yList,
            },
            {
                z: 2,
                type: "pictorialBar",
                data: yList,
                symbol: "diamond",
                symbolOffset: [0, "50%"],
                symbolSize: [barWidth, barWidth * 0.6],
                itemStyle: {
                    color: function (params) {
                        if(params.value > 80) {
                            return colors[1];
                        } else{
                            return colors[0];
                        }
                    },
                },
            },
            {
                z: 3,
                type: "pictorialBar",
                symbolPosition: "end",
                data: yList,
                symbol: "diamond",
                symbolOffset: [0, "-50%"],
                symbolSize: [barWidth, barWidth * 0.6],
                itemStyle: {
                    borderWidth: 0,
                    color: function (params) {
                        if(params.value > 80) {
                            return colors[1];
                        } else{
                            return colors[0];
                        }
                    },
                },
            },
        ],
    };


    vue.myChart = vue.$echarts.init(vue.$refs.echart);
    vue.myChart.setOption(option);
}