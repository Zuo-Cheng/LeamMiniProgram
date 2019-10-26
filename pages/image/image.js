// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ImagePath:null
  },
  selectImage(){
    wx.chooseImage({
      success: (res)=> {
        this.setData({
          ImagePath:res.tempFilePaths[0]
        })
      },
    })
  },
  imagLoad(){
    console.log('图片加载成功')
  },
  imgError(){
    console.log('图片出错了')
  }
})