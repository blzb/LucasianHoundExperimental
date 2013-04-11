hound.getDevice=function(){
    if(typeof device != 'undefined'){
        var plataforma = device.platform.toUpperCase();
        if(plataforma == 'ANDROID'){
            hound.plataforma = hound.dispositivos.ANDROID;
        }else if(plataforma == 'IOS' || plataforma == 'IPHONE' || plataforma == 'IPAD'){
            hound.plataforma = hound.dispositivos.IOS;
        }else if(plataforma == 'BLACKBERRY'){
            hound.plataforma = hound.dispositivos.BLACKBERRY;
        }else{
            hound.plataforma = hound.dispositivos.OTHER;
        }
    }else{
        hound.plataforma = hound.dispositivos.OTHER;
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
        case hound.dispositivos.BLACKBERRY:
            var args2 = new blackberry.invoke.MapsArguments(tienda.latitud, tienda.longitud);
            blackberry.invoke.invoke(blackberry.invoke.APP_MAPS, args2);
            break;
        default:
            queryUrl = encodeURI('https://maps.google.com/maps?z=14&t=m&q=loc:'+tienda.latitud+'+'+tienda.longitud+'('+tienda.nombre+':'+tienda.direccion+')');
            window.open(queryUrl);
    }
    return queryUrl;

}
hound.openExternalLink= function(url){
    switch(hound.plataforma){
        case hound.dispositivos.ANDROID:
            window.open(url, '_system');
            break;
        case hound.dispositivos.IOS:
            window.open(url, '_system');
            break;
        case hound.dispositivos.WINDOWSPHONE:
            window.open(url, '_system');
            break;
        case hound.dispositivos.BLACKBERRY:
            var args = new blackberry.invoke.BrowserArguments(url);
            blackberry.invoke.invoke(blackberry.invoke.APP_BROWSER, args);
            break;
        default:
            window.open(url);
    }
}
hound.getTwitter= function(params){
    switch(hound.plataforma){
        case hound.dispositivos.IOS:
            window.open(params.url, '_system');
            break;
        default:
            if($(".contenidoTwitter").html().length==0){
                $(".contenidoTwitter").html(Handlebars.templates.twitter(params));
                !function(d,s,id){
                    var js,fjs=d.getElementsByTagName(s)[0];
                    if(!d.getElementById(id)){
                        js=d.createElement(s);
                        js.id=id;
                        js.src="http://platform.twitter.com/widgets.js";
                        fjs.parentNode.insertBefore(js,fjs);
                    }
                }(document,"script","twitter-wjs");        
            }
            $.mobile.changePage("#Twitter");
    }    
}


