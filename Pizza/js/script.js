(function(){
	var move = $('.content');
	var main = $('.main');
	var clicker= $('.clickbutton');

	$('.navigator').bind('click', function(){
		move.toggleClass('slide-body');
		main.toggleClass('col-xs-9 col-sm-11 col-md-11');
		main.toggleClass('col-xs-12');
		clicker.toggleClass('glyphicon-remove');
		clicker.toggleClass('glyphicon-align-justify');
		return false;
		
	});

	$('.content').bind('click', function(){
		move.removeClass('slide-body');
		main.addClass('col-xs-12');
		main.removeClass('col-xs-9 col-sm-11 col-md-11');
		clicker.removeClass('glyphicon-remove');
		clicker.addClass('glyphicon-align-justify');
	});

	$('#offers-tile').click(function(e){
		e.preventDefault();
		$('#coming-soon').slideDown().delay(4000);
		$('#coming-soon').slideUp();
		return false;
	});

	$('#offers-nav').click(function(e){
		e.preventDefault();
		$('#specials-alert').slideDown().delay(5000);
		$('#specials-alert').slideUp();
	});

	$('#send-mail').click(function(){
		var name= $('#input-name').val();
		var email= $('input-email').val();
		var message= $('#input-message').val();

		if(name=="" || email=="" || message==""){
			alert('Please Fill Required Feilds');
		}

		else {
			alert('Thank you for your feedback!');
			name.val()="";
			email.val()="";
			message.val()="";
			
		}
	});
})();