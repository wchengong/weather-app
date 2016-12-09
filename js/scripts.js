// My Scripts


//spokane
$.simpleWeather({
    location: '99203',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.spokane .temp').text(weather.temp);
      $('.spokane .city').text(weather.city);
      $('.spokane img').attr('src', weather.image);
      $('.spokane .title').text(weather.title);
  
      //If this condition show this icon 
        if ( 26 >= weather.code && 30 <= weather.code ){
            $('.spokane .wi').addClass('wi-day-cloudy');
        
        }
        
        
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>NO Weather!</p>');
    }
  
  });


//seattle
$.simpleWeather({
    location: '98105',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.seattle .temp').text(weather.temp);
      $('.seattle .city').text(weather.city);
      $('.seattle img').attr('src', weather.image);
      $('.seattle .title').text(weather.title);
   
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>NO Weather!</p>');
    }
  
  });


// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});


// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo img').attr('src', weather.image);
      $('.geo .title').text(weather.title);
     
        
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};
