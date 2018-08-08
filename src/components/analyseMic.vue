<template>
  <div class="con">
    <el-row class="top">
      <el-col :span="8">
        <el-row>标本条码
          <el-input
            placeholder="请输入患者条形编码"
            v-model="code"
            clearable>
          </el-input>
        </el-row>
        <el-row>患者姓名
          <el-input
            placeholder="请输入患者姓名"
            v-model="name"
            clearable>
          </el-input>
        </el-row>
      </el-col>
      <el-col :span="16">
        <el-row>
          <span class="mar-r">检查时间
            <el-input
              placeholder="请输入患者条形编码"
              v-model="time"
              clearable>
            </el-input>
          </span>
          <el-button round>近7日</el-button>
          <el-button round>近15日</el-button>
          <el-button round>近30日</el-button>
        </el-row>
        <el-row>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
          <el-button type="primary" icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-upload2">上传</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="list-main">
      <el-tabs v-model="sharedState.activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="待审核" name="1"><noExamine></noExamine></el-tab-pane>
        <el-tab-pane label="已审核" name="2"><alreadyExamine></alreadyExamine></el-tab-pane>
        <el-tab-pane label="标本处理中" name="0"><handleIng></handleIng></el-tab-pane>
      </el-tabs>
    </el-row>
    <page></page>
  </div>
</template>

<script>
  import noExamine from './noExamine.vue';
  import alreadyExamine from './alreadyExamine.vue';
  import handleIng from './handleIng.vue';
  import page from './page.vue';
  import store from '@/store';//共享状态
  export default {
    name: 'analyseMic',
    components: { noExamine , alreadyExamine, handleIng, page },
    data () {
      return {
        code: '',
        name:'',
        time:'',
        sharedState: store.state
      }
    },
    methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
        this.sharedState.activeName = tab.name;
        this.sharedState.curPage = 1;
        this.getData();
      },
      getData: function () {
        var that = this;
        var opt = this.$qs.stringify({
          data:{
            data: {
              typeid: 2121,
              status: this.sharedState.activeName
            },
            page: this.sharedState.curPage,
            pagecount: this.sharedState.pageCount
          }
        });
        this.$axios.post('http://192.168.1.245:3001/study/',opt)
          .then(function (response) {
            //console.log(response.data);
            that.sharedState.totalPage = response.data.counts;
            that.sharedState.list = [];
            for(var i = 0; i < response.data.studylist.length; i++){
              that.sharedState.list.push(that.deepCopy(response.data.studylist[i]))
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .con{
    width: 100%;
    height: 100%;
    background: #e0e0e0;
    padding: 20px;
  }
  .top{
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    padding: 20px 10px;
    margin-bottom: 20px;
  }
  .el-input{
    width: 200px;
  }
  .mar-r{
    display: inline-block;
    margin-right: 10px;
  }
  .top .el-row{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
  }
  .list-main{
    background: #fff;
    height: calc(100% - 300px);
  }
  .el-tabs__item.is-active {
    border-top: 4px solid #409EFF !important;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav{
    border:none !important;
    border-right: 1px solid #e4e7ed !important;
  }
</style>
