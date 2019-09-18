<template>
  <div>
    <h1>这是播放页</h1>
    <audio :src="songInfo" controls ref="audio"></audio>
    <div class="box" ref="box">content</div>
    <button class="btn" @click="btn" ref="btn">播放</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songInfo: "",
      timer: null,
      degree: 0,
      onOff: true
    };
  },
  methods: {
    btn() {
      if (this.onOff) {
        this.$refs.audio.play();
        this.timer = setInterval(() => {
          this.$refs.box.style.transform = "rotate(" + this.degree + "deg)";
          this.degree = this.degree + 0.18;
          console.log(this.degree);
        }, 10);
        this.$refs.btn.innerHTML = "暂停";
        this.onOff = false;
      } else {
        clearInterval(this.timer);
        this.$refs.btn.innerHTML = "播放";
        this.onOff = true;
      }
    }
  },
  mounted() {
    //   根据传递过来的歌曲id调取接口,获取歌曲的mp3路径，并播放
    this.$axios({
      url: "http://localhost:3000/song/url",
      params: {
        id: this.$route.query.id
      }
    }).then(res => {
      // console.log(res);
      this.songInfo = res.data.data[0].url;
    });
  }
};
</script>
<style lang="">
.box {
  width: 100px;
  height: 100px;
  border: 2px solid #cccccc;
  text-align: center;
  line-height: 100px;
}
</style>