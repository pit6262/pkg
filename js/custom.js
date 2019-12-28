
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
		return false;
	});

	$(".close-cookies").on('click',function(){
		$(this).parents('.cookies-block').hide();
		return false;

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


	/* Calc */
	/* ---------------------------------------------- */
	$('.calc-wrap input[type=radio]').each(function(){
		$(this).change(calculate);
	});

	function calculate() {
		var result = 0;
		$('.calc-wrap input[type=radio]:checked').each(function(){
		  result += Number($(this).val());
		});

		$("#result").html(result);
	}


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

	if($('.card-slider').length){
		$('.card-slider').slick({
			fade: true,
			adaptiveHeight: true,
			arrows: false,
			dots: true,
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
			      '<div class="infowindow-title">Адреса:</div>' +
			      '<p>вул. Світлогірська, 74-А м. Кривий Ріг, Дніпропетровська область Україна, 50011</p> '+
			      '<div class="infowindow-title">Контакти:</div>' +
			      '<p>0(67) 825 25 35 (багатоканальний) <br>0(56) 440 25 30  <br>0(56) 405 25 30 (багатоканальний) <br />info@pkg-g.ua <br />sales@pkg-g.ua (відділ продажу)</p> '+
		     	  '<div class="infowindow-title">Графік роботи:</div>' +
			      '<p>Пн – Пт: з 9:00 до 18:00</p> '+
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

    }

    

};