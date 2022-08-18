export function handleOption(data) {
    let value = 66 / 100;
    const fontSize = 12;
    const titleSize = 16;
    const titleTop = 105;
    let titleOffset = ['6%', '43.5%', '73.5%'];  // 每个标题的偏移量
    let title = [];  // title标题动态生成
    for (let i = 0; i < data.length; i++) {
        let titleItem = {
            text: data[i].name,
            left: titleOffset[ i % titleOffset.length ],
            top: titleTop,
            textStyle: {
                color: "#fff",
                fontWeight: "normal",
                fontSize: titleSize,
            },
        };
        title.push(titleItem);
    }

    let option = {
        title: title,

        series: [
            {
                type: "liquidFill",
                radius: "55%",
                center: ["20%", "30%"],
                data: [data[0].value, data[0].value-0.05], // data个数代表波浪数（波浪线的高度）
                color: ["#DDB050", "#DAD749"],
                outline: {
                    // 轮廓设置
                    show: true,
                    borderDistance: 5, // 边框与球中间间距
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: "#ECECF8",
                        borderType: 'dashed'
                    },
                },

                amplitude: '10', //波的振幅

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#DCB050' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#CCDA48' // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    }
                },

                backgroundStyle: {
                    borderWidth: 3,
                    borderColor: "#ffffff",
                    shadowColor: "#97773D",
                    shadowBlur: 10,
                    color: "#001348",
                },
                label: {
                    show: true,
                    position: ["50%", "30%"],
                    formatter: (data[0].value * 100).toFixed(1) + "%",
                    color: "#fff",
                    fontSize: fontSize,
                },
            },

            {
                type: "liquidFill",
                radius: "55%",
                center: ["50%", "30%"],
                data: [data[1].value, data[0].value-0.05], // data个数代表波浪数
                color: ["#34F9B8", "#28D3F7"],
                outline: {
                    // 轮廓设置
                    show: true,
                    borderDistance: 5, // 边框与球中间间距
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: "#ECECF8",
                        borderType: 'dashed'
                    },
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#34F9B8' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#34F9B8' // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    }
                },

                backgroundStyle: {
                    borderWidth: 5,
                    borderColor: "#EEF2FD",
                    shadowColor: "#2AAE88",
                    shadowBlur: 10,
                    color: "#001348",
                },
                label: {
                    show: true,
                    position: ["50%", "30%"],
                    formatter: (data[1].value * 100).toFixed(1) + "%",
                    color: "#fff",
                    fontSize: fontSize,
                },
            },

            {
                type: "liquidFill",
                radius: "55%",
                center: ["80%", "30%"],
                data: [data[2].value, data[2].value-0.05], // data个数代表波浪数
                color: ["#8190E3", "#71B1FC"],
                outline: {
                    // 轮廓设置
                    show: true,
                    borderDistance: 5, // 边框与球中间间距
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: "#ECECF8",
                        borderType: 'dashed'
                    },
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#34E4FB' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#2982F7' // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    }
                },

                backgroundStyle: {
                    borderWidth: 5,
                    borderColor: "#EEF2FD",
                    shadowColor: "#29A4B7",
                    shadowBlur: 10,
                    color: "#001348",
                },
                label: {
                    show: true,
                    position: ["50%", "30%"],
                    formatter: (data[2].value * 100).toFixed(1) + "%",
                    color: "#fff",
                    fontSize: fontSize,
                },
            },
        ],
    };

    return option;
}