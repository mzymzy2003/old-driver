<template>
  <div id="app" class="text-center">
    <h1 v-text="title" class="title"></h1>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="请输入车牌号" v-model="FH">
      <span class="input-group-btn">
        <button class="btn btn-success" type="button" @click="getFH">搜索</button>
      </span>
    </div>
    <div class="list-group">
      <img src="assets/loading.gif" class="loading" v-show="isLoading">
      <p v-show="isTipShow">非常抱歉，未找到！</p>
      <div v-for="item in items" class="item">
        <p class="text-left">标题：{{ item.title}} </p>
        <p class="text-left">
          <span>文件数 {{ item.files }} , </span>
          <span>下载数 {{ item.dl }} , </span>
          <span>大小 {{ item.size | getSize }}</span>
        </p>
        <input type="text" class="form-control" :value="item.maglink" onclick="this.select()"> 
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function(){
    return {
      title: '老司机带你们上车',
      FH: '',
      items: [],
      isTipShow: false,
      isLoading: false
    }
  },
  methods: {
    getFH: function () {
      this.isLoading = true;
      this.isTipShow = false;
      this.items = [];
      let url = 'https://crossorigin.me/https://fh4g.com/api/search?query=' + this.FH; 
      this.$http.get(url).then((response) => {
        if (response.ok) {
          this.isLoading = false;
          var res = response.json();
          this.items = res.result;
          if (this.items.length===0) {
            this.isTipShow = true;
          }
        }
      })
    }
  }
}
</script>

<style>
  .title{
    margin-top: 20px;
  }
  .input-group{
    margin: 20px auto;
    width: 300px;
  }
  .list-group .item{
    margin: 0 auto 20px;
    width: 500px;
  }
  .list-group .form-control{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
  .tip{
    display: none;
  }
  @media screen and (max-width: 768px){
    .list-group .item{
      width: 90%;
    }
    .input-group{
      width: 90%;
    }
  }
</style>
