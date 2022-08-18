const colors = ['#2380FF', '#55FFC7', '#FDFF2B', '#FE4801'];

/*数据数组*/
function getArrayValue(array, key='value') {
    var res = [];
    if (array) {
        array.forEach(function (t) {
            res.push(t[key]);
        });
    }
    return res;
}
/*
* {
*   终止1项目： {name: '终止1项目', value: 30,}
* }
* */
function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
/*servies辅助函数*/
function getData(data) {
    var res = {
        series: [],
        yAxis: [],
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: '',
            type: 'pie',
            clockwise: true, //顺时针加载
            emphasis: {
                scale: false
            },
            radius: [73 - i * 15 + '%', 80 - i * 15 + '%'],
            center: ['50%', '45%'],
            label: {
                show: false,
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                borderWidth: 5,
            },
            data: [
                {
                    value: data[i].value,
                    name: data[i].name,
                },
                {
                    value: eval(getArrayValue(data, 'value').join('+')) - data[i].value,
                    name: '',
                    itemStyle: {
                        color: 'rgba(81,80,101,0.8)',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    emphasis: {
                        scale: false
                    }
                },
            ],
        });
        res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockwise: true, //顺时针加载
            emphasis: {
                scale: false
            },
            radius: [73 - i * 15 + '%', 80 - i * 15 + '%'],
            center: ['50%', '45%'],
            label: {
                show: false,
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                borderWidth: 5,
            },
            data: [
                {
                    value: 7.5,
                    itemStyle: {
                        color: 'rgb(3, 31, 62)',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    emphasis: {
                        scale: false
                    },
                },
                {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    emphasis: {
                        scale: false
                    },
                },
            ],
        });
        res.yAxis.push(((data[i].value / eval(getArrayValue(data, 'value').join('+'))) * 100).toFixed(2) + '%');
    }
    return res;
}

export default function getOption(data) {
    const option = {
        legend: {
            show: true,
            icon: 'circle',
            top: 30,
            left: 0,
            data: getArrayValue(data, 'name'),
            width: 50,
            padding: [0, 18],
            itemGap: 10,
            formatter: function (name) {
                return '{title|' + name + '} {value|' + array2obj(data, 'name')[name].value + '}  {title|%}';
            },
            textStyle: {
                rich: {
                    title: {
                        fontSize: 20,
                        lineHeight: 30,
                        color: '#fff',
                    },
                    value: {
                        fontSize: 18,
                        lineHeight: 20,
                        color: '#fff',
                    },
                },
            },
        },
        tooltip: {
            show: true,
            backgroundColor: '#033b77',
            borderColor: '#21f2c4',
            textStyle: {
                color: '#fff',
                fontSize: 13
            },
            trigger: 'item',
            formatter: '{b}:{c}({d}%)',
        },
        color: colors, // 每一环的颜色
        xAxis: [
            {
                show: false,
            },
        ],
        series: getData(data).series,
    };

    return option;
}