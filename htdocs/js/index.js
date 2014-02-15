$(document).ready(initCarousel);
var bBanners;
var bCount=0;
var bTimeout=5000;
var bActive=0;

function initCarousel()
{
	if($('.carousel-item').length){
		bBanners=$('.carousel-item');
		bCount=$('.carousel-item').length;
	$('.carousel-item:eq(0)').css({left:0});
	bTimer=setTimeout('bannerMove(1)',3000);
	
	$('.carousel').append('<div class="car-left"></div><div href="#" class="car-right"></div>');
		$('.car-left').click(function(event){event.preventDefault(); clearTimeout(bTimer); bannerMove(0);});
		$('.car-right').click(function(event){event.preventDefault(); clearTimeout(bTimer); bannerMove(1);});
	$('.carousel').mouseover(function(){
			$('.car-right').css('visibility','visible');
			$('.car-left').css('visibility','visible');})
			.mouseout(function(){
				$('.car-right').css('visibility','hidden');
				$('.car-left').css('visibility','hidden');});
	}
	
}

function bannerMove(dir){
	clearTimeout(bTimer);
	if(dir){
		var bNext=(bActive<bCount-1)?bActive+1:0;
		$(bBanners[bActive])
			.stop()
			.animate(
				{left:'-1200px'},
				{duration:750,easing:'easeInOutCirc',
				complete:function(){
					$(this).css({left:'1200px'})
					}
					})
		bActive=bNext;
		$(bBanners[bActive])
			.stop()
			.css({left:'1200px'})
			.animate(
				{left:'0px'},
				{duration:750,easing:'easeInOutCirc',
				complete:function(){
					bTimer=setTimeout('bannerMove(1)',bTimeout);
					}
				});
		}else
		{
			bNext=(bActive>0)?bActive-1:bCount-1;
			$(bBanners[bActive])
				.stop()
				.animate(
					{left:'1200px'},
					{duration:750,easing:'easeInOutCirc',
					complete:function(){
						$(this).css({left:'1200px'})
						}
					})
			bActive=bNext;
			$(bBanners[bActive])
				.stop()
				.css({left:'-1200px'})
				.animate(
					{left:'0px'},
					{duration:750,easing:'easeInOutCirc',
					complete:function(){
						bTimer=setTimeout('bannerMove(1)',bTimeout);
						}
					});
		}
}