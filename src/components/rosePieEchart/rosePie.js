export default function roseOption(data) {
    // const colors = ['#02A6FA', '#FAC126'];
    const option = {
        toolbox: {
            show: false,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {d}%',
            backgroundColor: 'rgba(47,37,198,0.75)',
            borderColor :'#2880FF',
            borderWidth: 1,
            textStyle:{
                color  :'#fff'
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 65],
                center: ['50%', '40%'],
                width: 'auto',
                height: 190,
                top: 33,
                startAngle: 90,
                data: [
                    {
                        value: data[0].value,
                        name: data[0].name,
                        itemStyle: {
                            color: '#02A6FA'
                        },
                        label: {
                            color: 'inherit',
                            formatter: '{b} \n {a|{c}台}',
                            fontSize: 16,
                            rich: {
                                a: {
                                    color: '#fff',
                                    fontSize: 20,
                                    lineHeight: 30
                                }
                            }
                        }
                    },
                    {
                        value: data[1].value,
                        name: data[1].name,
                        itemStyle: {
                            color: 'transparent'
                        },
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        }
                    },
                ]
            },
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50,75],
                center: ['50%', '40%'],
                width: 'auto',
                height: 190,
                top: 33,
                startAngle: 90,
                data: [
                    { value: data[0].value,
                        name: data[0].name,
                        itemStyle: {
                            color: 'transparent'
                        },
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    { value: data[1].value,
                        name: data[1].name,
                        itemStyle: {
                            color: '#FAC126'
                        },
                        label: {
                            fontSize: 16,
                            color: 'inherit',
                            formatter: '{b} \n {a|{c}台}',
                            rich: {
                                a: {
                                    color: '#fff',
                                    fontSize: 20,
                                }
                            }
                        },
                        labelLine: {
                            smooth: false,
                            length2: 40
                        }
                    },
                ]
            },
            {
                name: 'decorationTwo',
                type: 'pie',
                color: ['#52D6FF', 'rgba(255,255,255,0)'],
                center: ['50%', '40%'],
                radius: ['47%', '45%'],
                emphasis: {
                    scale: false
                },
                top: -37,
                lable: {
                    show: false,
                    emphasis: {
                        show: false,
                    },
                },
                labelLine: {
                    show: false,
                },
                tooltip: {
                    show: false
                },
                data: new Array(120).fill(10).map(() => {
                    return {
                        name: '',
                        value: 20,
                    };
                }),
            },
        ]
    };

    return option;
}