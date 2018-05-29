var arr = [
	{'url': './images/0.png'},
	{'url': './images/1.png'},
	{'url': './images/2.png'},
	{'url': './images/3.png'},
	{'url': './images/4.png'},
	{'url': './images/5.png'},
	{'url': './images/6.png'},
	{'url': './images/7.png'},
	{'url': './images/8.png'},
	{'url': './images/9.png'},
	{'url': './images/10.png'},
	{'url': './images/11.png'},
	{'url': './images/12.png'},
	{'url': './images/13.png'},
	{'url': './images/14.png'}
];

init();

function init(){
	createLi();
	bindEvent();
}

function createLi(){
	var str = '';
	arr.forEach(function (ele, index){
		str += '<li><img src="'+ ele['url'] +'"/></li>';
	})
	$('.wrapper ul').append(str);
}

function bindEvent(){
	var index;
	//为li赋予等宽
	$('.wrapper li').css('height', $('.wrapper li').width() + 'px');

	$('.wrapper li').on('tap', function (){
		index = $(this).index();
		showImg(index);
	})

	$('.show').on('tap', function (){
		$(this).css('display', 'none');
	}).on('swipeLeft', function (){
		if(index < arr.length - 1){
			index++;
			showImg(index);
		}
	}).on('swipeRight', function (){
		if(index > 0){
			index--;
			showImg(index);
		}
	})
}

function showImg(index){
	var deviceW_H = $(window).width() / $(window).height();
	$('.show').html('');
	var img = new Image();
	img.src = arr[index]['url'];
	$('.show').css('display', 'block').append(img);
	img.onload = function (){
		var imgW_H = $(img).width() / $(img).height();
		if(imgW_H > deviceW_H){
			$(img).css('width', '100%');
		}else{
			$(img).css('height', '100%');
		}
	}
}