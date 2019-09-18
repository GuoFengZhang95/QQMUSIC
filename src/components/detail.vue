
<template>
  <div>
    <h3>这是详情页</h3>
    <ul>
      <li v-for="(item,index) in songsList" :key="index">
        <span @click="play(item.id)">歌曲相关：{{item.name}}</span>
        <br />
        <span>歌曲id:{{item.id}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songsList: []
    };
  },
  methods: {
    play(id) {
      //进行路由跳转,并传递歌曲的id
      this.$router.push({
        path: "/play",
        query: {
          id: id
        }
      });
    }
  },
  mounted() {
    // 挂载时利用获取传递的参数调取接口
    this.$axios({
      url: "http://localhost:3000/search",
      params: {
        keywords: this.$route.query.id
      }
    }).then(res => {
      console.log(res)
      this.songsList = res.data.result.songs;
      // this.songsList.length > 10 ? 10 : this.songsList.length;
      if (this.songsList.length > 10) {
        this.songsList.length = 10;
      }
    });
  }
};
</script>
<style  scoped>
</style>