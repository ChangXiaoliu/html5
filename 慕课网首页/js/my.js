window.onload=function(){
	var images=document.getElementById("imgList").getElementsByTagName("li");
	var dots=document.getElementById("dotList").getElementsByTagName("span");
	var pre=document.getElementById("prev");
	var next=document.getElementById("next");
	var curIndex=0;
	var timer=null;

	//自动播放图片
	timer=setInterval(autoPlay,2000);
	function autoPlay(){
		if(++curIndex>=images.length){
			curIndex=0;
		}
		changPic(curIndex);
	}
	function changPic(index){
		for (var i = 0; i < images.length; i++) {
			images[i].style.display="none";
			dots[i].className="";
		}
		images[index].style.display="block";
		dots[index].className="active";
	}

	//鼠标悬浮时停止播放，离开时继续播放
	for (var i = 0; i < images.length; i++) {
		images[i].onmouseover=function(){
		clearInterval(timer);
		}
		images[i].onmouseout=function(){
			timer=setInterval(autoPlay,2000);
		}
	}

	//鼠标悬浮时停止播放
	for (var i = 0; i < dots.length; i++) {
		dots[i].index=i;
		dots[i].onmouseover=function(){
		clearInterval(timer);
		curIndex=this.index;
		changPic(curIndex);
		}
	}

	//点击上一页，显示上一张图片
	pre.onclick=function(){
		clearInterval(timer);
		if(--curIndex<0)
			curIndex=images.length-1;
		changPic(curIndex);
	}

	// 点击上一页，显示上一张图片
	next.onclick=function(){
		clearInterval(timer);
		if(++curIndex>images.length-1)
			curIndex=0;
		changPic(curIndex);
	}
	var log=document.getElementById("btnLogin");
	var loginReg=document.getElementById("loginReg");
	var closebtn=document.getElementById("close");
	log.onclick=function(){
		//获取页面的高度和宽度
		var sWidth=document.documentElement.scrollWidth;
		var sHeight=document.documentElement.scrollHeight;

		//获取页面的可视区域高度和宽度
		// var wHeight = document.documentElement.clientHeight;
		// var wWidth = document.documentElement.clientWidth;

		var oMask = document.createElement("div");
		oMask.id = "mask";
		oMask.style.height = sHeight + "px";
		oMask.style.width = sWidth + "px";
		oMask.style.zIndex = "80";
		oMask.style.top = "0";
		oMask.style.left = "0";
		oMask.style.position = "fixed";
		oMask.style.backgroundColor="#000";
		oMask.style.opacity = "0.6"; 
		document.body.appendChild(oMask);
		loginReg.style.display="block";
	}
	closebtn.onclick=function(){
		var maskdiv=document.getElementById("mask");
		document.body.removeChild(maskdiv);
		loginReg.style.display="none";
	}
}