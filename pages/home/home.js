
// 第一天的内容
// Page({
//   data:{
//     name:'lisi',
//     msg:'大家好我叫左成，我会打代码',
//     movies:['张三','李四','王五','赵六','田七','赵久'],
//     StuObj:[
//       { name: '张三', age: 18, gender: '男' },
//       { name: '李四', age: 20, gender: '女' },
//       { name: '王五', age: 36, gender: '男' }
//     ],
//     num:0
//   },
//     btnClick(){
//       this.setData({
//       })
//     },
//   btn2Click(){
//     this.setData({
//       num:this.data.num+1
//     })
//   }
// })

Page({
  data:{
    zuocheng:{
      name:'左成',
      age:18,
      gender:'男'
    }
    },
    btnClick(){
      console.log('打印了我')
    },
  ShowMsg(){
    console.log('对对对');
  }
})