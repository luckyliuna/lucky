/**
 * Created by hxsd on 2016/4/13.
 */
$(document).ready(function(){
    //进入登陆界面
    $("#btn_openlogin").click(function(){
        $("#screen").show();
        showDiv();
        $("#login").show();
    });
    //登陆用户文本得到焦点
    $("#login_user").focus(function(){
        $(this).css("background","url('images/login_pic.png')no-repeat 12px -104px")
    });
    //登陆用户输入文本按键被按下，然后按键被松开事件
    $("#login_user").keyup(function(){
        $(".user_close").show();
    });
    //登陆用户文本失去焦点
    $("#login_user").blur(function(){
        $(this).css("background","url('images/login_pic.png')no-repeat 12px -62px");
    });
    //点击用户文本中的关闭符号，内容清空
    $(".user_close").click(function(){
        $("#login_user").val("");
        $(".user_close").hide();
    });
    //登录输入密码 按键被按下，然后按键被松开事件
    $("#login_pass").keyup(function(){
        $(".pass_close").show();
    });
    //登录密码文本得到焦点
    $("#login_pass").focus(function(){
        $(this).css("background","url('images/login_pic.png')no-repeat 12px -180px");
    });
    //登陆密码文本失去焦点
    $("#login_pass").blur(function(){
        $(this).css("background","url('images/login_pic.png')no-repeat 12px -140px");
    });
    //点击密码文本中的关闭符号，内容清空
    $(".pass_close").click(function(){
        $("#login_pass").val("");
        $(".pass_close").hide();
    });
    //扫描切换
    $("#login_main>span").click(function(){
        $("#login_main").hide();
        $("#login_scan").show();

    });
    $("#login_scan>span").click(function(){
        $("#login_scan").hide();
        $("#login_main").show();
    });

    //关闭登陆界面
    $("#login .close").click(function(){
        $("#login").hide();
        $("#screen").hide();
    });
    //标志变量phoneFlag和passFlag
    var phoneFlag=false;
    var passFlag=false;


    //手机text得到焦点事件
    $("#phone").focus(function(){
        $(".reg_phone span").eq(0).show();
        $(".reg_phone span").eq(1).hide();
        $(".reg_phone span").eq(2).hide();
    });
    //手机text失去焦点事件
    $("#phone").blur(function(){
        var regPhone=/^1\d{10}$/;
        if(regPhone.test($("#phone").val())){
            // /手机验证成功
            phoneFlag=true;
            $(".reg_phone span").not($(".reg_phone span").eq(2)).hide();
            $(".reg_phone span").eq(2).css("display","inline-block");
        }else if($.trim($("#phone").val())== ""){
            //手机txt为空是判断
            phoneFlag=false;
            $(".reg_phone span").hide();
        }else{
            //手机验证失败
            phoneFlag=false;
            $(".reg_phone span").not($(".reg_phone span").eq(1)).hide();
            $(".reg_phone span").eq(1).css("display","inline-block");
        }
    });

    //密码text得到焦点事件
    $("#pass").focus(function(){
        $(".pass_error").hide();
        $(".pass_info").show();
        $(".pass_sucess").hide();
    });
    var passLength=false;        //密码长度标志
    var passEmpty=false;        //密码长度标志
    var passSpace=false;        //长度标志
    $("#pass").blur(function(){
        if(notKeyPress){
            $(".pass_info").css("display","none");
            return;
        }
    });
    var notKeyPress = true;
    //密码txt键盘抬起事件
    $("#pass").keyup(function(){
        if($(this).val() == ""||notKeyPress==false){
            $("#pass").blur(function(){
                $(".pass_info").css("display","none");
            });
            return;
        }else{
            $(".pass_info").css("display","block");
        }
        notKeyPress = true;
        var passTxt= $.trim($("#pass").val());

        //判断passTxt长度大于6或小于14
        if(passTxt.length >=6 && passTxt.length<=14){
            passLength=true;
            $(".pass_info p span").eq(0).css({"background":"url('images/pass_03.jpg')no-repeat","color":"#666"});
        }else{
            passLength=false;
            $(".pass_info p span").eq(0).css({"background":"url('images/pass_05.jpg')no-repeat","color":"#fc4343"});
        }

        //判断passTxt是否具有数字、大小写字符、特殊符号
        if(panduan(passTxt)){
            passEmpty=true;
            $(".pass_info p span").eq(1).css({"background":"url('images/pass_03.jpg')no-repeat","color":"#666"});
        }else{
            passEmpty=false;
            $(".pass_info p span").eq(1).css({"background":"url('images/pass_05.jpg')no-repeat","color":"#fc4343"});
        }

        //判断passTxt内是否有空格
        if(/\s/.test(passTxt)){
            passSpace=false;
            $(".pass_info p span").eq(2).css({"background":"url('images/pass_05.jpg')no-repeat","color":"#fc4343"});
        }else{
            passSpace=true;
            bianliang=true;
            $(".pass_info p span").eq(2).css({"background":"url('images/pass_03.jpg')no-repeat","color":"#666"});
        }
        //输入失败则$(#pass)对象失去焦点事件
        if(!passSpace || !passLength){      //失败
            $("#pass").off("blur");
        }else{
            //密码text失去焦点事件
            $("#pass").blur(function(){
                var regPhone=/^[a-z0-9_-].{6,18}$/;
                var passText=$.trim($("#pass").val());
                var regFlag=null;
                if( passText.length>=6 && flag(passText)&& passLength&&passText&&passEmpty){
                    // /手机验证成功
                    passFlag=true;
                    $(".pass_error").hide();
                    $(".pass_info").hide();
                    $(".pass_sucess").show();
                }else if(passText==""){
                    //手机txt为空是判断
                    passFlag=false;
                    $(".reg_pass div").hide();
                }else{//if(!flag(passText))
                    //手机验证失败
                    passFlag=false;
                    $(".pass_error").show();
                    $(".pass_info").hide();
                    $(".pass_sucess").hide();
                }
            });
        }


    });
    //注册按钮
    $("#btn_reg").click(function(e){
        e.preventDefault();
        if(passFlag&&phoneFlag){
            alert("注册成功");
        }
    })

    //登陆拖拽
    $("#login h2").mousedown(function(ev) {
        var isMove = true;
        var abs_x = ev.pageX - $("#login").offset().left;
        var abs_y = ev.pageY - $("#login").offset().top;
        $(document).mousemove(function(ev) {
            if (isMove) {
                var obj = $("#login");
                obj.css({'left':ev.pageX - abs_x , 'top':ev.pageY - abs_y});
            };
        }).mouseup(function(ev) {
            isMove = false;
        });;
    });
    //判断输入字符类型个数函数
    function flag(passTxt){
        var n=0;
        if(/[0-9]/.test(passTxt)){
            n++;
        }
        if(/[a-z]/.test(passTxt)){
            n++;
        }
        if(/[A-Z]/.test(passTxt)){
            n++;
        }
        if(/^\s/.test(passTxt)){
            n++;
        }
        if(n>=2){
            return true;
        }
        return false;
    }
    //判断是否输入数字、大小写字母或特殊符号函数：是返回1；否返回0
    function panduan(passTxt){
        var n=0;
        if(/[0-9]/.test(passTxt)){
            n=1;
        }
        if(/[a-z]/.test(passTxt)){
            n=1;
        }
        if(/[A-Z]/.test(passTxt)){
            n=1;
        }
        if(/^\s/.test(passTxt)){
            n=1;
        }
        return n;
    }
   //登陆居中函数
    function showDiv(){
        var testContTop=($(window).height()-$("#login").height())/2; //计算弹出的框距离页面顶部的距离
        var testContWidth=($(window).width()-$("#login").width())/2; //计算弹出的框距离页面左边的距离
        $("#login").css({
            "top":testContTop,
            "left":testContWidth
        });
    };
});