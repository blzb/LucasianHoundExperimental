jQuery.fn.reset = function() {
    $(this).each(function() {
        this.reset();
    });
};

var portada;
map = new Object();
$.mobile.defaultPageTransition = "fade";
$.mobile.page.prototype.options.backBtnText = "Atras";
$.mobile.page.prototype.options.addBackBtn = true;

hound = {
    meses : new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
        "Diciembre"),
    config : {},
    updateables : {
        portada: 0,
        tiendas: 0,
        promociones: 0,
        tema: 0,
        contactos: 0
    },
    nuevas_versiones : "",
    repeticion : '',
    portada : {},
    categoriaActual : {},
    errores : {},
    mapInitialized : false,
    categorias : {},
    dispositivos :{
        ANDROID:'ANDROID',
        IOS: 'IOS',
        BLACKBERRY : 'BLACKBERRY',
        WINDOWSPHONE: 'WINDOWSPHONE',
        WINDOWS8: 'WINDOWS8',
        OTHER: 'OTHER'
    },
    plataforma: '',
    validateComentario : function() {
        hound.errores = $("#comentariosForm").validate({
            submitHandler : function(form) {
                hound.enviarComentario();
            },
            messages : {
                comentarioNombre : {
                    required : "Por favor especifica tu nombre"
                },
                comentarioEmail : {
                    required : "Por favor especifica tu email",
                    email : "Por favor introduce un email valido"
                },
                comentarioTelefono : {
                    digits : "Por favor introduce solo numero",
                    minlength : "Por favor introduce 8 digitos como minimo",
                    maxlenght : "Por favor introduce 12 digitos como maximo"
                },
                comentarioComentario : {
                    required : "Por favor escribe un comentario"
                }
            }
        });
    },
    loadApp : function() {
        hound.portada = JSON.parse(localStorage.getItem("portada"));
        hound.nuevas_versiones = JSON.parse(localStorage.getItem("versiones"));
        hound.tiendas = JSON.parse(localStorage.getItem("tiendas"));
    },
    inicializaMapa : function() {

        navigator.geolocation.getCurrentPosition(function(position) {
            hound.currentPosition = new google.maps.LatLng(
                position.coords.latitude, position.coords.longitude);
            directionsService = new google.maps.DirectionsService();

            var myOptions = {
                zoom : 14,
                center : hound.currentPosition,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
                minZoom : 12
            };
            if (!hound.mapInitialized) {
                map = new google.maps.Map(
                    document.getElementById("map_canvas"), myOptions);
                directionsDisplay = new google.maps.DirectionsRenderer({
                    suppressMarkers : false,
                    map : map
                });
            }
            marcadores = new Array();
            var puntos = new Array();
            var ids = new Array();
            for ( var i in hound.tiendas) {
                puntos.push(new google.maps.LatLng(hound.tiendas[i].latitud,
                    hound.tiendas[i].longitud));
                ids.push(hound.tiendas[i].idTienda);
            }

            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                origins : [ hound.currentPosition ],
                destinations : puntos,
                travelMode : google.maps.TravelMode.DRIVING,
                avoidHighways : false,
                avoidTolls : false
            }, callback);

            function callback(response, status) {
                var results = response.rows[0].elements;
                var menor = {
                    id : -1,
                    distancia : 100000000000
                };
                for ( var j = 0; j < results.length; j++) {
                    var element = results[j];
                    if (menor.distancia > element.distance.value) {
                        menor.id = ids[j];
                        menor.distancia = element.distance.value;
                    }
                }
                hound.cercano = menor;
            }
            hound.mapInitialized = true;
        });
        $.mobile.changePage("#opcionesLocalizador");

    }
}
hound.infoLog= function(mensaje){
   // if($("#mensajes").length>0){
   //     $("#mensajes").append(mensaje+"<hr/>");
   // }
    console.log(mensaje);    
    //hound.infoAlert("info", mensaje);
    
};
hound.errorPrint = function(mensaje){
   // $("#mensajes").append('<span style="color:red">'+mensaje+' <br/></span>');
    console.log(mensaje);
    //hound.errorAlert(mensaje);
}
hound.debugLog= function(mensaje){
    if(hound.config.debug){
        hound.infoLog(mensaje);
    }    
};
hound.errorHandler= function(error, params, errorDisplay){
    var display="";	
    switch(error.status){
        case 404:
            display+="recurso no encontrado";
            break;
        case 500:
            display+="error del servidor";
            break;
        case 0:
            switch(error.statusText){
                case "timeout":
                    display+="tiempo agotado";
                    break;
                case "error":
                    display+="error desconocido";
                    break;
            }
            break;              
    }    
    display = params.mensajeError+':'+display+'...reintentando'+params.tryCount;
    params.tryCount++;
    if (params.tryCount <= params.retryLimit) {        
        errorDisplay(JSON.stringify(error)+display);
        $.ajax(params);        
    }else{
        params.retryExceeded();
    }
};

hound.infoAlert = function(titulo, mensaje){
    if(!navigator.notification){
        alert(mensaje);
    }else{
        navigator.notification.alert(
            mensaje,
            function(){
            },
            titulo,
            'OK' 
            );  
        
    }
};
hound.errorAlert = function(mensaje){	
    if(!navigator.notification){
         alert(mensaje);
        hound.hideModal();
        $.mobile.changePage("#menuPrincipal");
    }else{
        navigator.notification.vibrate(500);
        navigator.notification.alert(
            mensaje,
            function(){
                hound.hideModal();
                $.mobile.changePage("#menuPrincipal");
            },
            'Error',
            'OK' 
            );              

    }
};
hound.isDisplayable = function(){
    return (localStorage.portada && localStorage.tiendas
        && localStorage.promociones && localStorage.tema
        && localStorage.contactos );    
}
hound.isLogged = function(){
    if(localStorage.getItem('userInfo')){
        return true;
    }else{
        return false;
    }
}