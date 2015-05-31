
$(document).ready(function(){



	var monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];


   $.getJSON( "events.json", function( data ) {
      var items = [];
      $.each( data.events, function( index, eventObj ) {
      
       	occasion = eventObj.occasion;
       	numInvited = eventObj.invited_count;
        eventYear = eventObj.year;
        eventMonth = monthNames[eventObj.month];
        eventDay = eventObj.day;
        cancelled = !(eventObj.cancelled == null) ? "CANCELLED" : "";
        
  

      items.push( "<li class='note'>\
		<div class='magnet'></div>\
		<span class='day'>"+eventDay+"</span><span class='month'>"+eventMonth+"</span><span class='year'>"+eventYear+"</span>\
		<h3 class='occasion'>" + occasion + "</h3>\
		<div class='invited'><span class='invited_count'>"+numInvited+"</span> invited</div>\
		<span class='cancelled'>"+cancelled+"</span>\
		</li>" 
    	);

        });

    $("section#fridge").html("");
    $( "<ul/>", {
      "class": "note-container",
      html: items.join( "" )
    }).appendTo( "section#fridge" );
  });

        var targetpos = $('#note-container').position(); // note this line
        var scrollpos = targetpos.top -25;
    
       $('html, body').animate({
            scrollTop: scrollpos
        }, 100);


	
});