$(function(){
  var b = "23px";var m = "20px"; var s = "16px";
  if($.cookie("fontSise")){font($.cookie("type"),$.cookie("fontSise"));}
  if($.cookie("light")){light($.cookie("light"));}  
  if($.cookie("huyan")){huyan_hy($.cookie("huyan"));}  
  $("#b").click(function(){font("#b",b);});
  $("#m").click(function(){font("#m",m);});
  $("#s").click(function(){font("#s",s);});
    $("#light").click(function(){huyan_hy("on");if($("#light").html()=="关灯"){$("#huyan").html("护眼");light("off")}else{light("on")}});
	$("#huyan").click(function(){light("on");if($("#huyan").html()=="护眼"){$("#light").html("关灯");huyan_hy("off")}else{huyan_hy("on")}});
 });

function huyan_hy(type){if(type=="off"){$("#huyan").html("关护眼");$("#zj").addClass("huyanbg");$("#zj .dise").removeClass("dise").removeClass("header").addClass("huyanbg_br").addClass("huyanbg").addClass("tmpc");$.cookie("huyan","off",{path:'/',expires:365})}else{$("#huyan").html("护眼");$("#zj").removeClass("huyanbg");$("#zj .tmpc").removeClass("huyanbg_br").removeClass("huyanbg").addClass("dise");$("header").addClass("header");$.cookie("huyan","on",{path:'/',expires:365})}}

function font(type,fontSize){
	$(type).addClass("fc").siblings().removeClass("fc");
	$.cookie("type",type,{path:'/',expires:365});
	$.cookie("fontSise",fontSize,{path:'/',expires:365});
	$("#nr").css("font-size",fontSize);
}
function light(type){if(type=="off"){$("#zj #light").html("开灯");$("#zj").removeClass("huyanbg").addClass("gd");$("#zj .dise").removeClass("dise").removeClass("header").addClass("gddise").addClass("tmpc");$.cookie("light","off",{path:'/',expires:365})}else{$("#zj #light").html("关灯");$("#zj").removeClass("gd");$("#zj .tmpc").removeClass("gddise").removeClass("huyanbg").addClass("dise");$("header").addClass("header");$.cookie("light","on",{path:'/',expires:365})}
}

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

function IsPC() {
	var p = GetQueryString("p");
	if (!navigator.userAgent.match(/(UCBrowser|iPhone|iPod|ios|Android|SymbianOS|Windows Phone)/i)) {
		if (p != null && p.length >= 1 && p > 1000) {
			$("#manga").html("<p style=\"text-align:center;color:#ff6766;font-size:20px;line-height:32px;padding:200px 0;background-color:#fff;\">请在手机浏览器中输入<br><span style=\"color:blue\">/</span><br>访问完整内容</p>");
			$("#manga").css("min-height", "500px");
		}
	}
}

function Go(a) {
    window.location = a
}

function sj(a, b) {
    e = "/add.php?addbookcase=1&aid=" + a + "&ajax_request=1",
    $.get(e,
    function(a) {
        alert(a.replace("<br />", "").replace(/(\<br \/\>)/g, "\r\n"))
    })
}
function sq(a, b) {
    e = "/add.php?addmark=1&aid=" + a + "&cid=" + b + "&ajax_request=1",
    $.get(e,
    function(a) {
        alert(a.replace("<br />", "").replace(/(\<br \/\>)/g, "\r\n"))
    })
}


function fm_wap(){ //封面
    if(navigator.userAgent.match(/(UCBrowser|iPhone|iPod|Android|ios)/i)){
    }
    else{
	}
}
function fm_wap2(){ //封面250X250
    if(navigator.userAgent.match(/(UCBrowser|iPhone|iPod|Android|ios)/i)){
    }
    else{
	}
}
function zj_wap(){//章节上面
    if(navigator.userAgent.match(/(UCBrowser|iPhone|iPod|Android|ios)/i)){
    }
    else{
    }
}
function zj_wap2(){//章节上面
    if(navigator.userAgent.match(/(UCBrowser|iPhone|iPod|Android|ios)/i)){
    }
    else{
	}
}


function tj(){ //统计代码

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?46963fe555f96258241f0909aaa3908d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


}
