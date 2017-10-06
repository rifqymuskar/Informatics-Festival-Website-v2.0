$(document).ready(function(){
$(".searchnya").hide();
});
$(window).scroll(function(){
	var scroll = window.pageYOffset;
	if(scroll <= 0){
		$(".navbar").css("background-color","transparent");
		$(".navbar-link").css("color","#fff");
		$(".navbar").css("margin-top","25px");
		$(".navbar").css("transition","margin-top 0.5s");
		$(".navbar").css("border-bottom","0px");
		$(".navbar-item").css("color","#fff");
		$(".ebook2").css("border","2px solid #FFf");
		$(".ebook2").css("color","#FFf");
		$(".ah").css("color","#000");		
		$(".navbar-item:hover").css("color","#fff");
		$(".searchnya").hide();

	}else if(scroll >= 50){
		$(".navbar").css("background-color","#fff");
		$(".navbar-link").css("color","#0a0a0a");
		$(".navbar").css("margin-top","0px");
		$(".navbar").css("transition","margin-top 0s");
		$(".navbar-end").css("padding","20px 0px");
		$(".navbar-item").css("color","#0a0a0a");
		$(".ebook2").css("border","2px solid #FF3860");
		$(".ebook2").css("color","#FF3860");
		$(".navbar").css("opacity","0.95");
		$(".searchnya").show();
	}	

});

$(".ha2").hover(function(){
	$(".ha2").css("background-color", "#000");
});



