<li>
    <a onclick="hound.getPromocionOffline({{promocion.idPromocion}});" href="" id="promocion{{promocion.idPromocion}}">
        <img src="data:image/jpeg;base64,{{promocion.icono}}" class="ui-li-icon"/>
        {{#if promocion.visto }}
            <h3>{{promocion.nombre}}</h3>
           {{! En este caso la promocion ya ha sido leida por el usuario, por lo cual no se muestra como no leida}}
        {{else}}
            <h3>{{promocion.nombre}}*</h3>
        {{/if}}
        <p>{{promocion.descripcion}}</p>
    </a>

</li>