// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"张三", 
    age:18,
    num1:100,
    num2:300,
    num3:20,
    date:new Date().toLocaleString(),
    isBgc:false,
    viewStyle:"viewStyle1",
    isShow:true,
    isHidden:true,
    inputTextValue:"",
    showText:'',
    fenShu:50,
    movies:["少年的你","谁的青春不迷茫","斗罗大陆"],
    userName:"左成",
    userAge:20
  },
  onLoad:function(){
    //在加载事件中注册一个计时器
    setInterval(()=>{
      this.setData({
        date:new Date().toLocaleString()
      })
    },1000)
  },
  viewStyle() {
  
    this.setData({
      isBgc:! this.data.isBgc
    })
  },
  viewClick(){
    this.setData({
      viewStyle: this.data.viewStyle == "viewStyle1" ? "viewStyle2" :"viewStyle1"
    })
  },
  isShowClick(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  isHiddenClick(){
    this.setData({
      isHidden:!this.data.isHidden
    })
  },
  bin1Click(){
    var chengJi= this.data.inputTextValue;
    this.setData({
      showText:((chengJi>90?"优秀":chengJi)>80?"良好":chengJi)>60?"一般":"很差"
    })
  },
  inputEvent(event){
    this.data.inputTextValue=event.detail.value
    this.setData({
      inputTextValue:this.data.inputTextValue
    })
  },
  addClick_1(){
    this.setData({
      fenShu:this.data.fenShu+6
    })
  }
})