hound.tokenHandler=function(msg) {
    hound.sendDeviceInfo(msg);
};
hound.errorIphone=function(error) {
    hound.errorAlert(JSON.stringify(error));
};
hound.successGCMRegistration= function(){
    };
hound.validateDevice= function(){
    
}    
hound.fakeDevice= function(){
    device = {};
    device.platform="BROWSER";
    device.name="BROWSER";
    device.phonegap="2.4";
    device.version="4.0";
    device.uuid="sdfmapom242ee3dw4r32rfdew";
}
hound.pushRegistration = function(){
    hound.infoLog("Starting push registration");
    if(typeof device != 'undefined'){
        if(window.plugins && window.plugins.pushNotification){
            hound.infoLog("Push notification plugin found");
            var pushNotification = window.plugins.pushNotification;    
            // TODO: Enter your own GCM Sender ID in the register call for Android
            if (device.platform == 'android' || device.platform == 'Android') {
                hound.infoLog("registering android");
                if(localStorage.regId){
                                    
                }else{
                    pushNotification.register(hound.successGCMRegistration, hound.errorIphone,{
                        "senderID":hound.config.senderId,
                        "ecb":"hound.onNotificationGCM"
                    });
                }
            }
            else if(device.platform =='iPhone' || device.platform=='iPad' || device.platform == "IPhone" || device.platform=="IPad" || device.platform=="iOS") {
                hound.infoLog("registering ios");
                pushNotification.register(hound.tokenHandler,hound.errorIphone,{
                    "badge":"true",
                    "sound":"true",
                    "alert":"true",
                    "ecb":"hound.onNotificationAPN"
                });
            }else{
                //alert("device not supported");
                hound.sendDeviceInfo('-');
            }
        }else{
            hound.sendDeviceInfo('-');
        //alert("Push notifications plugin not found");
        }
    }else{
        hound.fakeDevice();
        hound.sendDeviceInfo('-');
    }   
}
hound.onNotificationAPN = function(event) {
    var pushNotification = window.plugins.pushNotification;
    hound.infoAlert(event.titulo, event.alert);
    if(event.actualizar){
        window.location = "index.html";
    }
};
hound.sendDeviceInfo = function(regId){
    var datos = {};
    datos.uuid=device.uuid;
    datos.nombre=device.name;
    datos.plataforma=device.platform;
    datos.versionOS=device.version;
    datos.regId=regId;
    //alert(JSON.stringify(datos));
    $.ajax({
        type : "POST",
        crossDomain: true,
        url : this.config.remote_server
        + this.config.appName +"/dispositivo",
        data : JSON.stringify(datos),
        contentType : "application/json",
        success : function(data) {
            localStorage.setItem("regId",datos.regId);
        },
        error : function(xhr,status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function(){
            hound.infoLog(this.mensajeError+": "+this.retryLimit+" intentos fallidos, operacion abortada intenta mas tarde");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout : 30000,
        mensajeError: "Registro de dispositivo"

    });
}
hound.onNotificationGCM= function(e) {
    switch( e.event )
    {
        case 'registered':
            if ( e.regid.length > 0 )
            {
                // Your GCM push server needs to know the regID before it can push to this device
                // here is where you might want to send it the regID for later use.
                localStorage.setItem("regId", e.regid);
                hound.sendDeviceInfo(e.regid);
            //alert("Registratio completed");
            }
            break;

        case 'message':
            // this is the actual push notification. its format depends on the data model
            // of the intermediary push server which must also be reflected in GCMIntentService.java
            hound.infoAlert(e.payload.titulo, e.message);
            if(e.payload.actualizar){
                window.location = "index.html";
            }
            break;

        case 'error':
            hound.infoLog('GCM error = '+e.msg);
            break;

        default:
            hound.infoLog('An unknown GCM event has occurred');
            break;
    }
}