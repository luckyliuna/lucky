/**
 * Created by hxsd on 2016/5/24.
 */
$(document).ready(function(){
//index——banner轮播图
    $(".lunbo_ul").kxbdSuperMarquee({
        distance:200,//一次滚动的距离
        duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
        time:3,//停顿时间，单位为秒
        direction: 'left',//滚动方向，'left','right','up','down'
        btnGo:{left:'.arrow_L',right:".arrow_R"}
    });

    //index——banner轮播图
    $(".about_pic").kxbdSuperMarquee({
        distance:232,//一次滚动的距离
        duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
        time:3,//停顿时间，单位为秒
        direction: 'left',//滚动方向，'left','right','up','down'
        btnGo:{left:'.about_arrowL',right:".about_arrowR"}
    });

    //detail_right_bot轮播图
    $(".doc_bot").kxbdSuperMarquee({
        distance:267,//一次滚动的距离
        duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
        time:3,//停顿时间，单位为秒
        direction: 'left',//滚动方向，'left','right','up','down'
        navId:'.detail_num_bot'
    });
    //detail_right_top轮播图
    $(".detail_right_pic").kxbdSuperMarquee({
        distance:267,//一次滚动的距离
        duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
        time:3,//停顿时间，单位为秒
        direction: 'left',//滚动方向，'left','right','up','down'
        navId:'.detail_num_top'
    });
    //detail_right_top轮播图
    $(".store_pic").kxbdSuperMarquee({
        distance:113,//一次滚动的距离
        duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
        time:3,//停顿时间，单位为秒
        direction: 'left',//滚动方向，'left','right','up','down'
        btnGo:{left:'.store_l',right:".store_r"}
    });
$("#box #one .table_td").css("background","#fff");
$("#box #one .table_td").next().show();
$("#box .one .table_td").hover(function(){
    $("#box .one .detail").hide();
    $("#box .one .table_td").css("background","#f0f0f0");
   $(this).css("background","#fff");
   $(this).next().show();
})






});