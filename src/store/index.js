/**
 * Created by zlb on 18-7-30.
 * 共享状态
 */
let store  = {
  debug: true,
  state: {
    message: 'storeShareData!',
    totalPage: 0,//数据总条数
    curPage: 1,//当前页码
    pageCount: 10,//当前分页条数
    pageCountArr: [5,10,20],//分页条数
    list: [],//列表数据
    activeName: '1',//审核状态
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue);
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered');
    this.state.message = ''
  }
}
export default  store;
