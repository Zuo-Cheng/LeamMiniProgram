Page({
  data:{
    mes:"我是消息",
    movieList:[]
  },
  //当页面加载出来时
  onLoad:function(){
    // wx.request({
    //   url:'http://localhost:60223/backstageLogin/%E9%A6%96%E9%A1%B5/LoadSubjectTopData.ashx',
    //   success:(_data)=>{
    //     console.log(_data.data),
    //     this.setData({
    //      movieList:_data
    //     })
    //   }
    // })
  },
  //当页面显示出来时
  onShow:function(){
    console.log('我是页面显示事件')
  },
  //当页面初次渲染时
  onReady:function(){
    console.log('我是页面初次渲染事件')
  },
  //当页面隐藏时
  onHide:function(){
    console.log('我是页面隐藏事件')
  },
  //当页面卸载时执行
  onUnload:function(){

  },
  viewClick:function(){
    console.log('view发生了点击')
  },
  //页面滚动事件
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚到了顶部
  onReachBottom(){
    console.log('页面到底部了')
  },
  //监听下拉刷新事件
  onPullDownRefresh(){
    console.log('下拉刷新了')
  }
})