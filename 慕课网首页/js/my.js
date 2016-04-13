window.onload=function(){
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