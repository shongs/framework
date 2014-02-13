$(document).ready(function(){

	//MOSTRAR ICODE - CONTRATO GENERAL DE FONDOS
   $("#check-icode").click(function(evento){
      if ($("#check-icode").attr("checked")){
         $("#acciones-mandato").css("display", "block");
      }else{
         $("#acciones-mandato").css("display", "none");
      }
   });

	//MOSTRAR INFO AL CHECK
   $("#check-mostrar").click(function(evento){
      if ($("#check-mostrar").attr("checked")){
         $("#mostrar-contenido").css("display", "block");
      }else{
         $("#mostrar-contenido").css("display", "none");
      }
   });   




});