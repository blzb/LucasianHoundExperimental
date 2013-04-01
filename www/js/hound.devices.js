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
hound.isAndroid = function (){
    var plataforma = device.platform.toUpperCase();
    if(plataforma == 'ANDROID'){
        return true;
    }else{
        return false;
    }
}
hound.isIOS = function(){
    var plataforma = device.platform.toUpperCase();
    if(plataforma == 'IOS' || plataforma == 'IPHONE' || plataforma == 'IPAD'){
        return true;
    }else{
        return false;
    }
}
hound.generateMapLink= function(tienda){
    var queryUrl;
    switch(hound.plataforma){
        case hound.dispositivos.ANDROID:
            queryUrl = encodeURI('https://maps.google.com/maps?z=14&t=m&q=loc:'+tienda.latitud+'+'+tienda.longitud+'('+tienda.nombre+':'+tienda.direccion+')');    
            window.open(queryUrl, '_system');
            break;
        case hound.dispositivos.IOS:
            queryUrl = encodeURI('http://maps.apple.com/?z=14&t=m&q=loc:'+tienda.latitud+'+'+tienda.longitud+'('+tienda.nombre+':'+tienda.direccion+')');    
            window.open(queryUrl, '_system');
            break;
        case hound.dispositivos.WINDOWSPHONE:
            queryUrl=encodeURI('maps:cp='+tienda.longitud+'~-'+tienda.latitud+'&collection=point.'+tienda.longitud+'_'+tienda.latitud+'_'+tienda.nombre+':'+tienda.direccion);
            window.open(queryUrl, '_system');
            break;
        default:
            queryUrl = encodeURI('https://maps.google.com/maps?z=14&t=m&q=loc:'+tienda.latitud+'+'+tienda.longitud+'('+tienda.nombre+':'+tienda.direccion+')');    
            window.open(queryUrl);
    }
    return queryUrl;
    
}
