<template>
  <div>
    <!-- header部分 -->
    <header>
      <img src="../assets/images/logo_ch.svg" alt />
      <a href="javascript:;" class="down-load">下載APP</a>
    </header>
    <!-- 切換組件 -->
    <div class="top-nav">
      <!-- 解析為a標簽 跳轉到某個組件 -->
      <!-- 動態選擇類名 -->
      <router-link class="tab" to="/index/reco" activeClass="sel">推薦</router-link>
      <router-link class="tab" to="/index/rank" activeClass="sel">排行</router-link>
      <router-link class="tab" to="/index/search" activeClass="sel">搜索</router-link>
    </div>
    <router-view></router-view>
    <div class="footer">
      <router-link to class="download-bar">安装QQ音乐 发现更多精彩</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "内容"
    };
  }
};
</script>

<style scoped>
header {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 0.8rem;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 0.2rem;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.02);
  background-color: white;
  z-index: 100;
}
img {
  width: 1.26rem;
  height: 0.35rem;
}
.down-load {
  display: block;
  width: 0.78rem;
  height: 0.27rem;
  box-sizing: border-box;
  min-width: 0.4rem;
  height: 0.25rem;
  line-height: 0.25rem;
  padding: 0 0.1rem;
  text-align: center;
  font-size: 0.14rem;
  color: #000;
  border: 0.01rem solid rgba(0, 0, 0, 0.3);
  border-radius: 0.25rem;
  padding: 0 0.1rem;
}
.top-nav {
  width: 100%;
  padding: 0.8rem 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
/* 选项卡 */
.tab {
  display: block;
  height: 0.4rem;
  flex: 1;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.16rem;
  position: relative;
  color: rgba(0, 0, 0, 0.6);
}
.sel {
  color: #31c27c;
}
.sel::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.02rem;
  background: #31c27c;
}
/* 底部部分 */
.footer {
  position: fixed;
  z-index: 110;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.63rem;
  box-sizing: border-box;
  padding: 0.15rem 0;
  background-color: rgba(255,255,255,.9);
  display: flex;
  justify-content: center;
}
.footer .download-bar {
  display: block;
  padding: 0 0.15rem;
  border-radius: 0.99rem;
  background-color: #30c27c;
  color: #fff;
  height: 0.33rem;
  line-height: 0.33rem;
  font-size: 0.14rem;
}
</style>