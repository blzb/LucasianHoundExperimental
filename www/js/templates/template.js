(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['articuloTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style=\"text-align: center;\">\n<img src=\"";
  if (stack1 = helpers.baseURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.baseURL; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/articulos/"
    + escapeExpression(((stack1 = ((stack1 = depth0.articulo),stack1 == null || stack1 === false ? stack1 : stack1.idArticulo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/imagen.png\" style=\"max-width:100%;\"/>\n		<p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.articulo),stack1 == null || stack1 === false ? stack1 : stack1.detalle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n		<h2>Precio:$"
    + escapeExpression(((stack1 = ((stack1 = depth0.articulo),stack1 == null || stack1 === false ? stack1 : stack1.precio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n</div>\n";
  return buffer;
  });
templates['cardTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table>\n    <tr>\n        <td rowspan=\"4\">\n            <a href=\"\" data-rel=\"back\" data-role=\"button\" data-icon=\"arrow-l\" data-iconpos=\"notext\"></a>\n            <a href=\"\" onclick = \"hound.displayBarcode();\" data-role=\"button\" data-inline=\"true\">Codigo</a>\n        </td>\n        <td>Usuario</td>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.userInfo),stack1 == null || stack1 === false ? stack1 : stack1.usuario)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n    <tr>\n        <td>Fecha de Registro</td>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.userInfo),stack1 == null || stack1 === false ? stack1 : stack1.fechaRegistro)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n    <tr>\n        <td>Puntos</td>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.userInfo),stack1 == null || stack1 === false ? stack1 : stack1.puntos)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n    <tr>\n        <td>Nivel</td>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.userInfo),stack1 == null || stack1 === false ? stack1 : stack1.nivel)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n</table>";
  return buffer;
  });
templates['comentariosForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "			<div id=\"erroresComentariosForm\"></div>\n<form id=\"comentariosForm\">\n				<ul data-role=\"listview\" data-inset=\"true\" id=\"comentariosFormListView\" class=\"ui-listview ui-listview-inset ui-corner-all ui-shadow\">\n					<li data-role=\"fieldcontain\" class=\"ui-field-contain ui-body ui-br ui-btn-up-a ui-li ui-li-static ui-body-a ui-corner-top\">\n						<label for=\"comentarioNombre\" class=\"ui-input-text\">Nombre:</label>\n						<input type=\"text\" name=\"comentarioNombre\" id=\"comentarioNombre\" class=\"required ui-input-text ui-body-a ui-corner-all ui-shadow-inset\"></li>\n					<li data-role=\"fieldcontain\" class=\"ui-field-contain ui-body ui-br ui-btn-up-a ui-li ui-li-static ui-body-a\">\n						<label for=\"comentarioEmail\" class=\"ui-input-text\">Email:</label>\n						<input type=\"text\" name=\"comentarioEmail\" id=\"comentarioEmail\" class=\"required email ui-input-text ui-body-a ui-corner-all ui-shadow-inset\">\n						</li>\n					<li data-role=\"fieldcontain\" class=\"ui-field-contain ui-body ui-br ui-btn-up-a ui-li ui-li-static ui-body-a\">\n						<label for=\"comentarioTelefono\" class=\"ui-input-text\">Telefono:</label>\n						<input type=\"text\" name=\"comentarioTelefono\" id=\"comentarioTelefono\" class=\"digits ui-input-text ui-body-a ui-corner-all ui-shadow-inset\" minlength=\"8\" maxlength=\"12\">\n					</li>\n					<li data-role=\"fieldcontain\" class=\"ui-field-contain ui-body ui-br ui-btn-up-a ui-li ui-li-static ui-body-a ui-corner-bottom\">\n					<label for=\"comentarioComentario\" class=\"ui-input-text\">Comentario:</label>\n					<textarea name=\"comentarioComentario\" id=\"comentarioComentario\" class=\"required ui-input-text ui-body-a ui-corner-all ui-shadow-inset\"></textarea>\n						</li>\n					</ul>\n					<a href=\"\" data-role=\"button\" onclick=\"hound.enviarComentario();\" data-corners=\"true\" data-shadow=\"true\" data-iconshadow=\"true\" data-wrapperels=\"span\" data-theme=\"a\" class=\"ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all\"><span class=\"ui-btn-inner ui-btn-corner-all\"><span class=\"ui-btn-text\">Enviar</span></span></a>\n			</form>";
  });
templates['encuestaTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<fieldset data-role=\"controlgroup\" >\n			<li data-swatch=\"a\" class=\"ui-li ui-li-divider ui-btn ui-bar-a ui-corner-top\" data-role=\"list-divider\" role=\"\" data-form=\"ui-bar-a\">";
  if (stack1 = helpers.pregunta) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pregunta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n			";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data};
  if (stack1 = helpers.respuestas) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.respuestas; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.respuestas) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</fieldset>\n		";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n     		<input type=\"radio\" name=\"pregunta"
    + escapeExpression(((stack1 = depth1.idPregunta),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"respuesta";
  if (stack2 = helpers.idRespuesta) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.idRespuesta; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" value=\"";
  if (stack2 = helpers.idRespuesta) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.idRespuesta; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" checked=\"true\"/>\n     		<label for=\"respuesta";
  if (stack2 = helpers.idRespuesta) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.idRespuesta; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.respuesta) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.respuesta; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</label>\n			";
  return buffer;
  }

  buffer += "		";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.encuesta) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.encuesta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.encuesta) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<a href=\"\" data-role=\"button\" onclick=\"hound.enviarEncuesta()\">Contestar</a>\n";
  return buffer;
  });
templates['listArticulosTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li><a onclick=\"hound.getArticulo("
    + escapeExpression(((stack1 = ((stack1 = depth0.articulo),stack1 == null || stack1 === false ? stack1 : stack1.idArticulo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\" href=\"\" id=\"articulo"
    + escapeExpression(((stack1 = ((stack1 = depth0.articulo),stack1 == null || stack1 === false ? stack1 : stack1.idArticulo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img src=\"";
  if (stack2 = helpers.baseURL) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.baseURL; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "articulos/"
    + escapeExpression(((stack1 = ((stack1 = depth0.articulo),stack1 == null || stack1 === false ? stack1 : stack1.idArticulo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/icono.png\" class=\"ui-li-icon\"/><span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.articulo),stack1 == null || stack1 === false ? stack1 : stack1.nombre)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.articulo),stack1 == null || stack1 === false ? stack1 : stack1.descripcion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p></a></li>";
  return buffer;
  });
templates['listCategoriasTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "				<li><a onclick=\"hound.getArticulos("
    + escapeExpression(((stack1 = ((stack1 = depth0.categoria),stack1 == null || stack1 === false ? stack1 : stack1.idCategoria)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\" href=\"\" id=\"categoria"
    + escapeExpression(((stack1 = ((stack1 = depth0.categoria),stack1 == null || stack1 === false ? stack1 : stack1.idCategoria)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img src=\"";
  if (stack2 = helpers.baseURL) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.baseURL; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "categorias/"
    + escapeExpression(((stack1 = ((stack1 = depth0.categoria),stack1 == null || stack1 === false ? stack1 : stack1.idCategoria)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/icono.png\" class=\"ui-li-icon\"/><span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.categoria),stack1 == null || stack1 === false ? stack1 : stack1.nombre)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> <span class=\"ui-li-count\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.categoria),stack1 == null || stack1 === false ? stack1 : stack1.numeroArticulos)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></a></li>";
  return buffer;
  });
templates['listContactosTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "				<li><a href=\"tel:"
    + escapeExpression(((stack1 = ((stack1 = depth0.contacto),stack1 == null || stack1 === false ? stack1 : stack1.telefono)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">					\n						<h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.contacto),stack1 == null || stack1 === false ? stack1 : stack1.nombre)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>					\n                                        <p>\n					<span class=\"\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.contacto),stack1 == null || stack1 === false ? stack1 : stack1.direccion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                                        <br/>\n					<span class=\"\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.contacto),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                                        <br/>\n					<span class=\"\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.contacto),stack1 == null || stack1 === false ? stack1 : stack1.telefono)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                                        <br/>\n                                        </p>\n                                    </a>\n				</li>\n";
  return buffer;
  });
templates['listEncuestasTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "				<li><a onclick=\"hound.getEncuesta("
    + escapeExpression(((stack1 = ((stack1 = depth0.encuesta),stack1 == null || stack1 === false ? stack1 : stack1.idEncuesta)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\" href=\"\" id=\"encuesta"
    + escapeExpression(((stack1 = ((stack1 = depth0.encuesta),stack1 == null || stack1 === false ? stack1 : stack1.idEncuesta)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.encuesta),stack1 == null || stack1 === false ? stack1 : stack1.nombre)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3><p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.encuesta),stack1 == null || stack1 === false ? stack1 : stack1.descripcion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p></a></li>";
  return buffer;
  });
templates['listPromocionesTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.nombre)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\r\n           "
    + "\r\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.nombre)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "*</h3>\r\n        ";
  return buffer;
  }

  buffer += "<li>\r\n    <a onclick=\"hound.getPromocionOffline("
    + escapeExpression(((stack1 = ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.idPromocion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\" href=\"\" id=\"promocion"
    + escapeExpression(((stack1 = ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.idPromocion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n        <img src=\"data:image/jpeg;base64,"
    + escapeExpression(((stack1 = ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.icono)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"ui-li-icon\"/>\r\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.visto), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        <p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.descripcion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n    </a>\r\n</li>";
  return buffer;
  });
templates['listTiendasTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li  class=\"tienda"
    + escapeExpression(((stack1 = ((stack1 = depth0.tienda),stack1 == null || stack1 === false ? stack1 : stack1.idTienda)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <a onclick=\"hound.displayTienda("
    + escapeExpression(((stack1 = ((stack1 = depth0.tienda),stack1 == null || stack1 === false ? stack1 : stack1.idTienda)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\" href=\"\">\n        <h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.tienda),stack1 == null || stack1 === false ? stack1 : stack1.nombre)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3><p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.tienda),stack1 == null || stack1 === false ? stack1 : stack1.direccion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p> \n    </a>\n</li>";
  return buffer;
  });
templates['portadaTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth1.connected, {hash:{},inverse:self.programWithDepth(program7, data, depth1),fn:self.programWithDepth(program2, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"gridMenuItem\" >\n        <a href=\"\" onclick=\""
    + escapeExpression(((stack1 = depth0.accion),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\" class=\"ui-link\" data-label=\""
    + escapeExpression(((stack1 = depth0.label),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> \n            <div class=\"gridMenuItemImage\">\n                ";
  stack2 = helpers['if'].call(depth0, depth0.localPath, {hash:{},inverse:self.programWithDepth(program5, data, depth2),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <div class=\"gridMenuItemText\">\n                <span>"
    + escapeExpression(((stack1 = depth0.label),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>                        \n            </div>                        \n        </a>\n    </div>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <img src=\""
    + escapeExpression(((stack1 = depth0.localPath),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"ui-li-icon imagenCatalogo\"  />\n                ";
  return buffer;
  }

function program5(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n                <img src=\""
    + escapeExpression(((stack1 = depth3.serverURL),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = depth0.rutaImage),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"ui-li-icon imagenCatalogo\"  /> \n                ";
  return buffer;
  }

function program7(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.offline, {hash:{},inverse:self.noop,fn:self.programWithDepth(program8, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program8(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"gridMenuItem\" >\n        <a href=\"\" onclick=\""
    + escapeExpression(((stack1 = depth0.accion),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\" class=\"ui-link\" data-label=\""
    + escapeExpression(((stack1 = depth0.label),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> \n            <div class=\"gridMenuItemImage\">\n                ";
  stack2 = helpers['if'].call(depth0, depth0.localPath, {hash:{},inverse:self.programWithDepth(program9, data, depth3),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <div class=\"gridMenuItemText\">\n                <span>"
    + escapeExpression(((stack1 = depth0.label),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>                        \n            </div>                        \n        </a>\n    </div>\n    ";
  return buffer;
  }
function program9(depth0,data,depth4) {
  
  var buffer = "", stack1;
  buffer += "\n                <img src=\""
    + escapeExpression(((stack1 = depth4.serverURL),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = depth0.rutaImage),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"ui-li-icon imagenCatalogo\"  /> \n                ";
  return buffer;
  }

  buffer += "<div class=\"gridMenu\" >\n    ";
  stack1 = helpers.each.call(depth0, depth0.menuItems, {hash:{},inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
templates['promocionTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "		<img src=\"data:image/jpeg;base64,"
    + escapeExpression(((stack1 = ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.imagen)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"max-width:100%;\"/>\n		<p>"
    + escapeExpression(((stack1 = ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.detalle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n		<h2>Vigencia: "
    + escapeExpression(((stack1 = ((stack1 = depth0.promocion),stack1 == null || stack1 === false ? stack1 : stack1.vigencia)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n";
  return buffer;
  });
templates['twitter'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "                <div style=\"text-align: center;\">\n                <a class=\"twitter-timeline\"\n                   data-widget-id=\"";
  if (stack1 = helpers.widgetId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.widgetId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-chrome=\"noheader nofooter\">\n                </a>                    \n                </div>\n";
  return buffer;
  });
})();
