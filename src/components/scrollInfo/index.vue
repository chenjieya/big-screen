<template>
  <div id="second-container">
    <ul class="scroll-container" ref="ulRef">
      <vue-seamless-scroll :data="sortJson" :class-option="classOption">
        <li class="item" v-for="item in sortJson" :key="item.id">
          <span
              class="sort lowser"
              :class="[
              {
                no1: +item.sort === 1,
                no2: +item.sort === 2,
                no3: +item.sort === 3,
              },
            ]"
          >{{ item.sort }}</span>
          <p class="text">{{ item.main }}</p>
          <span class="data-total">{{ item.total }}</span>
        </li>
      </vue-seamless-scroll>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import vueSeamlessScroll from "vue-seamless-scroll";
import $axios from '@/axios';
export default {
  components: {
    vueSeamlessScroll,
  },

  setup() {
    let jsonRef = ref([]);
    const url = {
      equSortUrl: 'equsort/test'
    }
    $axios.http(url.equSortUrl).then(res => {
      jsonRef.value = res.data;
    });

    // 按数据的总数关键字进行排序
    const sortJson = computed(() => {
      return jsonRef.value
          .sort((a, b) => +b.total - +a.total)
          .map((item, index) => {
            item.sort = index + 1;
            return item;
          })
          .filter((it) => it);
    })

    // 滚动的配置信息
    const classOption = computed(() => {
      return {
        step: 2, // 数值越大速度滚动越快
        limitMoveNum: 7, // 开启无缝滚动的数据量 设置(数值<=页面展示数据条数不滚)(超过页面展示条数滚动)
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 35,
        waitTime: 2500, // 单行停顿时间(singleHeight,waitTime)
        hoverStop: false, // 是否开启鼠标悬停stop
      };
    })

    return {
      sortJson,
      classOption
    }
  }

};
</script>

<style scoped lang="scss">
/* 测试布局，样式重置 */
ul,
li,
p {
  padding: 0;
  margin: 0;
  list-style: none;
}

#second-container {
  box-sizing: border-box;
  padding-top: 20px;
  overflow: hidden;

  .scroll-container {
    padding-left: 20px;
    padding-right: 20px;
    color: #fff;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.5s;

    .item {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 25px;
      box-sizing: border-box;
      margin: 9px 0;

      .text {
        width: 240px;
        height: 25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .data-total {
        width: 30px;
        height: 25px;
        text-align: right;
        font-style: oblique;
      }

      .sort {
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #f40;
        text-align: center;
        line-height: 25px;
        color: #fff;
        font-size: 12px;
      }

      .lowser {
        background: rgba(0,228,255,0);
        border: 1px solid #00E4FF;
        color: #00E4FF;
      }


      .no1 {
        background: linear-gradient(0deg, #FAAE1C, #F86828);
        border: 1px solid #FAAE1C;
        color: #fff;
      }

      .no2 {
        background: linear-gradient(0deg, #EA3E6F, #EB3FE2);
        border: 1px solid #EA3E6F;
        color: #fff;
      }

      .no3 {
        background: linear-gradient(0deg, #00D6E6, #0051D9);
        border: 1px solid #0051D9;
        color: #fff;
      }

    }
  }

  .move {
    transition: all 2.5s;
    transform: translateY(-21px);
  }
}
</style>