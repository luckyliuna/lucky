var time = 0 //定时
var pause = true // pause= 正确
var set_timer //声明定时函数
var d = new Array(10) //声明d = 数组
var d_direct = new Array(
		[0], [2, 4], [1, 3, 5], [2, 6], [1, 5, 7], [2, 4, 6, 8], [3, 5, 9], [4, 8], [5, 7, 9], [6, 8]
	) //大div编号为1的div可以去的位置.比如第一块可以去2，4位置
var d_posXY = new Array(
		[0], [0, 0], [150, 0], [300, 0], [0, 150], [150, 150], [300, 150], [0, 300], [150, 300], [300, 300]
	) //大div可以移动位置的坐标
d[1] = 1;
d[2] = 2;
d[3] = 3;
d[4] = 4;
d[5] = 5;
d[6] = 6;
d[7] = 7;
d[8] = 8;
d[9] = 0;
//按默认位置顺序排好.第9块为空白
function move(id) {
	var i = 1
	for(i = 1; i < 10; ++i) {
		if(d[i] == id)
			break
			//找出小div在大div的位置，位置一致时终止循环
	}
	var target_d = 0
		//声明 小div不能移动属性
	target_d = whereCanTo(i)

	if(target_d != 0) {
		d[i] = 0
		d[target_d] = id
		document.getElementById("d" + id).style.left = d_posXY[target_d][0] + "px"
		document.getElementById("d" + id).style.top = d_posXY[target_d][1] + "px"
	} //如果target_d不为0，则表示可以移动，且target_d就是小DIV要去的大DIV的位置编号
	var finish_flag = true
		//设置游戏完成标识
	for(var k = 1; k < 9; ++k) {
		if(d[k] != k) {
			finish_flag = false;
			break;
			//如果大DIV保存的编号和它本身的编号不同，则表示还不是全部按照顺序排的，那么设置为false，跳出循环，后面不用再判断了，因为只要一个不符，就没完成游戏
		}
	}
	if(finish_flag == true) {
		if(!pause)
			start()
		alert("congratulation")
			//如果游戏完成调用start（）暂停函数弹出alert（）.则如果不完成
	}
}

function whereCanTo(cur_div) {
	// 创建判断可移动的函数办法
	var j = 0
	var move_flag = false
	for(j = 0; j < d_direct[cur_div].length; ++j) {
		if(d[d_direct[cur_div][j]] == 0) {
			move_flag = true
			break
		}
	}
	if(move_flag == true) {
		return d_direct[cur_div][j];
	} else {
		return 0;
	}
}
function timer(){
    time+=1;//一秒钟加一，单位是秒
    var min=parseInt(time/60);//把秒转换为分钟，一分钟60秒，取商就是分钟
    var sec=time%60;//取余就是秒
    document.getElementById("timer").innerHTML=min+"分"+sec+"秒";//然后把时间更新显示出来
}
function start() {
	if(pause) {
		document.getElementById("start").innerHTML = "暂停"
		pause = false
		set_timer = setInterval(timer, 1000)
	} else {
		document.getElementById("start").innerHTML = "开始"
		pause = true
		clearInterval(set_timer)
	}
}

function reset() {
	time = 0
	random_d()
	if(pause)
		start()
}

function random_d() {
	for(var i = 9; i > 1; --i) {
		var to = parseInt(Math.random() * (i - 1) + 1);
		if(d[i] != 0) {
			document.getElementById("d" + d[i]).style.left = d_posXY[to][0] + "px";
			document.getElementById("d" + d[i]).style.top = d_posXY[to][1] + "px";
		}
		if(d[to] != 0) {
			document.getElementById("d" + d[to]).style.left = d_posXY[i][0] + "px";
			document.getElementById("d" + d[to]).style.top = d_posXY[i][1] + "px";
		}
		var tem = d[to];
		d[to] = d[i];
		d[i] = tem;
	}
}
window.onload = function() {
	reset();
}