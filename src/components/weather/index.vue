<template>
  <div id="weather-container">
    <div id="he-plugin-simple"></div>
  </div>
</template>

<script>
export default {
  name: "weather",
  setup() {
    // 天气组件配置
    window.WIDGET = {
      CONFIG: {
        modules: "204",
        background: "5",
        tmpColor: "02A8FB",
        tmpSize: "18",
        cityColor: "02A8FB",
        citySize: "18",
        aqiColor: "02A8FB",
        aqiSize: "18",
        weatherIconSize: "24",
        alertIconSize: "18",
        padding: "6px",
        shadow: "0",
        language: "zh",
        fixed: "false",
        vertical: "top",
        horizontal: "left",
        key: "ab039794db614606a1000f6c34d0384d"
      }
    };

    // 动态创建script标签，插入项目中
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}
</script>

<style scoped lang="scss">
@import '~@/views/big-screen/scss/var_screen.scss';
#weather-container {
  width: 150px;
  height: $aside_height;
}
</style>