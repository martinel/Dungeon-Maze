$('document').ready(function(){
	
	$('#guerrero').hover(function(){
		
		/*$('#t2').addClass('hidden');
		$('#t3').addClass('hidden');*/
		$('#t1').addClass('focus');
	
	});
	$('#clerigo').hover(function(){
		/*$('#t1').addClass('hidden');
		$('#t3').addClass('hidden');*/
		$('#t2').addClass('focus');
	
	});
	$('#valkiria').hover(function(){
		/*$('#t2').addClass('hidden');
		$('#t1').addClass('hidden');*/
		$('#t3').addClass('focus');
	
	});


});