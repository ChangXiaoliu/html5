window.onload = function() {
      var oIco = document.getElementById("ico");
      var aBtn = oIco.getElementsByTagName("a");
      var oSlide = document.getElementById("slide");
      var oUl = oSlide.getElementsByTagName("ul");
      var aLi = oUl[0].getElementsByTagName("li");
      var oBtnLeft = document.getElementById("btnLeft");
      var oBtnRight = document.getElementById("btnRight");
      
      //每次打开页面，首先显示第一张
      var baseWidth = aLi[0].offsetWidth;
      oUl[0].style.width = baseWidth * aLi.length + "px";
      //当前显示图片的位置索引
      var iNow = 0;

      //遍历图片下方的图标数组，为每张图片添加点击事件，并修改iNow值
      for(var i=0;i<aBtn.length;i++) {  
        aBtn[i].index = i;
        aBtn[i].onclick = function() {
          move(this.index);
        }
      }

      //点击左/右侧按钮，并修改iNow值
      oBtnLeft.onclick = function() {
        iNow--;
        move(iNow);
      }
      oBtnRight.onclick = function() {
        iNow++;
        move(iNow);
      }

      // 原代码，不能从当前位置继续轮播
      // var curIndex = 0;
      // var timeInterval = 1000;
      // setInterval(change,timeInterval);
      // function change() {
      //   if(curIndex == aBtn.length) {
      //     curIndex =0;      
      //   } else {
      //     move(curIndex);
      //     curIndex += 1;
      //   }

      // }

      
      //设置定时器，使图片自动轮播
      // var curIndex = 0;
      var timeInterval = 5000;
      setInterval(function(){
        change(iNow);
      },timeInterval);

      function change(curIndex) {

        if(curIndex == aLi.length) {
          curIndex =0;  
        } 
         move(curIndex);   
         curIndex++;       
         iNow=curIndex;
      }

      //移动索引到当前图片，改变当前图片的显示样式和父层的坐外边距 
      function move(index) {
        if(index>aLi.length-1) {
          index = 0;
        }
         if(index<0) {
          index = aLi.length-1;
        }
        for(var n=0;n<aBtn.length;n++) {
          aBtn[n].className = ""; 
        }
        //将当前图片索引赋给iNow
        iNow = index;
        aBtn[index].className = "active";
        oUl[0].style.left = -index * baseWidth + "px";
      }
    }