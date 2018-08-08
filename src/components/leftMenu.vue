<template>
  <div class="left">
    <div class="toggleRow"><i @click="toggleMenu" class="el-icon-menu toggle" ></i></div>
    <el-menu default-active="/" text-color="#ffffff" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
      <el-menu-item index="/scan">
        <i class="el-icon-info"></i>
        <span slot="title">自动扫片</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">细胞分析</span>
        </template>
        <el-menu-item-group>
          <!--<span slot="title">分组一</span>-->
          <el-menu-item index="/"><span class="pad">微核分析</span></el-menu-item>
          <el-menu-item index="/analyseBP"><span class="pad">血液肿瘤</span></el-menu-item>
          <el-menu-item index="/analysePB"><span class="pad">外周血分析</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </template>
        <el-menu-item-group>
          <el-submenu index="3-1">
            <span class="pad" slot="title">数据管理</span>
            <el-menu-item-group>
              <el-menu-item index="/testData"><span class="pad">验证数据</span></el-menu-item>
              <el-menu-item index="/modeSet"><span class="pad">模型设置</span></el-menu-item>
              <el-menu-item index="/sign"><span class="pad">数据标记</span></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/userSet"><span class="pad">权限管理</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/statistics">
        <i class="el-icon-document"></i>
        <span slot="title">统计</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
  .el-menu{
    background: none;
    border-right: none;
  }
  .el-menu--popup-right-start{
    background: rgba(58,128,195,.5);
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
  .left, .right{
    height: 100%;
  }
  .left{
    box-sizing: border-box;
    padding: 20px 0;
    text-align: left;
    background: url(../assets/backgroundpic.png) no-repeat center;
    background-size: 100% 100%;
  }
  .toggleRow{
    text-align: center;
    cursor: pointer;
    color: #fff;
    line-height: 30px;
    font-size: 20px;
  }
  .pad{
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-left: 20px;
  }
  .pad a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
  }
  .el-menu-item-group__title{
    display: none;
  }
</style>

<script>
  export default {
    name: 'leftMenu',
    data() {
      return {
        isCollapse: true,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleMenu(){
        this.isCollapse = !this.isCollapse;
      }
    }
  }
</script>
