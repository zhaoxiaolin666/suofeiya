<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrollTop > 300) {
        this.goTopShow = true;
      } else {
        this.goTopShow = false;
      }
    },
    goTop() {
      let timer = null,
        _that = this;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 50;
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
          _that.goTopShow = false;
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenWidth变化的值
          let w = that.screenWidth;
          if (w <= 1080) {
            //手机端
            // location.href = "http://mob.gdgjsxy.com";
          } else {
            //pc端
            // location.href = "https://gdgjsxy.com";
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
*{
  margin:0;
  padding:0;
}
html,
body {
  height: 100%;
}
#app {
  min-width: 320px;
  margin: 0 auto;
}
.goTop {
  width: 122px;
  height: 122px;
  position: fixed;
  right: 36px;
  bottom: 200px;
  z-index: 999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9a053;
  border-radius: 50%;
  img {
    width: 42px;
  }
}
</style>
