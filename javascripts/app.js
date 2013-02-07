$(document).ready(function () {
  
  //Form validation
  $('#frmKontakt').validate({
        errorClass: "error",
        errorElement: "small",
        validClass: "valid",
        rules: {
            Nachname: {
                required: true
            },
            Vorname: {
                required: true
            },
            Adresse: {
	            required: true
	        },
	        PLZ: {
		        required: true
	        },
	        Ort: {
		        required: true
	        },
	        Telefon: {
		        required: true
	        },
	        Email: {
		        required: true,
		        email: true
	        },
	        Bemerkungen: {
		        required: false
	        }
        },
        messages: {
            Nachname: {
                required: "Bitte Namen ausfüllen!"
            },
            Vorname: {
                required: "Bitte Vornamen ausfüllen!"
            },
            Adresse: {
                required: "Vorname ist zwingend!"
            },
            PLZ: {
                required: "PLZ ist zwingend!"
            },
            Ort: {
                required: "Ort ist zwingend!"
            },
            Telefon: {
                required: "Telefon ist zwingend!"
            },
            Email: {
                required: "Email ist zwingend!",
                email: "Email ist nicht gültig!"
            },
            Bemerkungen: {
                required: "Bemerkungen ist zwingend!"
            }
        }
    });
    
      $('#frmAnmeldung').validate({
        errorClass: "error",
        errorElement: "small",
        validClass: "valid",
        rules: {
            Nachname: {
                required: true
            },
            Vorname: {
                required: true
            },
            Adresse: {
	            required: true
	        },
	        PLZ: {
		        required: true
	        },
	        Ort: {
		        required: true
	        },
	        Telefon: {
		        required: true
	        },
	        Email: {
		        required: true,
		        email: true
	        },
	        Bemerkungen: {
		        required: false
	        }
        },
        messages: {
            Nachname: {
                required: "Bitte Namen ausfüllen!"
            },
            Vorname: {
                required: "Bitte Vornamen ausfüllen!"
            },
            Adresse: {
                required: "Vorname ist zwingend!"
            },
            PLZ: {
                required: "PLZ ist zwingend!"
            },
            Ort: {
                required: "Ort ist zwingend!"
            },
            Telefon: {
                required: "Telefon ist zwingend!"
            },
            Email: {
                required: "Email ist zwingend!",
                email: "Email ist nicht gültig!"
            },
            Bemerkungen: {
                required: "Bemerkungen ist zwingend!"
            }
        }
    });
    // END Form validation
    
    
    //Mobile Navigation layouts/layout.erb
    $('#mobile-nav').change(function() {
    	//console.log($("#mobile-nav").val());
    	var url = $("#mobile-nav").val();
    	window.location = url;
	});
    //END Mobile Navigation
    
    //Masonry initialisation
    var $container = $('#gallery-container');

    $container.imagesLoaded( function(){
	    $container.masonry({
		    itemSelector : '.gallery-wraper',
		    isAnimated: true,
		    columnWidth: function( containerWidth ) {
			    return containerWidth / 5;
			}
		});
	});
    
    //END Masonry 
    
    
//footable 
  $(function() {
    $('.footable').footable();
  });
//END footable


});
