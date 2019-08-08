/* Шапка */
$(document).ready(function(){
 $('.header').height($(window).height());
/* $('.overlay').height($(window).height());*/
})
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000);
 })
/* Галерея */
$(document).ready(function() { 
	$("a.fancyimage").fancybox(); 
	});

