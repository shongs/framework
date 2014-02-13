$(document).ready(function() {
	/*DESPLEGAR PORLET*/

	/* BALANCE */
	$("#porlet-balance .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-balance .mostrar-porlet i").hasClass("activado")){
			$("#porlet-balance .mostrar-porlet i").removeClass("activado");
			$("#porlet-balance .configurar").addClass("hide");
			
		}else{
			$("#porlet-balance .mostrar-porlet i").addClass("activado");
			$("#porlet-balance .configurar").removeClass("hide");
		}
		
		$("#porlet-balance .porlet-content").slideToggle("slow");
		$("#porlet-balance .porlet-footer").slideToggle("slow");
	});

	/* RESUMEN */
	$("#porlet-resumen .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-resumen .mostrar-porlet i").hasClass("activado")){
			$("#porlet-resumen .mostrar-porlet i").removeClass("activado");
			$("#porlet-resumen .configurar").addClass("hide");
		}else{
			$("#porlet-resumen .mostrar-porlet i").addClass("activado");
			$("#porlet-resumen .configurar").removeClass("hide");
		}
		
		$("#porlet-resumen .porlet-content").slideToggle("slow");
		$("#porlet-resumen .porlet-footer").slideToggle("slow");
	});
	
	/* MOVIMIENTOS */	
	$("#porlet-movimientos .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-movimientos .mostrar-porlet i").hasClass("activado")){
			$("#porlet-movimientos .mostrar-porlet i").removeClass("activado");
			$("#porlet-movimientos .configurar").addClass("hide");
		}else{
			$("#porlet-movimientos .mostrar-porlet i").addClass("activado");
			$("#porlet-movimientos .configurar").removeClass("hide");
		}
		
		$("#porlet-movimientos .porlet-content").slideToggle("slow");
		$("#porlet-movimientos .porlet-footer").slideToggle("slow");
	});
	
	/* CREDITO DE CONSUMO */	
	$("#porlet-consumo .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-consumo .mostrar-porlet i").hasClass("activado")){
			$("#porlet-consumo .mostrar-porlet i").removeClass("activado");
			$("#porlet-consumo .configurar").addClass("hide");
		}else{
			$("#porlet-consumo .mostrar-porlet i").addClass("activado");
			$("#porlet-consumo .configurar").removeClass("hide");
		}
		
		$("#porlet-consumo .porlet-content").slideToggle("slow");
		$("#porlet-consumo .porlet-footer").slideToggle("slow");
	});	
	
	/* CREDITO HIPOTECARIO */	
	$("#porlet-hipotecario .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-hipotecario .mostrar-porlet i").hasClass("activado")){
			$("#porlet-hipotecario .mostrar-porlet i").removeClass("activado");
			$("#porlet-hipotecario .configurar").addClass("hide");
		}else{
			$("#porlet-hipotecario .mostrar-porlet i").addClass("activado");
			$("#porlet-hipotecario .configurar").removeClass("hide");
		}
		
		$("#porlet-hipotecario .porlet-content").slideToggle("slow");
		$("#porlet-hipotecario .porlet-footer").slideToggle("slow");
	});	
	
	
	/* PORLET ERROR */	
	$("#porlet-error .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-error .mostrar-porlet i").hasClass("activado")){
			$("#porlet-error .mostrar-porlet i").removeClass("activado");
			$("#porlet-error .configurar").addClass("hide");
		}else{
			$("#porlet-error .mostrar-porlet i").addClass("activado");
			$("#porlet-error .configurar").removeClass("hide");
		}
		
		$("#porlet-error .porlet-content").slideToggle("slow");
		$("#porlet-error .porlet-footer").slideToggle("slow");
	});			
	
	/* SEGUROS */	
	$("#porlet-seguros .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-seguros .mostrar-porlet i").hasClass("activado")){
			$("#porlet-seguros .mostrar-porlet i").removeClass("activado");
			$("#porlet-seguros .configurar").addClass("hide");
		}else{
			$("#porlet-seguros .mostrar-porlet i").addClass("activado");
			$("#porlet-seguros .configurar").removeClass("hide");
		}
		
		$("#porlet-seguros .porlet-content").slideToggle("slow");
		$("#porlet-seguros .porlet-footer").slideToggle("slow");
	});		
			

	/* CAMPAÑA */	
	$("#porlet-campana .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-campana .mostrar-porlet i").hasClass("activado")){
			$("#porlet-campana .mostrar-porlet i").removeClass("activado");
			$("#porlet-campana .configurar").addClass("hide");
		}else{
			$("#porlet-campana .mostrar-porlet i").addClass("activado");
			$("#porlet-campana .configurar").removeClass("hide");
		}
		
		$("#porlet-campana .porlet-content").slideToggle("slow");
		$("#porlet-campana .porlet-footer").slideToggle("slow");
	});		
	

	/* INVERSIONES */	
	$("#porlet-inversiones .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-inversiones .mostrar-porlet i").hasClass("activado")){
			$("#porlet-inversiones .mostrar-porlet i").removeClass("activado");
			$("#porlet-inversiones .configurar").addClass("hide");
		}else{
			$("#porlet-inversiones .mostrar-porlet i").addClass("activado");
			$("#porlet-inversiones .configurar").removeClass("hide");
		}
		
		$("#porlet-inversiones .porlet-content").slideToggle("slow");
		$("#porlet-inversiones .porlet-footer").slideToggle("slow");
	});		
	
	/* RESUMEN TARJETA */	
	$("#porlet-resumen-tarjeta .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-resumen-tarjeta .mostrar-porlet i").hasClass("activado")){
			$("#porlet-resumen-tarjeta .mostrar-porlet i").removeClass("activado");
			$("#porlet-resumen-tarjeta .configurar").addClass("hide");
		}else{
			$("#porlet-resumen-tarjeta .mostrar-porlet i").addClass("activado");
			$("#porlet-resumen-tarjeta .configurar").removeClass("hide");
		}
		
		$("#porlet-resumen-tarjeta .porlet-content").slideToggle("slow");
		$("#porlet-resumen-tarjeta .porlet-footer").slideToggle("slow");
	});		


	/* ALTOS MONTOS */	
	$("#porlet-firmas-transferencias-altosmontos .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-firmas-transferencias-altosmontos .mostrar-porlet i").hasClass("activado")){
			$("#porlet-firmas-transferencias-altosmontos .mostrar-porlet i").removeClass("activado");
			$("#porlet-firmas-transferencias-altosmontos .configurar").addClass("hide");
		}else{
			$("#porlet-firmas-transferencias-altosmontos .mostrar-porlet i").addClass("activado");
			$("#porlet-firmas-transferencias-altosmontos .configurar").removeClass("hide");
		}
		
		$("#porlet-firmas-transferencias-altosmontos .porlet-content").slideToggle("slow");
		$("#porlet-firmas-transferencias-altosmontos .porlet-footer").slideToggle("slow");
	});			


	/* DAP */	
	$("#porlet-firmas-dap .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-firmas-dap .mostrar-porlet i").hasClass("activado")){
			$("#porlet-firmas-dap .mostrar-porlet i").removeClass("activado");
			$("#porlet-firmas-dap .configurar").addClass("hide");
		}else{
			$("#porlet-firmas-dap .mostrar-porlet i").addClass("activado");
			$("#porlet-firmas-dap .configurar").removeClass("hide");
		}
		
		$("#porlet-firmas-dap .porlet-content").slideToggle("slow");
		$("#porlet-firmas-dap .porlet-footer").slideToggle("slow");
	});	


	/* HIPOTECARIO */	
	$("#porlet-credito-hip .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-credito-hip .mostrar-porlet i").hasClass("activado")){
			$("#porlet-credito-hip .mostrar-porlet i").removeClass("activado");
			$("#porlet-credito-hip .configurar").addClass("hide");
		}else{
			$("#porlet-credito-hip .mostrar-porlet i").addClass("activado");
			$("#porlet-credito-hip .configurar").removeClass("hide");
		}
		
		$("#porlet-credito-hip .porlet-content").slideToggle("slow");
		$("#porlet-credito-hip .porlet-footer").slideToggle("slow");
	});		


	/* FIRMAS */	
	$("#porlet-firmas-credito .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-firmas-credito .mostrar-porlet i").hasClass("activado")){
			$("#porlet-firmas-credito .mostrar-porlet i").removeClass("activado");
			$("#porlet-firmas-credito .configurar").addClass("hide");
		}else{
			$("#porlet-firmas-credito .mostrar-porlet i").addClass("activado");
			$("#porlet-firmas-credito .configurar").removeClass("hide");
		}
		
		$("#porlet-firmas-credito .porlet-content").slideToggle("slow");
		$("#porlet-firmas-credito .porlet-footer").slideToggle("slow");
	});


	/* DIVISAS */	
	$("#porlet-firmas-divisas .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-firmas-divisas .mostrar-porlet i").hasClass("activado")){
			$("#porlet-firmas-divisas .mostrar-porlet i").removeClass("activado");
			$("#porlet-firmas-divisas .configurar").addClass("hide");
		}else{
			$("#porlet-firmas-divisas .mostrar-porlet i").addClass("activado");
			$("#porlet-firmas-divisas .configurar").removeClass("hide");
		}
		
		$("#porlet-firmas-divisas .porlet-content").slideToggle("slow");
		$("#porlet-firmas-divisas .porlet-footer").slideToggle("slow");
	});	

	/* FFMM */	
	$("#porlet-firmas-ffmm .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-firmas-ffmm .mostrar-porlet i").hasClass("activado")){
			$("#porlet-firmas-ffmm .mostrar-porlet i").removeClass("activado");
			$("#porlet-firmas-ffmm .configurar").addClass("hide");
		}else{
			$("#porlet-firmas-ffmm .mostrar-porlet i").addClass("activado");
			$("#porlet-firmas-ffmm .configurar").removeClass("hide");
		}
		
		$("#porlet-firmas-ffmm .porlet-content").slideToggle("slow");
		$("#porlet-firmas-ffmm .porlet-footer").slideToggle("slow");
	});	


	/* VALE VISTA */	
	$("#porlet-firmas-valevista .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-firmas-valevista .mostrar-porlet i").hasClass("activado")){
			$("#porlet-firmas-valevista .mostrar-porlet i").removeClass("activado");
			$("#porlet-firmas-valevista .configurar").addClass("hide");
		}else{
			$("#porlet-firmas-valevista .mostrar-porlet i").addClass("activado");
			$("#porlet-firmas-valevista .configurar").removeClass("hide");
		}
		
		$("#porlet-firmas-valevista .porlet-content").slideToggle("slow");
		$("#porlet-firmas-valevista .porlet-footer").slideToggle("slow");
	});			


	/* BOLETA GARANTIA */	
	$("#porlet-firmas-boleta-garantia .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-firmas-boleta-garantia .mostrar-porlet i").hasClass("activado")){
			$("#porlet-firmas-boleta-garantia .mostrar-porlet i").removeClass("activado");
			$("#porlet-firmas-boleta-garantia .configurar").addClass("hide");
		}else{
			$("#porlet-firmas-boleta-garantia .mostrar-porlet i").addClass("activado");
			$("#porlet-firmas-boleta-garantia .configurar").removeClass("hide");
		}
		
		$("#porlet-firmas-boleta-garantia .porlet-content").slideToggle("slow");
		$("#porlet-firmas-boleta-garantia .porlet-footer").slideToggle("slow");
	});		

	/* VALE VISTA */	
	$("#porlet-firmas-pendientes .mostrar-porlet").click(function(e) {
		e.preventDefault();		
		if($("#porlet-firmas-pendientes .mostrar-porlet i").hasClass("activado")){
			$("#porlet-firmas-pendientes .mostrar-porlet i").removeClass("activado");
			$("#porlet-firmas-pendientes .configurar").addClass("hide");
		}else{
			$("#porlet-firmas-pendientes .mostrar-porlet i").addClass("activado");
			$("#porlet-firmas-pendientes .configurar").removeClass("hide");
		}
		
		$("#porlet-firmas-pendientes .porlet-content").slideToggle("slow");
		$("#porlet-firmas-pendientes .porlet-footer").slideToggle("slow");
	});		

		
	/*FIN DESPLEGAR PORLET HOME*/
	
	/*CONFIGURAR PORLET BALANCE*/
	$("#porlet-balance .icon-configuracion").click(function(e) {
		e.preventDefault();
		$("#porlet-balance .porlet-configurar").slideDown();
	});
	
	$("#porlet-balance .porlet-configurar .cerrar-config").click(function(e) {
		e.preventDefault();
		$("#porlet-balance .porlet-configurar").slideUp();
	});	
	
	/*CONFIGURAR PORLET RESUMEN*/
	$("#porlet-resumen .icon-configuracion").click(function(e) {
		e.preventDefault();
		$("#porlet-resumen .porlet-configurar").slideDown();
	});
	
	$("#porlet-resumen .porlet-configurar .cerrar-config").click(function(e) {
		e.preventDefault();
		$("#porlet-resumen .porlet-configurar").slideUp();
	});	
	
	/*CONFIGURAR PORLET MOVIMIENTOS*/
	$("#porlet-movimientos .icon-configuracion").click(function(e) {
		e.preventDefault();
		$("#porlet-movimientos .porlet-configurar").slideDown();
	});
	
	$("#porlet-movimientos .porlet-configurar .cerrar-config").click(function(e) {
		e.preventDefault();
		$("#porlet-movimientos .porlet-configurar").slideUp();
	});
	

	$("#muestra-modal").click(function(){
		$("#modal").fadeIn("slow");
	});	
	$("#cerrar-modal").click(function(){
		$("#modal").fadeOut("slow");

	});

	/* modal SEGUROS */
	$("#modal-seguros").click(function(){
		$("#modal").fadeIn("slow");
	});	
	$("#cerrar-modal").click(function(){
		$("#modal").fadeOut("slow");

	});	

	/* modal GENERICA */
	$("#mostrar-modal").click(function(){
		$("#modal").fadeIn("slow");
	});	

	/* modal RUR */
	$("#modal-rut").click(function(){
		$("#modal2").fadeIn("slow");
	});	




	/* modal RUT */
	$("#abre-modal-campana-rut, #abre-modal-campana-rut-dos").click(function(){
		$("#modal-campana-rut").fadeIn("slow");
	});		

	$("#modal-campana-rut .modal-campana-content .cerrar-modal-campana").click(function(){
		$("#modal-campana-rut").fadeOut("fast");

	});	

	$("#modal-campana-rut .campana-paso-uno .aceptar").click(function(){
		$("#modal-campana-rut .campana-paso-uno").fadeOut("fast");
		$("#modal-campana-rut .campana-paso-dos").fadeIn("fast");

	});	


	$("#modal-campana .cerrar-campana").click(function(){
		$("#modal.modal").fadeOut("slow");
	});	


	/* ENVIAR POR EMAIL */
	$("#abre-enviar-email").click(function(){
		$("#modal-enviar-email").fadeIn("slow");
	});		

	$("#modal-enviar-email .cerrar-modal").click(function(){
		$("#modal-enviar-email").fadeOut("fast");

	});		

	$("#ir-paso2").click(function() {
		$("#paso1-modal").hide();
		$("#paso2-modal").show();
	});














	$("#modal-paso1 .accion").click(function() {
		$("#modal-paso1").hide();
		$("#modal-paso2").show()
	});

	$("#modal-paso2 .pasos-modal li").click(function() {
		$("#modal-paso1").hide();
		$("#modal-paso2").hide();
		$("#modal-paso3").show();
	});

	$("#legales-modal1 .mostrar").click(function() {
		$(".condiciones-modal").slideToggle();
	});	

	$("#legales-modal1 .mostrar").click(function() {
		$("#legales-modal1 .mostrar i").toggleClass("icon-nav-top");
	});


	/* modal crédito cuotas */
	$("#porlet-consumo a.muestra-modal-credito-consumo").click(function(){
		$("#modal-credito-cuotas.modal").fadeIn("slow");
		$("#modal-credito-cuotas .credito-paso-uno").fadeIn("slow");
		e.preventDefault();
	});
	
	$(".cerrar-credito-cuotas").click(function(){
		$("#modal-credito-cuotas.modal, #modal-credito-cuotas .credito-paso-uno, #modal-credito-cuotas .credito-paso-dos, #modal-credito-cuotas .credito-paso-tres, #modal-credito-cuotas .credito-paso-cuatro").fadeOut("slow");
	});



	$("#modal-credito-cuotas .credito-paso-uno .aceptar").click(function(){
		$("#modal-credito-cuotas .credito-paso-uno").fadeOut("slow");
		$("#modal-credito-cuotas .credito-paso-dos").fadeIn("slow");
	});

	$("#modal-credito-cuotas .credito-paso-dos .aceptar").click(function(){
		$("#modal-credito-cuotas .credito-paso-dos").fadeOut("slow");
		$("#modal-credito-cuotas .credito-paso-tres").fadeIn("slow");
	});

	$("#modal-credito-cuotas .credito-paso-dos .volver").click(function(){
		$("#modal-credito-cuotas .credito-paso-dos").fadeOut("slow");
		$("#modal-credito-cuotas .credito-paso-uno").fadeIn("slow");
	});

	$("#modal-credito-cuotas .credito-paso-tres .aceptar").click(function(){
		$("#modal-credito-cuotas .credito-paso-tres").fadeOut("slow");
		$("#modal-credito-cuotas .credito-paso-cuatro").fadeIn("slow");
	});

	$("#modal-credito-cuotas .credito-paso-tres .volver").click(function(){
		$("#modal-credito-cuotas .credito-paso-tres").fadeOut("slow");
		$("#modal-credito-cuotas .credito-paso-dos").fadeIn("slow");
	});

	$("#modal-credito-cuotas .credito-paso-cuatro .aceptar").click(function(){
		$("#modal-credito-cuotas .credito-paso-cuatro").fadeOut("slow");
		$("#modal-credito-cuotas").fadeOut("slow");
	});

	// $("#modal-credito-cuotas .credito-paso-cinco .aceptar").click(function(){
	// 	$("#modal-credito-cuotas .credito-paso-cinco").fadeOut("slow");
	// 	$("#modal-credito-cuotas").fadeOut("slow");
	// });	

	/* Modal acciones*/

	$("#mostrar-modal-acciones").click(function(){
		$("#modal-acciones").fadeIn("fast");
	});

	$("#modal-acciones .cerrar-acciones").click(function(){
		$("#modal-acciones").fadeOut("fast");
	});


	$("#modal-acciones .mostrar-paso2").click(function(){
		$("#modal-acciones .acciones-paso1").fadeOut("fast");
		$("#modal-acciones .acciones-paso2").fadeIn("fast");
	});

	$("#modal-acciones .cerrar-acciones").click(function(){
		$("#modal-acciones .acciones-paso1").addClass("show");
		$("#modal-acciones .acciones-paso2").addClass("hide");
	});



	
	/* ACORDEON */	

		$("#primas .acordeon-head").click(function(e) {

		if($("#primas .acordeon-content").hasClass("hide")){
			$("#primas .acordeon-content").removeClass("hide");
			$("#primas .acordeon-head i").addClass("icon-naranjo");

		}else{
			$("#primas .acordeon-content").addClass("hide");
			$("#primas .acordeon-content").removeClass("show");
			$("#primas .acordeon-head i").removeClass("icon-naranjo");
		}
	});

		$("#beneficios .acordeon-head").click(function(e) {

		if($("#beneficios .acordeon-content").hasClass("hide")){
			$("#beneficios .acordeon-content").removeClass("hide");
			$("#beneficios .acordeon-head i").addClass("icon-naranjo")
		}else{
			$("#beneficios .acordeon-content").addClass("hide");
			$("#beneficios .acordeon-content").removeClass("show");
			$("#beneficios .acordeon-head i").removeClass("icon-naranjo");
		}
	});	

		$("#cobertura .acordeon-head").click(function(e) {

		if($("#cobertura .acordeon-content").hasClass("hide")){
			$("#cobertura .acordeon-content").removeClass("hide");
			$("#cobertura .acordeon-head i").addClass("icon-naranjo");
		}else{
			$("#cobertura .acordeon-content").addClass("hide");
			$("#cobertura .acordeon-content").removeClass("show");
			$("#cobertura .acordeon-head i").removeClass("icon-naranjo");
		}
	});	

		$("#requisitos .acordeon-head").click(function(e) {

		if($("#requisitos .acordeon-content").hasClass("hide")){
			$("#requisitos .acordeon-content").removeClass("hide");
			$("#requisitos .acordeon-head i").addClass("icon-naranjo")
		}else{
			$("#requisitos .acordeon-content").addClass("hide");
			$("#requisitos .acordeon-content").removeClass("show");
			$("#requisitos .acordeon-head i").removeClass("icon-naranjo");
		}
	});	
		$("#exclusiones .acordeon-head").click(function(e) {

		if($("#exclusiones .acordeon-content").hasClass("hide")){
			$("#exclusiones .acordeon-content").removeClass("hide");
			$("#exclusiones .acordeon-head i").addClass("icon-naranjo");
		}else{
			$("#exclusiones .acordeon-content").addClass("hide");
			$("#exclusiones .acordeon-content").removeClass("show");
			$("#exclusiones .acordeon-head i").removeClass("icon-naranjo");
		}
	});	
		$("#como-usar .acordeon-head").click(function(e) {

		if($("#como-usar .acordeon-content").hasClass("hide")){
			$("#como-usar .acordeon-content").removeClass("hide");
			$("#como-usar .acordeon-head i").addClass("icon-naranjo");
		}else{
			$("#como-usar .acordeon-content").addClass("hide");
			$("#como-usar .acordeon-content").removeClass("show");
			$("#como-usar .acordeon-head i").removeClass("icon-naranjo");
		}
	});	
	

	/*PORLET INVERSISONES*/

	$("#inversiones-acciones .mostrar-porlet").click(function(e) {
		e.preventDefault();
		if($("#inversiones-acciones .mostrar-porlet i").hasClass("activado")){
			$("#inversiones-acciones .mostrar-porlet i").removeClass("activado");
			$("#inversiones-acciones .configurar").addClass("hide");
		}else{
			$("#inversiones-acciones .mostrar-porlet i").addClass("activado");
			$("#inversiones-acciones .configurar").removeClass("hide");
		}
		$("#inversiones-acciones .porlet-inversiones-contenido").slideToggle("slow");
	});

	$("#inversiones-ffmm .mostrar-porlet").click(function(e) {
		e.preventDefault();
		if($("#inversiones-ffmm .mostrar-porlet i").hasClass("activado")){
			$("#inversiones-ffmm .mostrar-porlet i").removeClass("activado");
			$("#inversiones-ffmm .configurar").addClass("hide");
		}else{
			$("#inversiones-ffmm .mostrar-porlet i").addClass("activado");
			$("#inversiones-ffmm .configurar").removeClass("hide");
		}	
		$("#inversiones-ffmm .porlet-inversiones-contenido").slideToggle("slow");
	});

	$("#inversiones-dap .mostrar-porlet").click(function(e) {
		e.preventDefault();
		if($("#inversiones-dap .mostrar-porlet i").hasClass("activado")){
			$("#inversiones-dap .mostrar-porlet i").removeClass("activado");
			$("#inversiones-dap .configurar").addClass("hide");
		}else{
			$("#inversiones-dap .mostrar-porlet i").addClass("activado");
			$("#inversiones-dap .configurar").removeClass("hide");
		}	
		$("#inversiones-dap .porlet-inversiones-contenido").slideToggle("slow");
	});

	$("#inversiones-apv .mostrar-porlet").click(function(e) {
		e.preventDefault();
		if($("#inversiones-apv .mostrar-porlet i").hasClass("activado")){
			$("#inversiones-apv .mostrar-porlet i").removeClass("activado");
			$("#inversiones-apv .configurar").addClass("hide");
		}else{
			$("#inversiones-apv .mostrar-porlet i").addClass("activado");
			$("#inversiones-apv .configurar").removeClass("hide");
		}	
		$("#inversiones-apv .porlet-inversiones-contenido").slideToggle("slow");
	});


	/*MIS DATOS EDITAR*/
	$("#mis-datos .actualizar-email").click(function(){
		$("#mis-datos .cont-datos-email input").addClass("show"); 
		$("#mis-datos .cont-datos-email .actualizar-email").addClass("hide");
		$("#mis-datos .cont-datos-email .p-email").addClass("hide");
		$("#mis-datos .contenedor-mis-datos a.guardar").removeClass("disabled");
		
	});

	$("#mis-datos .actualizar-direccion").click(function(){
		$("#mis-datos .cont-datos-direccion input").addClass("show");  
		$("#mis-datos .cont-datos-direccion .actualizar-direccion").addClass("hide");
		$("#mis-datos .cont-datos-direccion .p-direccion").addClass("hide");
		$("#mis-datos .contenedor-mis-datos a.guardar").removeClass("disabled");
		
	});


});




