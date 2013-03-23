hound.getDevice=function(){
    var plataforma = device.platform.toUpperCase();
    if(plataforma == 'ANDROID'){
        hound.plataforma = hound.dispositivos.ANDROID;
    }else if(plataforma == 'IOS' || plataforma == 'IPHONE' || plataforma == 'IPAD'){
        hound.plataforma = hound.dispositivos.IOS;
    }else if(plataforma == 'BLACKBERRY'){
        hound.plataforma = hound.dispositivos.BLACKBERRY;
    }else{
        hound.plataforma = hound.OTHER;
    }
}
hound.generateMapLink= function(tienda){
    var queryUrl;
    switch(hound.plataforma){
        case hound.dispositivos.ANDROID:
            queryUrl = 'https://maps.google.com/maps?z=14&t=m&q=loc:'+tienda.latitud+'+'+tienda.longitud+'('+tienda.nombre+':'+tienda.direccion+')';    
            break;
        case hound.dispositivos.IOS:
            queryUrl = 'http://maps.apple.com/?z=14&t=m&q=loc:'+tienda.latitud+'+'+tienda.longitud+'('+tienda.nombre+':'+tienda.direccion+')';    
            queryUrl = '';
            break;
        case hound.dispositivos.BLACKBERRY:
            queryUrl = "javascript:blackberry.launch.newMap({'latitude':"+tienda.latitud+", 'longitude':"+tienda.longitud+"}););";
            break;
        case hound.dispositivos.WINDOWSPHONE:
            queryUrl='maps:cp='+tienda.longitud+'~-'+tienda.latitud+'&collection=point.'+tienda.longitud+'_'+tienda.latitud+'_'+tienda.nombre+':'+tienda.direccion;
            break;
        default:
            queryUrl = 'https://maps.google.com/maps?z=14&t=m&q=loc:'+tienda.latitud+'+'+tienda.longitud+'('+tienda.nombre+':'+tienda.direccion+')';    
    }
    return encodeURI(queryUrl);
    
}
