(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['articuloTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "		<img src=\"";
  foundHelper = helpers.baseURL;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.baseURL; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "/articulos/";
  stack1 = depth0.articulo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idArticulo;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "/imagen.png\" style=\"max-width:100%;\"/>\r\n		<p>";
  stack1 = depth0.articulo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.detalle;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p>\r\n		<h2>Precio:$";
  stack1 = depth0.articulo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.precio;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h2>\r\n";
  return buffer;});
templates['cardTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table>\r\n    <tr>\r\n        <td rowspan=\"4\">\r\n            <a href=\"\" data-rel=\"back\" data-role=\"button\" data-icon=\"arrow-l\" data-iconpos=\"notext\"></a>\r\n            <a href=\"\" onclick = \"hound.displayBarcode();\" data-role=\"button\">Codigo</a>\r\n        </td>\r\n        <td>Usuario</td>\r\n        <td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.usuario;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Fecha de Registro</td>\r\n        <td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.fechaRegistro;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Puntos</td>\r\n        <td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.puntos;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Nivel</td>\r\n        <td>";
  stack1 = depth0.userInfo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.nivel;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</td>\r\n    </tr>\r\n</table>";
  return buffer;});
templates['comentariosForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "			<div id=\"erroresComentariosForm\"></div>\r\n<form id=\"comentariosForm\">\r\n				<ul data-role=\"listview\" data-inset=\"true\" id=\"comentariosFormListView\" class=\"ui-listview ui-listview-inset ui-corner-all ui-shadow\">\r\n					<li data-role=\"fieldcontain\" class=\"ui-field-contain ui-body ui-br ui-btn-up-a ui-li ui-li-static ui-body-a ui-corner-top\">\r\n						<label for=\"comentarioNombre\" class=\"ui-input-text\">Nombre:</label>\r\n						<input type=\"text\" name=\"comentarioNombre\" id=\"comentarioNombre\" class=\"required ui-input-text ui-body-a ui-corner-all ui-shadow-inset\"></li>\r\n					<li data-role=\"fieldcontain\" class=\"ui-field-contain ui-body ui-br ui-btn-up-a ui-li ui-li-static ui-body-a\">\r\n						<label for=\"comentarioEmail\" class=\"ui-input-text\">Email:</label>\r\n						<input type=\"text\" name=\"comentarioEmail\" id=\"comentarioEmail\" class=\"required email ui-input-text ui-body-a ui-corner-all ui-shadow-inset\">\r\n						</li>\r\n					<li data-role=\"fieldcontain\" class=\"ui-field-contain ui-body ui-br ui-btn-up-a ui-li ui-li-static ui-body-a\">\r\n						<label for=\"comentarioTelefono\" class=\"ui-input-text\">Telefono:</label>\r\n						<input type=\"text\" name=\"comentarioTelefono\" id=\"comentarioTelefono\" class=\"digits ui-input-text ui-body-a ui-corner-all ui-shadow-inset\" minlength=\"8\" maxlength=\"12\">\r\n					</li>\r\n					<li data-role=\"fieldcontain\" class=\"ui-field-contain ui-body ui-br ui-btn-up-a ui-li ui-li-static ui-body-a ui-corner-bottom\">\r\n					<label for=\"comentarioComentario\" class=\"ui-input-text\">Comentario:</label>\r\n					<textarea name=\"comentarioComentario\" id=\"comentarioComentario\" class=\"required ui-input-text ui-body-a ui-corner-all ui-shadow-inset\"></textarea>\r\n						</li>\r\n					</ul>\r\n					<a href=\"\" data-role=\"button\" onclick=\"hound.enviarComentario();\" data-corners=\"true\" data-shadow=\"true\" data-iconshadow=\"true\" data-wrapperels=\"span\" data-theme=\"a\" class=\"ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all\"><span class=\"ui-btn-inner ui-btn-corner-all\"><span class=\"ui-btn-text\">Enviar</span></span></a>\r\n			</form>";});
templates['encuestaTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, foundHelper;
  buffer += "\r\n			<fieldset data-role=\"controlgroup\" >\r\n			<li data-swatch=\"a\" class=\"ui-li ui-li-divider ui-btn ui-bar-a ui-corner-top\" data-role=\"list-divider\" role=\"\" data-form=\"ui-bar-a\">";
  foundHelper = helpers.pregunta;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pregunta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</li>\r\n			";
  foundHelper = helpers.respuestas;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data}); }
  else { stack1 = depth0.respuestas; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  stack2 = {};
  if (!helpers.respuestas) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</fieldset>\r\n		";
  return buffer;}
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n     		<input type=\"radio\" name=\"pregunta";
  stack1 = depth1.idPregunta;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" id=\"respuesta";
  foundHelper = helpers.idRespuesta;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.idRespuesta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" value=\"";
  foundHelper = helpers.idRespuesta;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.idRespuesta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" checked=\"true\"/>\r\n     		<label for=\"respuesta";
  foundHelper = helpers.idRespuesta;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.idRespuesta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.respuesta;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.respuesta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</label>\r\n			";
  return buffer;}

  buffer += "		";
  foundHelper = helpers.encuesta;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  else { stack1 = depth0.encuesta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  stack2 = {};
  if (!helpers.encuesta) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		<a href=\"\" data-role=\"button\" onclick=\"hound.enviarEncuesta()\">Contestar</a>\r\n";
  return buffer;});
templates['listArticulosTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li><a onclick=\"hound.getArticulo(";
  stack1 = depth0.articulo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idArticulo;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ");\" href=\"\" id=\"articulo";
  stack1 = depth0.articulo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idArticulo;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"><img src=\"";
  foundHelper = helpers.baseURL;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.baseURL; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "articulos/";
  stack1 = depth0.articulo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idArticulo;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "/icono.png\" class=\"ui-li-icon\"/><span>";
  stack1 = depth0.articulo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.nombre;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span><p>";
  stack1 = depth0.articulo;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.descripcion;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p></a></li>";
  return buffer;});
templates['listCategoriasTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "				<li><a onclick=\"hound.getArticulos(";
  stack1 = depth0.categoria;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idCategoria;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ");\" href=\"\" id=\"categoria";
  stack1 = depth0.categoria;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idCategoria;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"><img src=\"";
  foundHelper = helpers.baseURL;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.baseURL; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "categorias/";
  stack1 = depth0.categoria;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idCategoria;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "/icono.png\" class=\"ui-li-icon\"/><span>";
  stack1 = depth0.categoria;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.nombre;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span> <span class=\"ui-li-count\">";
  stack1 = depth0.categoria;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.numeroArticulos;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span></a></li>";
  return buffer;});
templates['listContactosTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "				<li><a href=\"tel:";
  stack1 = depth0.contacto;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.telefono;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">					\r\n						<h3>";
  stack1 = depth0.contacto;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.nombre;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h3>					\r\n                                        <p>\r\n					<span class=\"\">";
  stack1 = depth0.contacto;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.direccion;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\r\n                                        <br/>\r\n					<span class=\"\">";
  stack1 = depth0.contacto;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.email;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\r\n                                        <br/>\r\n					<span class=\"\">";
  stack1 = depth0.contacto;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.telefono;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\r\n                                        <br/>\r\n                                        </p>\r\n                                    </a>\r\n				</li>\r\n";
  return buffer;});
templates['listEncuestasTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "				<li><a onclick=\"hound.getEncuesta(";
  stack1 = depth0.encuesta;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idEncuesta;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ");\" href=\"\" id=\"encuesta";
  stack1 = depth0.encuesta;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idEncuesta;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"><h3>";
  stack1 = depth0.encuesta;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.nombre;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h3><p>";
  stack1 = depth0.encuesta;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.descripcion;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p></a></li>";
  return buffer;});
templates['listPromocionesTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li><a onclick=\"hound.getPromocionOffline(";
  stack1 = depth0.promocion;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idPromocion;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ");\" href=\"\" id=\"promocion";
  stack1 = depth0.promocion;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idPromocion;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"><img src=\"data:image/jpeg;base64,";
  stack1 = depth0.promocion;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.icono;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"ui-li-icon\"/><h3>";
  stack1 = depth0.promocion;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.nombre;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h3><p>";
  stack1 = depth0.promocion;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.descripcion;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p></a></li>";
  return buffer;});
templates['listTiendasTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li  class=\"tienda";
  stack1 = depth0.tienda;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idTienda;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\">\r\n    <a onclick=\"hound.displayTienda(";
  stack1 = depth0.tienda;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.idTienda;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ");\" href=\"\">\r\n        <h3>";
  stack1 = depth0.tienda;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.nombre;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h3><p>";
  stack1 = depth0.tienda;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.direccion;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p> \r\n    </a>\r\n</li>";
  return buffer;});
templates['portadaTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "<div class=\"gridMenuItem\" >\r\n                        <a href=\"\" onclick=\"";
  stack1 = depth0.accion;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + ";\" class=\"ui-link\" data-label=\"";
  stack1 = depth0.label;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\"> \r\n                            <div class=\"gridMenuItemImage\">\r\n                                ";
  stack1 = depth0.localPath;
  stack2 = {};
  stack1 = helpers['if'].call(depth0, stack1, {hash:stack2,inverse:self.programWithDepth(program4, data, depth1),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                            </div>\r\n                            <div class=\"gridMenuItemText\">\r\n                                <span>";
  stack1 = depth0.label;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>                        \r\n                            </div>                        \r\n                        </a>\r\n                    </div>";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                                    <img src=\"";
  stack1 = depth0.localPath;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"ui-li-icon imagenCatalogo\"  />\r\n                                ";
  return buffer;}

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n                                    <img src=\"";
  stack1 = depth2.serverURL;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1);
  stack1 = depth0.rutaImage;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"ui-li-icon imagenCatalogo\"  /> \r\n                                ";
  return buffer;}

  buffer += "<div class=\"gridMenu\" >";
  stack1 = depth0.menuItems;
  stack2 = {};
  stack1 = helpers.each.call(depth0, stack1, {hash:stack2,inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n";
  return buffer;});
templates['promocionTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "		<img src=\"data:image/jpeg;base64,";
  stack1 = depth0.promocion;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.imagen;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "\" style=\"max-width:100%;\"/>\r\n		<p>";
  stack1 = depth0.promocion;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.detalle;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</p>\r\n		<h2>Vigencia: ";
  stack1 = depth0.promocion;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.vigencia;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</h2>\r\n";
  return buffer;});
templates['twitter'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "                <div style=\"text-align: center;\">\r\n                <a class=\"twitter-timeline\"\r\n                   data-widget-id=\"";
  foundHelper = helpers.widgetId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.widgetId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" data-chrome=\"noheader nofooter\">\r\n                </a>                    \r\n                </div>\r\n";
  return buffer;});
})();
