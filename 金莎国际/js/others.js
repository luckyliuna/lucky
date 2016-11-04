/**
 * Created by hxsd on 2016/5/24.
 */
$(document).ready(function(){
//index——banner轮播图
    $(".success_main_top").kxbdSuperMarquee({
        distance:480,//一次滚动的距离
        duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
        time:3,//停顿时间，单位为秒
        direction: 'left',//滚动方向，'left','right','up','down'
        btnGo:{left:'#goL',right:'#goR'}
    });
    //index——banner轮播图
    $(".lunbo").kxbdSuperMarquee({
        distance:73,//一次滚动的距离
        duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
        time:3,//停顿时间，单位为秒
        direction: 'left',//滚动方向，'left','right','up','down'scrollAmount:1,
        btnGo:{left:'.lunbo_l',right:'.lunbo_r'}
    });
});