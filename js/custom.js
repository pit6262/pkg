
$(window).on('load', function(){
	$('body').removeClass('loaded');
});

$(function(){

	/* Burger */
	/* ---------------------------------------------- */

	$(".toggle-menu").on('click',function(){
		$(this).toggleClass("open");
		$('.navbar').toggleClass("open");
		$('body').toggleClass('lock')
	});

	function overlay() {
		$('.overlay').on('click',function(){
			$(this).removeClass('is-open');
			$(".lang__button").removeClass("is-active").next().removeClass("is-open");
		});
	}
	overlay();

	function lang() {
		$(".lang__button").on('click',function(){
			$(this).toggleClass("is-active").next().toggleClass("is-open");
			$('.overlay').toggleClass('is-open');
		});
		
	}
	lang();


	/* Tabs */
	/* ---------------------------------------------- */
	$('.tabs a').on('click', function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('is-hidden');
		$(this).parent().siblings().removeClass('is-active');
		var id = $(this).attr('href');
		$(id).removeClass('is-hidden');
		$(this).parent().addClass('is-active');
		return false
	});

	/* Accordion */
	/* ---------------------------------------------- */
	$('.accordion-item').on('click', function(){
		var el = $(this);
		var elNext = $(this).parents('.accordion__head').next();
		$('.accordion-item').not(el).parents('.accordion__head').removeClass('is-active')
		$('.accordion-body').not(elNext).slideUp(200)
		el.parents('.accordion__head').next('.accordion-body').slideToggle(200);
		el.parents('.accordion__head').toggleClass('is-active');
		return false;
	});

	/* Anchor Menu */
	/* ---------------------------------------------- */
	$('.anchor').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
		  scrollTop: $(anchor.attr('href')).offset().top
		}, 600);
		e.preventDefault();

	});
	if($('.fixed-nav').length){
		 
		$('.fixed-nav a').on("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
			  scrollTop: $(anchor.attr('href')).offset().top
			}, 400);
			e.preventDefault();

		});

		jQuery(window).on('scroll load', function(){
			var $sections = $('.b-slide');
		
			$sections.each(function(i,el){
				var top  = $(el).offset().top-30;
				var bottom = top +$(el).height();
				var scroll = $(window).scrollTop();
				var id = $(el).attr('id');

				if( scroll > top && scroll < bottom){
					
				$('.fixed-nav a').parent().removeClass('is-active');
					$('.fixed-nav a[href="#'+id+'"]').parent().addClass('is-active');

				}
			})
			
		});
	
	};

	/* Plugins */
	/* ---------------------------------------------- */

	if($('.products-slider').length){
		$('.products-slider').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1121,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						variableWidth: true,
						slidesToScroll: 1,
						arrows: false,
						dots: true,
					}
				}
			]
		})
	}
});




if($('#map').length){
    function initMap() {
        var myLatLng = {lat: 47.956413, lng: 33.407902};

        var map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			zoom: 18,
			disableDefaultUI: true,
	        styles: [
				    {
				        "featureType": "water",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#e9e9e9"
				            },
				            {
				                "lightness": 17
				            }
				        ]
				    },
				    {
				        "featureType": "landscape",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f5f5f5"
				            },
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 17
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 29
				            },
				            {
				                "weight": 0.2
				            }
				        ]
				    },
				    {
				        "featureType": "road.arterial",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 18
				            }
				        ]
				    },
				    {
				        "featureType": "road.local",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 16
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f5f5f5"
				            },
				            {
				                "lightness": 21
				            }
				        ]
				    },
				    {
				        "featureType": "poi.park",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#dedede"
				            },
				            {
				                "lightness": 21
				            }
				        ]
				    },
				    {
				        "elementType": "labels.text.stroke",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 16
				            }
				        ]
				    },
				    {
				        "elementType": "labels.text.fill",
				        "stylers": [
				            {
				                "saturation": 36
				            },
				            {
				                "color": "#333333"
				            },
				            {
				                "lightness": 40
				            }
				        ]
				    },
				    {
				        "elementType": "labels.icon",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "transit",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f2f2f2"
				            },
				            {
				                "lightness": 19
				            }
				        ]
				    },
				    {
				        "featureType": "administrative",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "color": "#fefefe"
				            },
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "administrative",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "color": "#fefefe"
				            },
				            {
				                "lightness": 17
				            },
				            {
				                "weight": 1.2
				            }
				        ]
				    }
				]
        });

		var widthWindow = $(window).width();
		var contentString = '<div id="content">'+
		     
		     
		      '<div class="infowindow-body">'+
			      '<div class="infowindow-title">Адреса</div>' +
			      '<p>вул. Світлогірська, 74-А <br>м. Кривий Ріг, Україна</p> '+
			      '<div class="infowindow-title">Контакти</div>' +
			      '<p>0(67) 825 25 35 - багатоканальний <br>info@evroeskort.com.ua <br>sales@evroeskort.com.ua - відділ продажу</p> '+
		      '</div>'+
	      '</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			// pixelOffset: new google.maps.Size(340,237)
		}); 

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: ' вул. Світлогірська, 74-А м. Кривий Ріг, Україна ',
       	  icon: 'img/pin.png',

       });



		infowindow.open(map, marker);

	    // google.maps.event.addDomListener(window, "resize", function() {
	       
	    //     google.maps.event.trigger(map, "resize");
	       


	
	   //      if(widthWindow < 991) 
				// map.setCenter({lat: 47.957222, lng: 33.409906})
			
	   //      else if(widthWindow < 767) 
				// map.setCenter({lat: 47.957222, lng: 33.409706})
			
	   //      else if(widthWindow < 580) 
				// map.setCenter({lat: 47.957222, lng: 33.410006})
			
	        
	   //      else (widthWindow > 992) 
				// map.setCenter({lat: 47.957222, lng: 33.409096})
			
	       


	    // });
    }

    

};