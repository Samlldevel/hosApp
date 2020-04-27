// miniprogram/pages/appoint/appoint.js\
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    columns: [
      {
        values: Object.keys(citys),
        className: 'column1'
      },
      {
        values: citys['浙江'],
        className: 'column2',
        defaultIndex: 2
      }
    ],
    show: false,
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  change(event) {
    const { picker, value, index } = event.detail;
    console.log(event)
    picker.setColumnValues(1, citys[value[0]]);
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})