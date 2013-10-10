document.addEventListener("deviceready", onDeviceReady, false);
Number.prototype.formatMoney = function(c, d, t){
    var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
function onDeviceReady() {
    hound.validateDevice();
    $("#jqueryStyle").html(localStorage.getItem("tema"));	
    hound.getDevice();
    hound.loadApp();
    hound.displayMainMenu();
    hound.validateComentario();
    Handlebars.registerHelper('dateFormat', function(context) {
        var date = new Date(context);
        
        var year = date.getFullYear();
        var month= ("0" + (date.getMonth()+1)).slice(-2);
        var hours = ("0" + date.getHours()).slice(-2);
        var minutes = ("0" + date.getMinutes()).slice(-2);
        var seconds = ("0" + date.getSeconds()).slice(-2);
        var day = date.getDate();
        var months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dec"];
        var converted_date = "";
        converted_date = day+"/"+month +"/"+year +" "+hours+":"+minutes+":"+seconds;
        return converted_date;

    });
    Handlebars.registerHelper('formatMoney', function(number) {
        return number.formatMoney();
    });
};
hound.onResume = function(){
}
hound.refreshApp =function(){
    window.location = "index.html";   
}/*
$(document).bind(
    "pagechange",
    function(e, data) {        
        if (typeof data.toPage === "object") {
            hound.hideModal();
            if (data.toPage.attr("id") === "Comentarios") {
                hound.showModal();
                if (hound.errores) {
                    hound.errores.resetForm();
                }
                $('#comentariosForm').reset();
            } else if (data.toPage.attr("id") === "Catalogo") {
                //$("#contenidoCatalogo").slideDown();
                $(".listCatalogos").listview("refresh");
            } else if (data.toPage.attr("id") === "Contactos") {
                //$("#contenidoContactos").slideDown();
                $(".listContactos").listview("refresh");
            } else if (data.toPage.attr("id") === "Articulos") {
                //$("#contenidoArticulos").slideDown();
                $(".listArticulos").listview("refresh");
                //$("#contenidoArticulo").slideDown();
            } else if (data.toPage.attr("id") === "Articulo") {
                $(".listArticulos").listview("refresh");
                //$("#contenidoArticulo").slideDown();
            } else if (data.toPage.attr("id") === "Encuestas") {
                //$("#listEncuestas").slideDown();
                $(".listEncuestas").listview("refresh");
            } else if (data.toPage.attr("id") === "Encuesta") {
                //$("#contenidoEncuesta").slideDown();
            } else if (data.toPage.attr("id") === "Promociones") {
                $(".listPromociones").listview("refresh");
                //$("#contenidoPromociones").slideDown();
            } else if (data.toPage.attr("id") === "Promocion") {
                //$("#contenidoPromocion").slideDown();
            } else if (data.toPage.attr("id") === "listaLocalizador") {
                //$("#contenidoListaLocalizador").slideDown();
                $(".listListaLocalizador").listview("refresh");
            } else if(data.toPage.attr("id")==="Comentarios"){
                $(".comentariosFormListView").listview("refresh");
            }
            if (data.toPage.attr("id") === "Mapa") {

            } else {
                hound.hideModal();
            }              
        }
    });
 */
/*$(document).bind("pagebeforechange", function(e, data){
    if(data.toPage[0].id){    
        if(data.options.fromPage && data.toPage){
        if(data.options.fromPage.attr("id")!== data.toPage.attr("id")){
            $("#"+data.options.fromPage.attr("id")+"> .ui-content").hide();   
        }
    }
    }
    //
    if($.mobile.activePage){
        //$($.mobile.activePage.children()[1]).fadeOut();
    }    
}); 
$(document).bind("pagebeforeshow", function(e, data){
});
$(document).bind("pageshow", function(e, data){
    $(e.target.children[1]).show();
});*/
