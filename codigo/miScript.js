$('document').ready(function(){
		$('#t1').hide();
		$('#t2').hide();
		$('#t3').hide();
	$('#heroes img').hover(function(){
		switch(this.id){
			case 'guerrero':
			$('#t1').show();
			break;
			case 'clerigo':
			$('#t2').show();
			break;
			case 'valkiria':
			$('#t3').show();
			break;
		}	
	});
});