
const app=getApp();
console.log(app.globaData.name)
console.log(app.globaData.age)


Page({
  data:{
    msg:'我是张三',
    age:18

  },
  userInfo:function(event){
    
    console.log(event)
    wx.getUserInfo({
      success:function(res){
        console.log(res);
      }
    })
  },
  getUserInf2:function(e){
    console.log(e);
  },
  onLoad:function(){
    console.log('hahahah')
  }
})

