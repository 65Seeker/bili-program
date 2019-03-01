//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    nvaList:[],
    swiperList:[],
    videosList:[],
    // 被点击菜单的索引
    currentIndexNav:0,
    
  },

  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  getNvaList(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  getSwiperList(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            swiperList: res.data.data.swiperList
          })  
        }
      }
    })
  },
  getVideosList(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
      success(res){
        console.log(res);
        if(res.data.code===0){
          that.setData({
            videosList:res.data.data.videosList
          })
        }
      }
    })
  },
  onLoad:function(options){
    this.getNvaList();
    this.getSwiperList();
    this.getVideosList();
  },
})
