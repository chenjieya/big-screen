export function lineChart(data, xData, legendConfig, servies, yName='月平均液位走势') {
    xData = xData || ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

    const option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            show: legendConfig.show,
            icon: 'rect',
            itemWidth: 13,
            itemHeight: 14,
            textStyle: {
                color: '#FFFFFF',
                fontSize: 14,
            },
            data: legendConfig.data,
        },
        xAxis: {
            type: 'category',
            data: xData,
            axisTick: {
                show: false,  // 坐标轴的刻度
            },
            axisLabel: {
                interval: 0,
                color: '#C6CFFF'
            },
            axisLine: {
                lineStyle: {
                    color: '#26367A'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: yName,
            nameTextStyle: {
                color: '#C6CFFF'
            },
            splitLine: {
                lineStyle: {
                    color: '#26367A',
                    opacity: 0.55,
                    type: 'dashed',
                }
            },
            axisLabel: {
                color: '#C6CFFF'
            },
        },
        series: servies
    };

    return option;
}