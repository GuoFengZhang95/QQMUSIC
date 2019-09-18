<template>
  <div>
    <div class="search-bar">
      <div class="search-bar-content">
        <span class="iconfont icon-sousuo"></span>
        <input
          type="text"
          placeholder="搜索歌曲、歌单、专辑"
          @focus="focus()"
          @keydown.enter="search()"
          v-model="value"
        />
        <span class="iconfont icon-shanchu" v-show="value" @click="delInp()"></span>
        <div class="search-bar-cancel" v-show="!isShow" @click="cancel()">取消</div>
      </div>
    </div>
    <div class="hot-key" v-show="keyisShow">
      <h3>热门搜索</h3>
      <div class="result-tags">
        <a
          href="javascript:;"
          v-for="(item,index) in hotKeys"
          :key="index"
          @click="goDetail(item.searchWord)"
        >{{item.searchWord}}</a>
      </div>
    </div>
    <!-- 搜索结果显示 -->
    <div class="search-res" v-show="searchResults.length">
      <ul>
        <li class="search-res-li" v-for="item in searchResults" :key="item.id">
          <i class="iconfont icon-yinyue"></i>
          <h6>{{item.name}}</h6>
          <p>{{item.artists[0].name}}</p>
        </li>
      </ul>
      <p class="search-complete">点击获取更多搜索结果</p>
    </div>
    <!-- 历史记录显示 -->
    <div class="search-rec" v-if="recisShow">
      <ul>
        <li class="search-rec-li" v-for="(item,index) in searchRecord" :key="index">
          <i class="iconfont icon-lishijiluxianxing"></i>
          <p>{{item}}</p>
          <i class="iconfont icon-shanchu1" @click="delRec(index)"></i>
        </li>
      </ul>
      <p @click="clear()" v-if="searchRecord.length">清除搜索记录</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 热词开关
      keyisShow: true,
      // 历史记录开关
      recisShow: false,
      isShow: true,
      value: "",
      // 热们搜索
      hotKeys: [],
      // 接口返回值
      searchResults: [],
      // 历史记录
      searchRecord: []
    };
  },
  methods: {
    // 清空输入框
    delInp() {
      this.value = "";
      this.recisShow = true;
    },
    // 搜索框得焦
    focus() {
      this.keyisShow = false;
      this.recisShow = true;
      this.isShow = false;
    },
    // 开始搜索
    search() {
      this.recisShow = false;
      // 存入本地存储
      this.searchRecord.push(this.value);
      let set = new Set(this.searchRecord);
      localStorage.setItem("searchRecords", JSON.stringify(set));
      // 调取网易云搜索接口
      this.$axios({
        method: "get",
        url: "http://localhost:3000/search",
        params: {
          keywords: this.value,
          limit: 5
        }
      }).then(res => {
        this.searchResults = res.data.result.songs;
      });
    },
    // 取消搜索
    cancel() {
      this.keyisShow = true;
      this.recisShow = false;
      this.isShow = true;
      this.searchResults = [];
    },
    // 删除一条历史记录
    delRec(i) {
      this.searchRecord.splice(i, 1);
      // 更新本地存储
      localStorage.setItem("searchRecords", JSON.stringify(this.searchRecord));
    },
    // 清空历史记录
    clear() {
      localStorage.clear("searchRecords");
      this.searchRecord = [];
    },
    // 热词跳转详情页
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        // 把歌曲名传递过去
        query: {
          id: id
        }
      });
    }
  },
  mounted() {
    // 初始化 searchRecord
    this.searchRecord = JSON.parse(localStorage.getItem("searchRecords"));
    // 热门搜索接口
    this.$axios({
      method: "get",
      url: "http://localhost:3000/search/hot/detail"
    }).then(res => {
      console.log(res);
      this.hotKeys = res.data.data;
      this.hotKeys.length = 8;
    });
  },
  watch: {
    value() {
      this.searchResults = [];
    }
  }
};
</script>
<style scoped>
/* ----------搜索框 ----------*/
.search-bar {
  width: 3.75rem;
  height: 0.56rem;
  box-sizing: border-box;
  padding: 0.1rem;
  background: #f4f4f4;
}
.search-bar-content {
  position: relative;
  border-radius: 0.03rem;
  background: #fff;
  height: 0.2rem;
  padding: 0.08rem 0.12rem 0.08rem 0.35rem;
}
.search-bar-content input {
  height: 0.2rem;
  line-height: 0.2rem;
  width: 100%;
  color: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  -webkit-appearance: none;
  font-size: 0.14rem;
}
/* 搜索框icon图标 */
.search-bar-content span:nth-of-type(1) {
  position: absolute;
  top: 0.01rem;
  left: 0.08rem;
  width: 0.18rem;
  height: 0.18rem;
  font-size: 0.22rem;
  color: #afafaf;
}
.search-bar-content span:nth-of-type(2) {
  position: absolute;
  top: 0.07rem;
  right: 0.6rem;
  height: 0.18rem;
  font-size: 0.16rem;
  color: #afafaf;
}
.search-bar-cancel {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 0.1rem;
  padding-left: 0.1rem;
  font-size: 0.14rem;
  height: 0.36rem;
  line-height: 0.36rem;
  background: #f4f4f4;
}

/* ----------热词推荐---------- */
.hot-key {
  padding: 0.15rem 0.15rem 0.1rem 0.15rem;
}
.hot-key h3 {
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0.08rem;
  font-weight: bold;
  font-size: 0.14rem;
}
.hot-key .result-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
}
.hot-key .result-tags a {
  display: block;
  font-size: 0.14rem;
  padding: 0 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #000;
  border: 0.01rem solid rgba(0, 0, 0, 0.6);
  border-radius: 0.99rem;
  word-break: keep-all;
  margin-bottom: 0.1rem;
  margin-right: 14px;
}
.hot-key .result-tags a:nth-child(1) {
  color: #fc4524;
  border-color: #fc4524;
}
/*---------- 搜索结果 和历史记录----------*/
.search-res .search-res-li,
.search-rec .search-rec-li {
  position: relative;
  height: 0.55rem;
  padding-left: 0.56rem;
  overflow: hidden;
}
.search-res .search-res-li::after {
  content: "";
  position: absolute;
  height: 0.01rem;
  top: 0;
  left: 0;
  width: 100%;
  background: #e5e5e5;
}
/*---------- 搜索结果和历史记录confont ----------*/
.search-res .search-res-li > i,
.search-rec .search-rec-li > i {
  position: absolute;

  width: 0.22rem;
  height: 0.22rem;
  color: #afafaf;
  font-size: 0.2rem;
}

.search-res .search-res-li > i {
  top: 0.11rem;
  left: 0.18rem;
}
.search-rec .search-rec-li > i:nth-of-type(1) {
  top: 0.06rem;
  left: 0.18rem;
}
.search-rec .search-rec-li > i:nth-of-type(2) {
  right: 0.16rem;
  top: 0.06rem;
  font-weight: 100;
}

.search-res .search-res-li > h6 {
  margin: 0.1rem 0 0.02rem;
  line-height: 0.18rem;
  font-size: 0.16rem;
  font-weight: 400;
  color: #000;
}
.search-res .search-res-li > p {
  color: grey;
}
.search-res > p {
  line-height: 40px;
  text-align: center;
  color: grey;
}
.search-rec .search-rec-li {
  height: 0.44rem;
}
.search-rec > p {
  line-height: 0.4rem;
  text-align: center;
  color: #47c88a;
}
.search-rec .search-rec-li > p {
  height: 0.44rem;
  line-height: 0.44rem;
  color: #000;
  font-size: 0.14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>