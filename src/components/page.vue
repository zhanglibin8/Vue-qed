<template>
  <div class="block page clear">
    <el-pagination
      class="pull-right"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="sharedState.curPage"
      :page-sizes="sharedState.pageCountArr"
      :page-size="sharedState.pageCount"
      layout="total, sizes, prev, pager, next, jumper"
      :total="sharedState.totalPage">
    </el-pagination>
  </div>
</template>

<script>
  import store from '@/store';
  export default {
    name: 'page',
    data () {
      return {
        msg: '',
        sharedState: store.state
      }
    },
    mounted: function () {
      this.getData()
    },
    methods: {
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        this.sharedState.pageCount = val;
        this.getData()
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        this.sharedState.curPage = val;
        this.getData()
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

<style scoped>
  .page{
    padding: 10px 20px;
    background: #fff;
  }
  .pull-right{
    float: right;
  }
</style>
