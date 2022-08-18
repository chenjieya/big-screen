<template>
  <div id="group-container">
    <header class="header">
      <p>{{ headerTitle }}</p>
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <footer v-if="footerStatus" class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    headerTitle: {
      required: true
    },
    footerStatus: {
      type: Boolean,
      default: false
    }
  },
  setup() {}
};
</script>

<style scoped lang="scss">
@import '~@/styles/_variables.scss';
@import '~@/views/big-screen/scss/var_screen.scss';
#group-container {
  //padding-top: 20px;
  .header {
    height: $module_header_height;
    width: 100%;
    display: flex;
    justify-content: center;

    p {
      height: 100%;
      width: $module_header_width;

      text-align: center;
      font-size: $font_size;
      font-weight: bold;
      color: $color;

      margin: 0;
      line-height: $module_header_height;

      background-image: url("~@/assets/screen-line.png");
      background-size: $module_header_img_width $module_header_height;
      background-repeat: no-repeat;
    }
  }

  .main {
    div {
      margin: 0 auto;
    }
  }
}
</style>