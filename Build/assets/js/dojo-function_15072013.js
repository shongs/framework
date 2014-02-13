dojo.require("dijit.form.Button");

/*TOGGLE MENU NAV HOME*/
	function toggle1() {
	    dojo.toggleClass("transferir-content", "hide");
	    dojo.toggleClass("transferir-header", "activado-menu-lateral");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("btn-transferir"), "onclick", toggle1);
	});

/*TOGGLE CONSULTAR CARTOLA HISTORICA*/
 
 function toggleCartola() {
	    dojo.toggleClass("content-porlet-interior", "show");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("porlet-interior"), "onclick", toggleCartola);
	});





	 function toggleCartola2() {
	    dojo.toggleClass("colapsable-cartola", "show");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("mostrar2"), "onclick", toggleCartola2);
	});


	
	/*
function toggleCartola() {
	    dojo.toggleClass("content-porlet-cartola", "show");
	    dojo.toggleClass("porlet-estado-cartola", "activado-arrow");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("porlet-estado-cartola"), "onclick", toggleCartola);
	});
*/

/*TOGGLE POPOVER*/
	function popOver() {
	    dojo.toggleClass("icon-detalle-1", "show");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("icon-detalle-1"), "onclick", popOver);
	});
		
	function popOver2() {
	    dojo.toggleClass("icon-detalle-2", "show");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("icon-detalle-2"), "onclick", popOver2);
	});
	

/*TOGGLE SALIR HEADER*/
function salir() {
	    dojo.toggleClass("salir", "hide");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("btn-salir"), "onclick", salir);
});  



/*CERRAR ALERTAS HOME*/
function hide1() {
	    dojo.toggleClass("alerta", "hide");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("hide-button1"), "onclick", hide1);
});  

function hide2() {
	    dojo.toggleClass("alerta2", "hide");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("hide-button2"), "onclick", hide2);
});



function hide3() {
	    dojo.toggleClass("alerta3", "hide");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("hide-button3"), "onclick", hide3);
});  

function hide4() {
	    dojo.toggleClass("alerta4", "hide");
	}
	
	dojo.addOnLoad(function() {
	    dojo.connect(dojo.byId("hide-button4"), "onclick", hide4);
});
/* FIN ALERTAS HOME */

/* CALENDARIO FILTRO*/
window.onload = function(){
	monthYearCalendar.init("boxMonthYear",show);
}
function show() {
    document.getElementById("result").innerHTML  =   (monthYearCalendar.selectedMonth.length=="1")? "0" + monthYearCalendar.selectedMonth+ " / " + monthYearCalendar.selectedYear:monthYearCalendar.selectedMonth + " / " + monthYearCalendar.selectedYear;
}
/* FIN CALENDARIO FILTRO*/
		