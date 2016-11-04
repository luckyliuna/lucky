$(function(){
	//banner轮播
	$(".index_banner").kxbdSuperMarquee({
		distance:1000,//一次滚动的距离
		duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
		time:3,//停顿时间，单位为秒
		direction: 'left',//滚动方向，'left','right','up','down'
		btnGo:{left:'.goL1',right:'.goR1'},
		navId:'.marqueeNav'
	});
	//左边导航
	$("#main1_L li:even").hover(function(){
		$("#main1_L li:odd").css("display","none");
		$("#main1_L li:even").css({"color":"#161212","font-weight":"normal"});
		$(this).css({"color":"#9d6a35","font-weight":"600"});
		$(this).next().css("display","block");
	});
	//选项卡切换事件
	$("#main1_m_title span").hover(function(){
	
		$("#main1_m_title span").css({"color":"#000","border-radius":"0","background":"#fff"});
		$(this).css({"color":"#9d6e07","background":"#e2e2e2" ,"border-top-left-radius": "8px","border-top-right-radius":"8px"});
		$("#main1_m_content ul").css("display","none");
		$("#main1_m_content ul").eq($(this).index()).css("display","block");
	});


	
	
	
	
	
	
	
	
	
});






















