<template>
  <div class="scan">
    <h1>{{ msg }}</h1>
    <button @click="handleClick('hi',$event)">click</button>
    <br>
    <ul class="size" :style="{fontSize: postFontSize + 'px'}">
      <li is="test-component" title="larger" v-on:larger-text="postFontSize += $event"></li>
      <li is="test-component" title="small" v-on:larger-text="postFontSize -= $event"></li>
      <test-component title="larger" v-on:larger-text="handleLargerText"></test-component>
    </ul>
    <button @click="show = !show">click</button>
    <transition name="linear">
      <p v-if="show">1.show me?</p>
    </transition>
    <transition name="linear">
      <p v-if="show">2.show me?</p>
    </transition>
    <transition name="testAnimateCss">
      <p v-if="show">3.show me?</p>
    </transition>
    <div style="width: 500px;height: 2px;background: red"></div>
  </div>
</template>

<style>
  .scan{
    padding: 50px;
  }
  .size{
    transition: font-size 1s;
   }
  .linear-enter-active, .linear-leave-active {
    transition: opacity 1s;
  }
  .linear-enter, .linear-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .testAnimateCss-enter-active, .testAnimateCss-leave-active {
    animation: flash .5s reverse;
  }
</style>

<script>
  export default {
    name: 'scan',
    data () {
      return {
        msg: 'scan',
        larger:0.5,
        postFontSize:14,
        show:true
      }
    },//
    methods:{
      handleClick:function (message, $event) {
        alert(message);
        console.log($event)
      },
      handleLargerText:function ($event) {
        this.postFontSize += $event
      }
    }
  }
</script>
