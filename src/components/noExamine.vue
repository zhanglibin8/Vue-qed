<!--待审核页面-->
<template>
  <div class="noExamine">
    <el-table
      :data="listData"
      height="530"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="sid"
        label="标本条码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="studydate"
        label="检查时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="患者姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="患者性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="addTime"
        label="扫描时间">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
  .el-table thead th{
    background: #409EFF;
    color: #fff;
  }
  .cell{
    text-align: center;
  }
</style>

<script>
  import store from '@/store';//共享状态
//  import qs from 'qs';
  export default {
    name: 'noExamine',
    data () {
      return {
        msg: 'noExamine',
        sharedState: store.state
      }
    },
    mounted: function () {
      //this.getData()
    },
    computed: {
      listData: function () {
        return this.sharedState.list.filter(function (item, index) {
          return item.status === 1 || item.status === 3//1:待审核；3:处理失败
        })
      }
    },
    methods: {

    }

  }
</script>
