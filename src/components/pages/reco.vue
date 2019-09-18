<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerInfo" :key="item.id">
          <img :src="item.pic" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="radio">
      <h3>電臺</h3>
      <div class="content">
        <router-link to="/index/rank" class="left con">
          <img src="../../assets/images/track_radio_199_12_8.jpg" alt />
          <span>熱歌</span>
        </router-link>
        <router-link to="/index/rank" class="right con">
          <img src="../../assets/images/track_radio_307_12_5.jpg" alt />
          <span>一人一首招牌歌</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerInfo: []
    };
  },
  mounted() {
    // 调取banner接口
    this.$axios({
      method: "get",
      url: "http://localhost:3000/banner",
      params: {
        type: 1
      }
    }).then(res => {
      console.log(res)
      this.bannerInfo = res.data.banners;
      this.bannerInfo.length = 4;
      this.$nextTick(() => {
        // 实例化轮播图
        new this.$swiper(".swiper-container", {
          pagination: {
            el: ".swiper-pagination"
          },
          autoplay: {
            stopOnLastSlide: true,
            disableOnInteraction: true
          },
          loop: true
        });
      });
    });
  }
};
</script>
<style scoped>
/* 轮播图部分 */
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  width: 3.75rem;
  height: 1.5rem;
}
.radio {
  width: 3.55rem;
  /* height: 2.7rem; */
  box-sizing: border-box;
  margin: 0 0.1rem 07rem;
}
.radio h3 {
  width: 100%;
  font-size: 0.16rem;
  color: #000;
  margin-bottom: 0.11rem;
  font-weight: 400;
}
.radio .content {
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
}
.radio .content img {
  display: block;
  width: 1.73rem;
  height: 1.73rem;
  margin-bottom: 0.05rem;
}
.radio .content span {
  display: block;
  padding: 0 0.07rem 0.05rem;
  font-size: 0.14rem;
  height: 0.36rem;
  line-height: 0.18rem;
  white-space: normal;
  word-wrap: break-word;
}
</style>