	(function(){
	// nav hide and show while srolling
	document.addEventListener("mousewheel",function(evnet){
		var delta = getWheelDelta(event);
		navScroll(delta);
	},false);

	function getWheelDelta(event){
		event = event || window.event;
		if (event.wheelDelta ) {
			return event.wheelDelta;
		} else {
			return -event.detail * 40;
		}
	}

	function navScroll(delta){
		var nav = document.getElementById('j_nav');
		var originClass = nav.getAttribute('class');
		var timer = null;
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	 
	    if (scroll > 100 && delta > 30 ) {
			nav.style.position = 'fixed';
			nav.style.top = '0';
			
		    if(!timer){
		    	timer = setTimeout(function(){
		    	nav.style=''
		   	    },3000);
		    }
	    } else if(scroll<100){
	    	nav.style = '';
	    	nav.setAttribute('class',originClass);
	    }
	 
	    nav.addEventListener('mouseenter',function(){
	    	clearTimeout(timer);
	    },false);
	    nav.addEventListener('mouseleave',function(){
	    	timer = setTimeout(function(){
		    	nav.style=''
		   	    },3000);
	    },false);
	}

	// sroll to top 
	var toTop_btn = document.querySelector('.btn__toTop');
	toTop_btn.addEventListener('click',toTop,false);

	function toTop(){
	      document.documentElement.scrollTop = 0 ;
	       document.body.scrollTop = 0;
		}

	// zoom in, show large size picture
	var  gallary = document.querySelector('.gallary__list'),
		 g_Items = gallary.getElementsByTagName('img'),
		 zoominBtn = gallary.querySelectorAll('.zoomin'),
		 zoomLayout = document.querySelector('.zoomin__wrapper'),
		 bigImg = document.getElementById('j-largeImg'),
		 index;

	function showBigPic (index) {
		zoomLayout.style.display = 'block';
		document.body.style.overflow = 'hidden';
	    var src = g_Items[index].getAttribute('src');
	    src = src.replace('small','big');
	    bigImg.setAttribute('src',src);
	    }

	for (var i = 0; i < zoominBtn.length; i++) {
		 zoominBtn[i].setAttribute('data-index',i);
		 zoominBtn[i].addEventListener('click',function(){
		   index = this.getAttribute('data-index');
	       return showBigPic(index);
		},false);
	};

	var closeBtn = document.getElementById('j-close-btn');
		
	closeBtn.addEventListener('click',function(){
		zoomLayout.style.display = 'none';
	    document.body.style.overflow = 'auto';
	},false);

	// set skill bars width
	var skills = document.getElementById('j-skills');
	var pos = getOffsetTop(skills);
	pos = pos - skills.offsetHeight/2;

	window.addEventListener('scroll',function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if ( scrollTop >= pos) {
		setSkillBarWidth();
	}
	},false);


	function setSkillBarWidth(){
		var bars = skills.getElementsByClassName('skill__bar_front');
		len = bars.length;
		var widthPercent = skills.getElementsByClassName('skill-percent');

		for (var i = 0; i < bars.length; i++) {
	        var value = widthPercent[i].innerHTML;
			bars[i].style.width = value;
			widthPercent[i].style.left = value; 
		}
	}


	function getOffsetTop (element) {
		var finalOffsetTop = element.offsetTop;
		var op = element.offsetParent;

		while(op !== null) {
	       finalOffsetTop += op.offsetTop;
	       op = op.offsetParent;
		}

		return finalOffsetTop;
	}

    }());