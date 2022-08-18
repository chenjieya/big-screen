export default function getOption(x0,x1,y0,y1) {
    const option = {
        // 标题设置
        title: {
            text: '试验栓与喷淋末端压力走势图',
            textStyle: {
                color: '#03A7FB',
                fontWeight: 'bold',
                fontSize: 14,
            },
            left: -5
        },

        tooltip: {
            trigger: 'axis',
            backgroundColor: '#033b77',
            borderColor: '#21f2c4',
            textStyle: {
                color: '#fff',
                fontSize: 13
            },
            formatter: function (params) {
                return '压力值：<br />'+params[0].marker + params[0].seriesName+ '<span style="display: inline-block;margin-right: 5px"></span>' + params[0].value;
            }
        },
        // 网格
        grid: [
            {
                bottom: '60%'
            },
            {
                top: '60%'
            }
        ],
        // 横坐标
        xAxis: [
            {
                gridIndex: 0,
                data: [1,2,3,4,5,6],
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    interval: 0
                }
            },
            {
                gridIndex: 1,
                data: [2,3,4,5,6,7],
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        // 纵坐标
        yAxis: [
            {
                show: false,
                axisLine: {
                    show: false
                },
                axisLable: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                gridIndex: 0
            },
            {
                show: false,
                axisLine: {
                    show: false
                },
                axisLable: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                gridIndex: 1
            }
        ],

        series: [
            {
                name: '实验栓',
                type: 'line',
                showSymbol: false,
                data: y0,
                xAxisIndex: 0,

                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#4da6da' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#0e1d36',opacity: .3 // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                lineStyle: {
                    color: '#61cbe5'
                },
                itemStyle: {
                    color: '#61cbe5'
                }
            },
            {
                name: '喷淋',
                type: 'line',
                showSymbol: false,
                data: y1,
                xAxisIndex: 1,
                yAxisIndex: 1,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#cc954c' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2f201c',opacity: .3 // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }

                },
                lineStyle: {
                    color: '#dcb44f'
                },
                itemStyle: {
                    color: '#dcb44f'
                }
            }
        ]

    };
    return option;
}