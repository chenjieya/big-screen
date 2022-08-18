export default function getOption(vue, y1, y2) {
    let option = {
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [
            {
                show: true,
                inverse: true,
                axisLabel: {
                    show: true,
                    color: '#ffffff',
                    fontSize: 14
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                data: y1
            },
            {
                type: 'category',
                inverse: true,
                axisTick: 'none',
                axisLine: 'none',
                show: true,
                axisLabel: {
                    color: '#ffffff',
                    fontSize: '14',
                    formatter: function(value) {
                       return value + '%';
                    },
                },
                data: y2
            }
        ],

        series: [{
            name: '百分比',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                borderRadius: 20,
                color: new vue.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: 'rgba(2,167,251, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(76,255,255, 1)',
                    },
                ]),
            },
            barWidth: 8,
            data: y2
        },
            {
                name: '背景',
                type: 'bar',
                barWidth: 8,
                barGap: '-100%',
                data: new Array(y2.length).fill(100),
                itemStyle: {
                    color: '#E4E7ED',
                    borderRadius: 20
                },
            },
        ]
    };
    return option;
}