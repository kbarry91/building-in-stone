function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(53.270962, -9.062691),
        zoom:13,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }