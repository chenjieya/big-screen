<template>
  <div id="ladder-container">
    <div class="img-container">
      <img :src="require('@/assets/pic_2.png')" alt="梯形图">
      <img :src="require('@/assets/pic_2.png')" alt="梯形图">
      <div class="text-container">
        <p class="text-number">{{ showDataRef.leftTopData }}</p>
        <span style="display: block;width: 20px;height: 1px;background-color:#ddc917;"></span>
        <p class="text-content">{{ textObj.leftTop }}</p>
      </div>

      <div class="text-container text-container-right">
        <p class="text-number">{{ showDataRef.rightTopData }}</p>
        <span style="display: block;width: 20px;height: 1px;background-color:#ddc917;"></span>
        <p class="text-content">{{ textObj.rightTop }}</p>
      </div>
    </div>
    <div class="img-container">
      <img :src="require('@/assets/pic_3.png')" alt="梯形图">
      <img :src="require('@/assets/pic_3.png')" alt="梯形图">
      <div class="text-container">
        <p class="text-number">{{ showDataRef.leftBottomData }}</p>
        <span style="display: block;width: 20px;height: 1px;background-color:#ddc917;"></span>
        <p class="text-content">{{ textObj.leftBottom }}</p>
      </div>

      <div class="text-container text-container-right">
        <p class="text-number">{{ showDataRef.rightBottomData }}</p>
        <span style="display: block;width: 20px;height: 1px;background-color:#ddc917;"></span>
        <p class="text-content">{{ textObj.rightBottom }}</p>
      </div>
    </div>
    <div class="center_container">
      <img :src="require('@/assets/pic_1.png')" alt="梯形图">
      <div class="middle_content">
        <p style="font-size: 35px;font-weight: bold;color: #FFFFFF;">{{ showDataRef.time }}</p>
        <span style="display: block;width: 31px;height: 2px;background-color:#00F900;"></span>
        <p class="middle-text">{{ textObj.middle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import $axios from '@/axios';
export default {
  props: {
    textObj: {
      type: Object,
      require: true
    },
    url: {
      type: Object,
      require: true
    }
  },
  setup(props, {emit}) {
    // const url = {
    //   lodderUrl: 'lodder/test'
    // };
    let showDataRef = ref({});
    $axios.http(props.url.lodderUrl).then(res => {
      showDataRef.value = res.data;
    });

    return {
      showDataRef
    }
  }
}
</script>

<style scoped lang="scss">
#ladder-container{
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;

  .img-container {
    height: 108px;
    margin-bottom: 20px;

    position: relative;

    .text-container {
      position: absolute;
      top: 40px;
      left: 79px;
      color: #ffffff;
      height: 70px;
      width: 75px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .text-number {
        font-size: 24px;
        font-family: Electronica-Oblique;
        font-style: oblique;
      }

      .text-content {
        font-style: italic;
        font-family: Source Han Sans CN;
        font-size: 12px;
        font-weight: 500;
        color: #FFFFFF;
        text-shadow: 0px 0px 3px rgba(0,250,109,0.8),0px 0px 3px rgba(0,250,109,0.4),0px 0px 3px rgba(0,250,109,0.2);
        background: linear-gradient(0deg, #00FA6D, #fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

    }

    .text-container-right {
        left: 283px;
    }
  }

  .center_container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .middle_content {
      color: #fff;
      width: 105px;
      height: 80px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-60%);

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .middle-text {
        font-style: italic;
        font-family: Source Han Sans CN;
        font-size: 16px;
        font-weight: 500;
        color: #FFFFFF;
        text-shadow: 0px 0px 3px rgba(2,167,248,0.8),0px 0px 3px rgba(2,167,248,0.4),0px 0px 3px rgba(2,167,248,0.2);
        background: linear-gradient(0deg, #02A7FB, #ffffff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

}
</style>