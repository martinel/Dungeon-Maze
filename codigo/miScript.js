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

	var orco = $('#orco1');
	var orco2 = $('#orco2');
	var orco3 = $('#orco3');
	var goblin = $('#goblin1');
	var goblin2 = $('#goblin2');
	var goblin3 = $('#goblin3');
	var goblin4 = $('#goblin4');

	
   function right(personaje){
	var x = getDimensions(personaje).x -22;
	if(x  < 730){
	x += 25
    personaje.style.left = String(x)+"px";
    return false;
	}
  }
  
  function down(personaje){
	var y = getDimensions(personaje).y -22;
	if(y > 16)
	{
	y -= 25;
    personaje.style.top = String(y) + "px";
    return false;
	}	
  }
  
  function left(personaje){
	var x = getDimensions(personaje).x -22;
	if(x >16){
     x -= 25;
	personaje.style.left = String(x) + "px";
   
    return false;  
	}
  }
  
  function up(personaje){
   var y = getDimensions(personaje).y -22;
   if(y <409){
   y += 25;
    personaje.style.top = String(y) + "px";
   
    return false;  }
  }
  
  
function aleatorio(inferior,superior){
		
		numPosibilidades = superior - inferior
		aleat = Math.random() * numPosibilidades
		return Math.round(parseInt(inferior) + aleat)
}
	
function movimientoDeEnemigo(enemigo){
var random = aleatorio(1,4);

switch(random){
	case 1: up(enemigo);
	break;
	
	case 2: down(enemigo);
	break;
	
	case 3: right(enemigo);
	break;
	
	case 4: left(enemigo);
	break;
}
}

 getDimensions = function(oElement) {
    var x, y, w, h;
    x = y = w = h = 0;
    if (document.getBoxObjectFor) { // Mozilla
      var oBox = document.getBoxObjectFor(oElement);
      x = oBox.x-1;
      w = oBox.width;
      y = oBox.y-1;
      h = oBox.height;
    }
    else if (oElement.getBoundingClientRect) { // IE
      var oRect = oElement.getBoundingClientRect();
      x = oRect.left-2;
      w = oElement.clientWidth;
      y = oRect.top-2;
      h = oElement.clientHeight;
    }
    return {x: x, y: y, w: w, h: h};
  }

	
	
	
