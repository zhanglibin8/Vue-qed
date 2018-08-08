<template>
  <div>
    <span>{{massage}}</span>
    <button @click="reverse">reverse</button>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        massage: 'just a test',
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      }
    },
    methods: {
      reverse: function () {
        this.massage = this.massage.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>
  span {
    color: aqua;
    font-size: 22px;
  }
</style>
