// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const db = cloud.database()
  const user = db.collection('user')

  let result = await user.orderBy('time', 'desc').get()
  let data = result.data

  const newTime = new Date().valueOf()

  // 0 未开始
  // 1 有效时间
  // -1 失效
  data.forEach(it => {
    it.time = new Date(it.time).valueOf()
    if (newTime - it.time > 1800000) {
      it.status = -1
    } else if (newTime - it.time < 1800000 && newTime > it.time) {
      it.status = 0
    } else {
      it.status = 1
    }
    // 区间重叠算法
    // 1、Begin = Max(A1, B1);
    // 2、End = Min(A2, B2);
    // 3、Len = End - Begin
    const startTime = it.time
    const endTime = it.time + 1800000
    data.forEach(s => {
      s.time = new Date(s.time).valueOf()
      const sTime = s.time
      const eTime = s.time + 1800000
      const Begin = Math.max(startTime, sTime)
      const End = Math.min(endTime, eTime)
      if (End - Begin > 0) {
        it.countActivate = it.countActivate ? it.countActivate + 1 : 1
      }
    })
  })

  return {
    data: result.data
  }

  
}
