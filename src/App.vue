<template>
  <div id="app">
    <header><img src="./assets/logo1.png" alt="logo"></header>
    <div class="main">

      <leftMenu></leftMenu>

      <router-view class="right"></router-view>

    </div>
    <!--<img src="./assets/logo.png">-->

  </div>
</template>

<script>
  import leftMenu from './components/leftMenu.vue';
  export default{
    name: 'App',
    components: { leftMenu }
  }
</script>


<style>
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }

  header {
    width: 100%;
    height: 65px;
    line-height: 65px;
    background: linear-gradient(to right, #223B65, #3A80C3);
    text-align: left;
    padding: 0 40px;
  }

  header img {
    height: 50px;
    margin-top: 5px;
  }


  .main {
    height: calc(100% - 65px);
    display: flex;
  }

</style>
