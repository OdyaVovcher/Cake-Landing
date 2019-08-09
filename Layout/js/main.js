/* Шапка */
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000);
 })
/* Галерея */
$(document).ready(function() { 
	$("a.fancyimage").fancybox(); 
	});
$(document).ready(function() {
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
});

