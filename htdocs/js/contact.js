$(document).ready(initialize);
var geocoder;
var map;

function initialize(){
	var address1="cailun road,pudong,shanghai";
	var address2="Zhengxiang,Hengyang,Hunan";
	loadmap(address1);
	var ad=$('.address a');
	$('.address a').click(function(){
		if($(this).hasClass("Off"))
		{
			if($(this).hasClass("HY"))
			{
				loadmap(address2);
				$(ad[0]).removeClass("On") .addClass("Off") .html("Go there");
				$(this).removeClass("Off") .addClass("On") .html("On the map");
			}
			else
			{
				loadmap(address1);
				$(ad[1]).removeClass("On") .addClass("Off") .html("Go there");
				$(this).removeClass("Off") .addClass("On") .html("On the map");
			}
				
		}
	})
/* 	$('.address a').click(function(){
		
	}) */
}

function loadmap(address){
	geocoder=new google.maps.Geocoder();
	/* var myLatLng=new google.maps.LatLng(31.14,121.29); */
	/* var address="cailun road,pudong,shanghai"; */
	if(geocoder){
		geocoder.geocode( { 'address': address}, function(results, status) {
			if(status==google.maps.GeocoderStatus.OK){
			var myLatLng=results[0].geometry.location;
			}
			else
			{
				var myLatLng=new google.maps.LatLng(31.14,121.29);
			}
		var myOptions={
		zoom:10,
		center:myLatLng,
		mapTypeId:google.maps.MapTypeId.ROADMAP
		};
		var map=new google.maps.Map($('.picture')[0],myOptions);
		var marker=new google.maps.Marker({
			map:map,
			position:myLatLng
		});
	})
	}
}

