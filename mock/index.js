import Mock from 'mockjs'

Mock.setup({
    timeout: 1000
})

/*设备报警排行榜*/
Mock.mock('/mock/bar/list', 'get',
    {
        data:{
            xData: ['烟感', '用传', '摄像头', '液位', '室外栓', '消防泵', '可燃气', '可视化烟感', '测试设备1', '测试设备2', '测试设备3', '测试设备4'],
            yData: [10, 20, 60, 40, 50, 10, 60, 80, 62, 35, 14, 90]
        },
        ok: true
    }
)

/*水球图*/
Mock.mock('/mock/liquid/test', 'get',
    {
        data: [
            {
                name: '巡检任务完成率',
                value: 0.56
            },
            {
                name: '故障率',
                value: 0.58
            },
            {
                name: '好评率',
                value: 0.42
            }
        ],
        ok: true
    }
)

/*设备故障数量排行*/
Mock.mock('/mock/equsort/test', 'get',
    {
        "data|1-10": [
            {
                "main|1-2": '用户信息传输装置',
                "total": '@natural(10, 100)',
                'id': '@guid'
            }
        ],
        ok: true
    }
)

/*设备状况*/
Mock.mock('/mock/pie/test', 'get',
    {
        "data": [
            {
                "name": "在线",
                "value": 288
            },

            {
                "name": "离线",
                "value": 176
            },

            {
                "name": "故障",
                "value": 150
            },

            {
                "name": "报警",
                "value": 100
            }
        ],
        ok: true
    }
)

/*环境监测*/
Mock.mock('/mock/dashpanel/test', 'get',
    {
        "data": {
            temperature: [
                {name: '平均温度', value: 42}
            ],
            humidity: [
                {name: '平均湿度', value: 66}
            ],
            total: 794,
            info: [
                {
                    name: '冷 （个）',
                    value:  0
                },
                {
                    name: '湿 （个）',
                    value:  169
                },
                {
                    name: '热 （个）',
                    value:  16
                },
                {
                    name: '干 （个）',
                    value:  3
                },
            ]
        },
        ok: true
    }
)

/*环境监测*/
Mock.mock('/mock/dashtwo/test', 'get',
    {
        "data": {
            temperature: [
                {name: '平均温度', value: 72}
            ],
            humidity: [
                {name: '平均湿度', value: 56}
            ],
            total: 754,
            info: [
                {
                    name: '冷 （个）',
                    value:  10
                },
                {
                    name: '湿 （个）',
                    value:  170
                },
                {
                    name: '热 （个）',
                    value:  59
                },
                {
                    name: '干 （个）',
                    value:  3
                },
            ]
        },
        ok: true
    }
)

/*用传统计*/
Mock.mock('/mock/lodder/test', 'get',
    {
        "data": {
            leftTopData: 695,
            leftBottomData: 70327,
            rightTopData: 5366,
            rightBottomData: 158,
            time: '8s'
        },
        ok: true
    }
)

/*用传统计*/
Mock.mock('/mock/lodderya/test', 'get',
    {
        "data": {
            leftTopData: 100,
            leftBottomData: 1023,
            rightTopData: 589,
            rightBottomData: 10,
            time: '10s'
        },
        ok: true
    }
)

/*中间底部区域*/
Mock.mock('/mock/middle/test', 'get',
    {
        "data": [
            {name: '一级报警', value: '156'},
            {name: '二级报警', value: '156'},
            {name: '三级报警', value: '156'},
            {name: '故障', value: '56'},
            {name: '监管', value: '42'},
            {name: '记录', value: '1560'},
        ],
        ok: true
    }
)

/*摄像头在线离线*/
Mock.mock('/mock/camera/test', 'get',
    {
        "data": [
            {name: '摄像头在线', value: 578},
            {name: '摄像头离线', value: 58},
        ],
        ok: true
    }
)

/*折线图*/
Mock.mock('/mock/line/test', 'get',
    {
        "data": [
            {
                name: '',
                data: [820, 932, 901, 934, 1290, 1330, 1320, 500, 1568, 1452, 756, 324],
            },
        ],
        ok: true
    }
)

/*多数据折线图*/
Mock.mock('/mock/moreLine/test', 'get',
    {
        "data": [
            {
                name: '压力异常',
                data:  [120, 132, 101, 134, 90, 230, 210, 120, 235, 325, 215, 321],
            },
            {
                name: '碰撞次数',
                data: [220, 182, 191, 234, 290, 330, 310, 234, 220, 230, 124, 168],
            },
            {
                name: '倾斜数量',
                data: [150, 232, 201, 154, 190, 330, 410, 325, 186, 325, 214, 256],
            },
        ],
        ok: true
    }
)

/*多数据折线图*/
Mock.mock('/mock/pieplus/test', 'get',
    {
        "data": [
            {name: '自动状态率', value: 1048},
            {name: '离线率', value: 735},
            {name: '在线率', value: 580},
            {name: '手动状态率', value: 484},
        ],
        ok: true
    }
)

/*排序-智慧用电*/
Mock.mock('/mock/sortby/test', 'get',
    {
        "data": [
            {name: '电流正常率', value: 1048, total: 1200},
            {name: '电流报警率', value: 735, total: 1200},
            {name: '电压正常率', value: 580, total: 1200},
            {name: '电压报警率', value: 484, total: 1200},
            {name: '设备在线率', value: 484, total: 1200}
        ],
        ok: true
    }
)

/*圆环统计图-可燃气探测器*/
Mock.mock('/mock/circleRingEchart/test', 'get',
    {
        "data": [
            {name: '在线率', value: 350},
            {name: '离线率', value: 75},
            {name: '故障率', value: 30},
            {name: '报警率', value: 25}
        ],
        ok: true
    }
)

/*面积折线图-压力传感器*/
Mock.mock('/mock/arealine/test', 'get',
    {
        "data": {
            total: 190,
            low: 15,
            data: {
                xys: [10,24,54,3,43,24,16],  // 实验拴数据
                pl: [23,45,34,34,54]  // 喷淋数据
            }
        },
        ok: true
    }
)