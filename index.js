$(document).ready(function () {





    if(navigator.geolocation){
        var currentPosition= '';

        navigator.geolocation.getCurrentPosition(function (position) {
            currentPosition=position;



            var lat= currentPosition.coords.latitude;
            var long= currentPosition.coords.longitude;

            var url= 'https://api.apixu.com/v1/current.json?key=2f3a83d9ee3948b4855172659181209&q='
            
            $.getJSON(url + lat+','+  long, function (data) {
                //console.log(data);

                var dataB= JSON.stringify(data);
                var json= JSON.parse(dataB);

                var country= json.location.country;
                var city= json.location.region;
                var condition= json.current.condition.text;
                var tempC= json.current.temp_c;
                var temF= json.current.temp_f;
                var humidity= json.current.humidity;
                var lastUpdate= json.current.last_updated.split(' ')[1];
                var localTime= json.location.localtime.split(' ')[1];


               // console.log(localTime);

                $('#weather').html(country+ ' | '+ city);
                $('#info1').html(condition);
                $('#info2').html("Humidity: "+humidity);
                $('#info5').html("Last update: "+ lastUpdate);
                $('#info6').html("Current time: "+ localTime);
                $('#info3').html(tempC+ '&#8451');

                var _true= true;

                $('#switch').on('click', function () {
                   if(_true){
                       $('#info3').html(temF+ '&#8457');
                       _true=false;
                   }else{
                       $('#info3').html(tempC+ '&#8451');

                       _true=true;
                   }
                })

            })
        })
    }
});