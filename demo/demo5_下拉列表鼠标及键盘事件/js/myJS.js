window.onload=function(){
	var box=document.getElementById("divselect"),
	title=box.getElementsByTagName('cite')[0],
	menu=box.getElementsByTagName('ul')[0],
	ali=box.getElementsByTagName('a'),
	index=-1,//定义全局变量，标记当前获得焦点的选项
	flag=false;//定义标记ul是否显示

	//点击选择框，显示ul，并改变箭头方向
	title.onclick=function(event){
		//阻止冒泡
		e=event||window.event;
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancleBubble=true;
		}
		if(!flag){
			menu.style.display='block';
			flag=true;
			title.style.backgroundImage='url(images/tangle3.png)';
		}else{
			menu.style.display='none';
			flag=false;
			title.style.backgroundImage='url(images/tangle4.png)';
		}
		
	}

	//划过、离开列表项，背景颜色改变;点击某一项之后title中显示该项
	for (var i = 0; i < ali.length; i++) {
		ali[i].curIndex=i;

		ali[i].onmouseover=function(){
			//先把所有的背景都清空
			for (var j = 0; j < ali.length; j++) {
				ali[j].style.background="#fff";
			}
			ali[this.curIndex].style.background="#789";
			index=ali[this.curIndex].curIndex;
			// console.log(index);
		}
		ali[i].onmouseout=function(){
			ali[this.curIndex].style.background="#fff";
		}
		ali[i].onclick=function(event){
			//阻止冒泡
			e=event||window.event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
			index=ali[this.curIndex].curIndex;
			menu.style.display="none";
			title.innerHTML=this.innerHTML;
			flag=false;
			title.style.backgroundImage='url(images/tangle4.png)';
		}		
	}

	//上下键选择列表项，背景颜色改变
	document.onkeyup=function(event){
		e=event||window.event;

		check(index);
		//方向箭头,改变背景；回车显示选项
		if(e.keyCode==38){
			ali[index].style.background="#fff";
			index--;			
			check(index);
			ali[index].style.background="#789";
			console.log(index);
		}else if(e.keyCode==40){
			ali[index].style.background="#fff";
			index++;			
			check(index);
			ali[index].style.background="#789";
			console.log(index);
		}else if(e.keyCode==13){
			menu.style.display="none";
			title.innerHTML=ali[index].innerHTML;
			flag=false;
			title.style.backgroundImage='url(images/tangle4.png)';
		}
	}

	//检查当前索引值
	function check(i){
		if(i<0){
			index=ali.length-1;
		}else if(i>ali.length-1){
			index=0;
		}
	}

	//点击页面空白，关闭ul显示
	document.onclick=function(){
		menu.style.display="none";
		flag=false;
		title.style.backgroundImage='url(images/tangle4.png)';
	}
}








