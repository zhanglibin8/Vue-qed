import Vue from 'vue'
import Router from 'vue-router'
import analyseMic from '@/components/analyseMic'
import scan from '@/components/scan'
import analyseBP from '@/components/analyseBP'
import analysePB from '@/components/analysePB'
import testData from '@/components/testData'
import modeSet from '@/components/modeSet'
import sign from '@/components/sign'
import userSet from '@/components/userSet'
import statistics from '@/components/statistics'
import test from '@/components/test'

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',//微核分析
      name: 'analyseMic',
      component: analyseMic
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/scan',//扫片
      name: 'scan',
      component: scan
    },
    {
      path: '/analyseBP',//血液肿瘤
      name: 'analyseBP',
      component: analyseBP
    },
    {
      path: '/analysePB',//外周血
      name: 'analysePB',
      component: analysePB
    },
    {
      path: '/testData',//验证数据
      name: 'testData',
      component: testData
    },
    {
      path: '/modeSet',//模型设置
      name: 'modeSet',
      component: modeSet
    },
    {
      path: '/sign',//数据标记
      name: 'sign',
      component: sign
    },
    {
      path: '/userSet',//权限管理
      name: 'userSet',
      component: userSet
    },
    {
      path: '/statistics',//统计
      name: 'statistics',
      component: statistics
    }
  ]
})
