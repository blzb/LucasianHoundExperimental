hound.getClosest=function(latitud, longitud){
    ubicaciones = [];
    for ( var i in hound.tiendas) {
        var item = hound.tiendas[i];    
        hound.tiendas[i].matrixPosition = ubicaciones.length ;
        ubicaciones.push(new google.maps.LatLng(item.latitud, item.longitud));
    }
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
    {
        origins: [new google.maps.LatLng(latitud,longitud)],
        destinations: ubicaciones,
        travelMode: google.maps.TravelMode.DRIVING,
        avoidHighways: false,
        avoidTolls: false
    },
    function (response, status) {
        if(status=="OK"){
            var resultados = response.rows[0].elements;
            var posicionMinima;
            var distanciaMinima=99999999999999999999999;
            for(var i = 0; i<resultados.length; i++){
                console.log(resultados[i].distance.value);
                if(resultados[i].distance.value<distanciaMinima){
                    distanciaMinima=resultados[i].distance.value;
                    posicionMinima=i;
                }                
            }
            console.log("EL MAS PEQUE:"+distanciaMinima+".."+posicionMinima);
            for(var j in hound.tiendas){
                if(hound.tiendas[j].matrixPosition==posicionMinima){
                    hound.closestStore = j;                                
                    $(".tienda-1").show();
                    $(".listListaLocalizador").listview("refresh")
                }
            }
        }
    }
);
}
hound.geolocationSuccess=function(position) {
   hound.getClosest( position.coords.latitude,position.coords.longitude);
}

hound.geolocationError=function(error){
    alert(JSON.stringify(error));
}
