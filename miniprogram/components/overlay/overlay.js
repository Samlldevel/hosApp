// components/overlay .js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    show: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickHide(v = false) {
      this.setData({ show: v });
    }
  }
})
