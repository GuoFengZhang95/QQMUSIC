<template>
  <div class="rank-wrap">
    <ul v-for="(item) in rankInfo" :key="item.rId">
      <!-- 跳转 -->
      <router-link to>
        <li class="topi_item">
          <!-- 左侧图片 -->
          <img :src="item.imgSrc" alt />
          <!-- 右侧信息 -->
          <div class="list">
            <h4>{{item.rankName}}</h4>
            <ul class="song">
              <li v-for="(d,i) in item.songInfo" :key="d.sId">
                <span>{{i+1}}</span>
                <span>{{d.title}}</span>
                <span>{{d.author}}</span>
              </li>
            </ul>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankInfo: [
        {
          rId: 1,
          imgSrc: require("../../assets/images/li_1.jpg"),
          rankName: "流行指数榜",
          songInfo: [
            {
              sId: 1,
              title: "笑场",
              author: "薛之谦"
            },
            {
              sId: 2,
              title: "西海情歌",
              author: "刀郎"
            },
            {
              sId: 3,
              title: "小酒窝",
              author: "林俊杰"
            }
          ]
        },
        {
          rId: 2,
          imgSrc: require("../../assets/images/li_2.jpg"),
          rankName: "热歌榜",
          songInfo: [
            {
              sId: 1,
              title: "笑场",
              author: "薛之谦"
            },
            {
              sId: 2,
              title: "西海情歌",
              author: "刀郎"
            },
            {
              sId: 3,
              title: "小酒窝",
              author: "林俊杰"
            }
          ]
        },
        {
          rId: 3,
          imgSrc: require("../../assets/images/li_3.jpg"),
          rankName: "新歌榜",
          songInfo: [
            {
              sId: 1,
              title: "笑场",
              author: "薛之谦"
            },
            {
              sId: 2,
              title: "西海情歌",
              author: "刀郎"
            },
            {
              sId: 3,
              title: "小酒窝",
              author: "林俊杰"
            }
          ]
        },
        {
          rId: 4,
          imgSrc: require("../../assets/images/li_4.jpg"),
          rankName: "内地榜",
          songInfo: [
            {
              sId: 1,
              title: "笑场",
              author: "薛之谦"
            },
            {
              sId: 2,
              title: "西海情歌",
              author: "刀郎"
            },
            {
              sId: 3,
              title: "小酒窝",
              author: "林俊杰"
            }
          ]
        },
        {
          rId: 5,
          imgSrc: require("../../assets/images/li_4.jpg"),
          rankName: "香港地区榜",
          songInfo: [
            {
              sId: 1,
              title: "笑场",
              author: "薛之谦"
            },
            {
              sId: 2,
              title: "西海情歌",
              author: "刀郎"
            },
            {
              sId: 3,
              title: "小酒窝",
              author: "林俊杰"
            }
          ]
        },
        {
          rId: 6,
          imgSrc: require("../../assets/images/li_1.jpg"),
          rankName: "影视金曲榜",
          songInfo: [
            {
              sId: 1,
              title: "笑场",
              author: "薛之谦"
            },
            {
              sId: 2,
              title: "西海情歌",
              author: "刀郎"
            },
            {
              sId: 3,
              title: "小酒窝",
              author: "林俊杰"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.rank-wrap {
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
}
/*li部分 弹性盒子*/
.topi_item {
  height: 1rem;
  margin-bottom: 0.1rem;
  display: flex;
}
/* 图片 */
.topi_item img {
  display: block;
  width: 1rem;
  height: 1rem;
}
/* 右侧部分 */
.list {
  flex: 1;
  padding: 0 0.1rem 0 0.1rem;
}
.list h4 {
  font-size: 0.16rem;
  color: #000;
  font-weight: 400;
  margin-bottom: 0.05rem;
}
.list .song li {
  font-size: 0.14rem;
  color: rgba(0, 0, 0, 0.5);
}
.list .song li span:nth-child(2) {
  color: #000;
  margin-left: 0.08rem;
  margin-right: 0.05rem;
}
</style>