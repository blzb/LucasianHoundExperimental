hound.updateCompleted = function () {
    if (hound.isDisplayable()) {
        hound.hideModal();
        if (portada) {
            localStorage.setItem("portada", JSON.stringify(portada))
            hound.portada = portada;
            hound.debugLog("LA PORTADA EN EL LOCAL STORAGE::::::::::::::::::::::::::" + JSON.stringify(hound.portada));
        }
        $("#progress-value").width("100%");

        //if(hound.isLogged()){
        window.location = "gridDynamicSplit.html";
        //}else{
        //    $("#notLogged").show();
        //}

    }
    else {
        hound.hideModal();
        $("#botonRecarga").show();
    }
}
hound.updateReady = function () {
    var ok = true;
    var total = 0;
    var completadas = 0;
    for (var key in hound.updateables) {
        total++;
        if (hound.updateables[key] < 1) {
            ok = false;
        } else {
            completadas++;
        }
    }
    var porcentaje = Math.floor((completadas / total) * 100) + "%";
    console.log(porcentaje);
    $("#progress-value").width(porcentaje);
    $("#progress-value").html(porcentaje);
    return ok;
}
hound.itemUpdateCompleted = function (nombre) {
    hound.debugLog("update competed: " + nombre + " " + JSON.stringify(hound.updateables));
    hound.updateables[nombre] = 1;
    hound.verifyUpdatesCompleted()
}
hound.isConnected = function () {
    if (navigator.network) {
        var networkState = navigator.network.connection.type;
        if (networkState == Connection.UNKNOWN || networkState == Connection.NONE) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}
hound.enviarComentario = function (intentos) {
    if ($("#comentariosForm").valid()) {
        $.mobile.showPageLoadingMsg("a", "Descargando Actualizaciones",
            false);
        var comentarioJSON = {};
        comentarioJSON.nombre = $("#comentarioNombre").val();
        comentarioJSON.email = $("#comentarioEmail").val();
        comentarioJSON.telefono = $("#comentarioTelefono").val();
        comentarioJSON.comentario = $("#comentarioComentario").val();
        $.ajax({
            type: "POST",
            url: this.config.remote_server
                + hound.nuevas_versiones.comentarioHref,
            data: JSON.stringify(comentarioJSON),
            contentType: "application/json",
            timeout: 30000,
            success: function (data) {
                hound.infoAlert("Gracias", "Tu comentario ha sido enviado");
                hound.hideModal();
                $.mobile.changePage("#menuPrincipal");
            },
            error: function (xhr, status, error) {
                hound.errorLog("Envio comentario:" + item.idPromocion, xhr);
            }
        });
    }
};
hound.updateApp = function (intentos) {
    hound.infoLog("Obteniendo versiones...");
    for (var key in hound.updateables) {
        hound.updateables[key] = 1;
    }
    $.ajax({
        type: "GET",
        url: this.config.remote_server + this.config.appName
            + "/versiones",
        cache: false,
        dataType: "text",
        success: function (data) {
            hound.infoLog("Versiones obtenidas..");
            hound.nuevas_versiones = JSON.parse(data);
            if (localStorage.getItem("versiones")) {
                var versiones = JSON.parse(localStorage.getItem("versiones"));
                if (versiones.versionContacto != hound.nuevas_versiones.versionContacto) {
                    hound.updateables.contactos = 0;
                    //localStorage.removeItem("contactos");
                    hound.getContactos();
                }
                if (versiones.versionPortada != hound.nuevas_versiones.versionPortada) {
                    hound.updateables.portada = 0;
                    for (var key in hound.updateables) {
                        if (key.indexOf("imagen") > -1) {
                            hound.updateables[key] = 0;
                        }
                    }
                    //localStorage.removeItem("portada");
                    hound.getPortada();
                }
                if (versiones.versionPromociones != hound.nuevas_versiones.versionPromociones) {
                    hound.updateables.promociones = 0;
                    //actualizacion.push("promociones");
                    //localStorage.removeItem("promociones");
                    hound.getPromociones();
                }
                if (versiones.versionTema != hound.nuevas_versiones.versionTema) {
                    hound.updateables.tema = 0;
                    //localStorage.removeItem("tema");
                    hound.getTema();
                }
                if (versiones.versionTiendas != hound.nuevas_versiones.versionTiendas) {
                    hound.updateables.tiendas = 0;
                    //localStorage.removeItem("tiendas");
                    hound.getTiendas();
                }
            } else {
                for (var key in hound.updateables) {
                    hound.updateables[key] = 0;
                }
                hound.getContactos();
                hound.getPortada();
                hound.getPromociones();
                hound.getTema();
                hound.getTiendas();
            }
            if (hound.updateReady()) {
                hound.updateCompleted();
            }
            //hound.repeticion = setInterval("hound.verifyUpdatesCompleted()", 1000);
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.updateCompleted();
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 3000,
        mensajeError: "App update"
    })
};
hound.getContactos = function (intentos) {
    hound.infoLog("Obteniendo nuevos contactos..");
    $.ajax({
        type: "GET",
        url: this.config.remote_server
            + hound.nuevas_versiones.contactosHref,
        cache: false,
        dataType: "text",
        success: function (data) {
            hound.infoLog("Contactos obtenidos...");
            hound.itemUpdateCompleted("contactos");
            localStorage.setItem("contactos", data);

        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.itemUpdateCompleted("contactos");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Contactos "

    });
};
hound.getImagen = function (imagen, url) {
    $.ajax({
        type: "GET",
        url: hound.config.remote_server_files
            + url + "larger.dat",
        cache: false,
        dataType: "text",
        success: function (data) {
            localStorage.setItem(imagen, data);
            hound.itemUpdateCompleted(imagen);
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.itemUpdateCompleted(imagen);
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 5000,
        mensajeError: "Imagen"
    });
}
hound.downloadFile = function (url, fileName, asignee) {
    if (window.requestFileSystem) {
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(hound.config.remote_server_files + url);
        fileTransfer.download(
            uri,
            hound.tmpDirectory.fullPath + "/" + new Date().getTime(),
            function (entry) {
                entry.moveTo(hound.baseDirectory, fileName,
                    function (entry) {
                        hound.debugLog("New Path: " + fileName);
                        asignee.localPath = entry.fullPath;
                        hound.debugLog("asignee: " + asignee);
                        hound.itemUpdateCompleted(fileName);
                    }
                    ,
                    function (error) {
                        hound.infoLog("Error al descargar a temporal" + error.code);
                        hound.itemUpdateCompleted(fileName);
                    }
                );
            },
            function (error) {
                hound.itemUpdateCompleted(fileName);
            }
        );
    } else {
        hound.itemUpdateCompleted(fileName);
    }
}
hound.getPortada = function (intentos) {
    hound.infoLog("Obteniendo menu principal..");
    $.ajax({
        type: "GET",
        url: this.config.remote_server
            + hound.nuevas_versiones.portadaHref,
        cache: false,
        dataType: "text",
        success: function (data) {
            localStorage.setItem("portada", data);
            hound.itemUpdateCompleted("portada");
            hound.infoLog("Menu principal obtenido..");
            portada = JSON.parse(data);
            /*
             for(var nombre in portada){
             if(nombre.indexOf("image")!=-1){
             hound.getImagen(nombre, portada[nombre]);
             }
             }
             */
            hound.debugLog("INICIANDO DESCARGA DE IMAGENES");
            for (var i = 0; i < portada.menuItems.length; i++) {
                hound.updateables[portada.menuItems[i].id] = 0;
                hound.downloadFile(portada.menuItems[i].rutaImage, portada.menuItems[i].id, portada.menuItems[i]);
            }

        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.itemUpdateCompleted("portada");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Menu Inicial"
    });
};
hound.getPromociones = function (intentos) {
    hound.infoLog("Obteniendo promociones..");
    $.ajax({
        type: "GET",
        url: this.config.remote_server
            + hound.nuevas_versiones.promocionesHref,
        cache: false,
        dataType: "text",
        success: function (data) {
            hound.infoLog("Promociones obtenidas..");
            hound.promociones = JSON.parse(data);//igual quitar esta linea

            hound.promociones = hound.inicializarBanderaVisto(hound.promociones);

            for (var i in hound.promociones) {
                var item = hound.promociones[i];
                // item.visto = 0;//TODO Validar que no exista la promocion en el localstorage
                hound.infoLog("Obteniendo promocion " + item.idPromocion + " ..");
                $.ajax({
                    type: "GET",
                    async: false,
                    url: hound.config.remote_server_files + "promociones/" + item.idPromocion + "/imagen.dat",
                    cache: false,
                    dataType: "text",
                    success: function (data) {
                        hound.infoLog("Imagen promocion " + item.idPromocion);
                        item.imagen = data;
                    },
                    error: function (xhr, status, error) {
                        hound.errorHandler(xhr, this, hound.errorPrint);
                    },
                    retryExceeded: function () {
                    },
                    tryCount: 0,
                    retryLimit: 4,
                    timeout: 30000,
                    mensajeError: "Imagen Promocion"
                });
                $.ajax({
                    type: "GET",
                    async: false,
                    url: hound.config.remote_server_files + "promociones/" + item.idPromocion + "/icono.dat",
                    cache: false,
                    dataType: "text",
                    success: function (data) {
                        hound.infoLog("Icono promocion " + item.idPromocion);
                        item.icono = data;
                    },
                    error: function (xhr, status, error) {
                        hound.errorHandler(xhr, this, hound.errorPrint);
                    },
                    retryExceeded: function () {
                    },
                    tryCount: 0,
                    retryLimit: 4,
                    timeout: 30000,
                    mensajeError: "Icono Promocion"
                });
                hound.promociones[i] = item;
            }
            localStorage.setItem("promociones", JSON.stringify(hound.promociones));
            hound.itemUpdateCompleted("promociones");
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.itemUpdateCompleted("promociones");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Promociones"
    });
};
hound.getTema = function (intentos) {
    hound.infoLog("Obteniendo tema..");
    $
        .ajax({
            type: "GET",
            url: this.config.remote_server_files
                + hound.nuevas_versiones.temaHref,
            cache: false,
            dataType: "text",
            success: function (data) {
                localStorage.setItem("tema", data);
                hound.itemUpdateCompleted("tema");
                hound.infoLog("Tema obtenido..");
            },
            error: function (xhr, status, error) {
                hound.errorHandler(xhr, this, hound.errorPrint);
            },
            retryExceeded: function () {
                hound.itemUpdateCompleted("tema");
            },
            tryCount: 0,
            retryLimit: 4,
            timeout: 30000,
            mensajeError: "Tema"
        });
};
hound.getTiendas = function (intentos) {
    hound.infoLog("Obteniendo tiendas..");
    $.ajax({
        type: "GET",
        url: this.config.remote_server
            + hound.nuevas_versiones.tiendasHref,
        cache: false,
        dataType: "text",
        success: function (data) {
            localStorage.setItem("tiendas", data);
            hound.itemUpdateCompleted("tiendas");
            hound.infoLog("Tiendas obtenidas..");
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.itemUpdateCompleted("tiendas");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Tiendas"
    });
};
hound.getCategorias = function (elemento) {
    hound.showModal();
    alog = elemento;
    $(".tituloCatalogo").html($(elemento).data("label"));
    //$("#contenidoCatalogo").hide();
    $.ajax({
        type: "GET",
        url: this.config.remote_server
            + hound.nuevas_versiones.categoriasHref,
        cache: false,
        dataType: "text",
        success: function (data) {
            hound.categorias = JSON.parse(data);
            hound.displayCategorias();
            $.mobile.changePage("#Catalogo");
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.errorAlert(this.mensajeError + ": " + this.retryLimit + " intentos fallidos, operacion abortada intenta mas tarde");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Categorias"
    });
};
hound.getArticulos = function (idCategoria) {
    hound.showModal();
    //$("#contenidoArticulos").hide();
    $(".tituloArticulos").html(hound.categorias[idCategoria].nombre);
    $.ajax({
        type: "GET",
        url: this.config.remote_server
            + hound.categorias[idCategoria].articulosHref,
        cache: false,
        dataType: "text",
        success: function (data) {
            hound.articulos = JSON.parse(data);
            hound.displayArticulos();
            hound.hideModal();
            $.mobile.changePage("#Articulos");
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.errorAlert(this.mensajeError + ": " + this.retryLimit + " intentos fallidos, operacion abortada intenta mas tarde");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Articulos"
    });
};
hound.getArticulo = function (idArticulo) {
    hound.showModal();
    //$("#contenidoArticulo").hide();
    $.ajax({
        type: "GET",
        url: this.config.remote_server
            + hound.articulos[idArticulo].href,
        cache: false,
        dataType: "text",
        success: function (data) {
            hound.articulo = JSON.parse(data);
            hound.displayArticulo();
            hound.hideModal();
            $.mobile.changePage("#Articulo");
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.errorAlert(this.mensajeError + ": " + this.retryLimit + " intentos fallidos, operacion abortada intenta mas tarde");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Articulo " + idArticulo
    });
};
hound.getPromocionesOffline = function (elemento) {
    hound.showModal();
    hound.infoLog("en hound.getPromocionesOffline...");
    //$("#contenidoPromociones").hide();	
    $(".tituloPromociones").html($(elemento).data("label"));
    hound.promociones = JSON.parse(localStorage.getItem("promociones"));
    hound.displayPromociones();
    hound.hideModal();
    $.mobile.changePage("#Promociones");
};
hound.getPromocionOffline = function (idPromocion) {
    hound.showModal();
    //$("#contenidoPromocion").hide();
    hound.promociones = JSON.parse(localStorage.getItem("promociones"));
    hound.displayPromociones();//Para actualizar la vista y quitar el asterisco de Promocion no Vista.
    hound.promocion = hound.promociones[idPromocion];
    hound.cambiarBanderaVisto(idPromocion);//Aqui se cambia la bandera a 1 (visto)
    hound.displayPromocion();
    hound.hideModal();
    $.mobile.changePage("#Promocion");
};
hound.getEncuestas = function (elemento) {
    $(".tituloEncuestas").html($(elemento).data("label"));
    hound.showModal();
    //$("#listEncuestas").hide();
    $.ajax({
        type: "GET",
        url: this.config.remote_server
            + hound.nuevas_versiones.encuestasHref,
        cache: false,
        dataType: "text",
        success: function (data) {
            hound.encuestas = JSON.parse(data);
            hound.displayEncuestas();
            hound.hideModal();
            $.mobile.changePage("#Encuestas");
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.errorAlert(this.mensajeError + ": " + this.retryLimit + " intentos fallidos, operacion abortada intenta mas tarde");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Encuestas"

    });
};
hound.getEncuesta = function (idEncuesta) {
    hound.showModal();
    //$("#contenidoEncuesta").hide();
    $.ajax({
        type: "GET",
        url: this.config.remote_server
            + hound.encuestas[idEncuesta].preguntasHref,
        cache: false,
        dataType: "text",
        success: function (data) {
            hound.preguntas = JSON.parse(data);
            hound.encuesta = hound.encuestas[idEncuesta];
            $("#tituloEncuesta").html(hound.encuestas[idEncuesta].nombre);
            hound.displayEncuesta();
            hound.hideModal();
            $.mobile.changePage("#Encuesta");
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.errorAlert(this.mensajeError + ": " + this.retryLimit + " intentos fallidos, operacion abortada intenta mas tarde");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Encuesta " + idEncuesta

    });
};
hound.verifyUpdatesCompleted = function () {
    if (hound.updateReady()) {
        clearInterval(hound.repeticion);
        localStorage.setItem("versiones", JSON
            .stringify(hound.nuevas_versiones));
        this.updateCompleted();
    }
};
hound.enviarEncuesta = function () {
    var encuestaJSON = {};
    var seleccionadas = $("input[name*=pregunta]:checked");
    for (var i = 0; i < seleccionadas.length; i++) {
        encuestaJSON[seleccionadas[i].name.replace("pregunta", "")] = seleccionadas[i].value;
    }
    $.ajax({
        type: "POST",
        url: this.config.remote_server
            + hound.encuesta.postHref,
        data: JSON.stringify(encuestaJSON),
        contentType: "application/json",
        success: function (data) {
            hound.infoAlert("Gracias", "Hemos recibido tus respuestas");
            hound.hideModal();
            $.mobile.changePage("#menuPrincipal");
        },
        error: function (xhr, status, error) {
            hound.errorHandler(xhr, this, hound.errorPrint);
        },
        retryExceeded: function () {
            hound.errorAlert(this.mensajeError + ": " + this.retryLimit + " intentos fallidos, operacion abortada intenta mas tarde");
        },
        tryCount: 0,
        retryLimit: 4,
        timeout: 30000,
        mensajeError: "Enviar encuesta"

    });
}
hound.getContactosOffLine = function (elemento) {
    $(".tituloContactos").html($(elemento).data("label"));
    hound.showModal();
    //$("#contenidoContactos").hide();		
    hound.contactos = JSON.parse(localStorage.getItem("contactos"));
    hound.displayContactos();
    hound.hideModal();
    $.mobile.changePage("#Contactos");
}

hound.loginUser = function () {
    console.log("login User");
    if ($("#loginForm").valid()) {

        var loginJSON = {};
        loginJSON.email = $("#emailLogin").val();
        loginJSON.password = $("#passwordLogin").val();
        loginJSON.dispositivoJSON = {'uuid': device.uuid, 'nombre': device.name, 'plataforma': device.platform, 'versionOS': device.version};
        console.log(JSON.stringify(loginJSON));
        $.mobile.showPageLoadingMsg("a", "Descargando Actualizaciones",
            false);
        $.ajax({

            type: "POST",
            url: hound.config.remote_server
                + hound.config.appName + "/login",
            data: JSON.stringify(loginJSON),
            contentType: "application/json",
            timeout: 30000,
            success: function (data) {
                if (data.usuario) {
                    localStorage.setItem('userInfo', JSON.stringify(data));
                    $('.ui-dialog').dialog('close');
                } else {

                    hound.errorAlert("Login incorrecto");
                }
            },
            error: function (xhr, status, error) {
                hound.errorHandler(xhr, this, hound.errorPrint);
            },
            retryExceeded: function () {
                hound.errorAlert(this.mensajeError + ": " + this.retryLimit + " intentos fallidos, operacion abortada intenta mas tarde");
            },
            tryCount: 0,
            retryLimit: 4,
            timeout: 30000,
            mensajeError: "Error de login"
        });
    }
}
hound.registerUser = function () {
    console.log("register User");
    if ($("#registroForm").valid()) {
        if ($("#passwordRegistro").val() == $("#confirmacionRegistro").val()) {
            var registroJSON = {};
            registroJSON.email = $("#emailRegistro").val();
            registroJSON.password = $("#passwordRegistro").val();
            registroJSON.nombreCompleto = $("#nombreRegistro").val();
            registroJSON.sexo = $("input:radio[name=sexo]:checked").val();
            registroJSON.nacimiento = $("#nacimiento").val();
            registroJSON.cp = $("#cp").val();
            registroJSON.dispositivoJSON = {'uuid': device.uuid, 'nombre': device.name, 'plataforma': device.platform, 'versionOS': device.version};

            $.mobile.showPageLoadingMsg("a", "Descargando Actualizaciones",

                false);
            $.ajax({

                type: "POST",
                url: hound.config.remote_server
                    + hound.config.appName + "/usuario",
                data: JSON.stringify(registroJSON),
                contentType: "application/json",
                timeout: 30000,
                success: function (data) {
                    localStorage.setItem('userInfo', JSON.stringify(data));
                    $('.ui-dialog').dialog('close')

                },
                error: function (xhr, status, error) {
                    hound.errorHandler(xhr, this, hound.errorPrint);
                },
                retryExceeded: function () {
                    hound.errorAlert(this.mensajeError + ": " + this.retryLimit + " intentos fallidos, operacion abortada intenta mas tarde");
                },
                tryCount: 0,
                retryLimit: 4,
                timeout: 30000,
                mensajeError: "Error de registro"
            });
        } else {
            hound.errorAlert("La confirmacion no es igual");
        }
    }
}


/**
 * Cambia la variable visto del objeto promocion a 1, lo cual
 * quiere decir que la promocion ha sido vista por el usuario.
 * @param idPromocion el identificador de la promocion que se visualizo/abrio el usuario.
 */
hound.cambiarBanderaVisto = function (idPromocion) {
    var promociones = JSON.parse(localStorage.getItem("promociones"));
    var promocion = promociones[idPromocion]
    promocion.visto = 1;
    hound.infoLog("En cambiarBanderaVisto: " + promocion.visto);
    promociones[idPromocion] = promocion;
    localStorage.setItem("promociones", JSON.stringify(promociones));
}

/**
 *
 * @param listaPromocionesServer Las promociones que vienen del servidor. Algunas de estas
 * promociones pudieran ya estar almacenadas en el localStrore del dispositivo.
 */
hound.inicializarBanderaVisto = function (listaPromocionesServer) {
    
    if (localStorage.getItem("promociones")== null) {//para el caso del que la lista de promociones del localStorage este vacia.
        hound.infoLog("chin! el localStore esta vacio, jejee");
        for (var i in listaPromocionesServer) {
            var item = listaPromocionesServer[i];
            item.visto = 0;
            listaPromocionesServer[i] = item;
        }
    } else if (localStorage.getItem("promociones") != null) {
        var promociones = JSON.parse(localStorage.getItem("promociones"));
        hound.infoLog("El localStrore SI tiene elementos....");
        for (var i in listaPromocionesServer) {
            var item = listaPromocionesServer[i];
            var promocion = promociones[item.idPromocion];
            if (promocion == null) {
                hound.infoLog("Nueva promocion: " + item.id + item.idPromocion);
                item.visto = 0;
                listaPromocionesServer[i] = item;
            } else {
                hound.infoLog("Promocion existente: " + item.idPromocion);
                hound.infoLog("Promocion existente visto?: " + promocion.visto);
                item.visto = promocion.visto;
                listaPromocionesServer[i] = item;
            }
        }
    }
    return listaPromocionesServer;
}