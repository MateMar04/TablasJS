var nroDeOrden;
var nombre;
var precio;

const lista = new Array();



function enviar() {
    nroDeOrden = document.getElementById("orden").value;
    nombre = document.getElementById("nombre").value;
    precio = document.getElementById("precio").value;
}



function imprimir() {
    var table = document.getElementById("tabla");
    for (var i = 1; i < nroDeOrden; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = i;
        cell2.innerHTML = "0";
        cell3.innerHTML = "0";
    }

    var lastRow = table.insertRow(nroDeOrden)
    var cellOrden = lastRow.insertCell(0);
    var cellNombre = lastRow.insertCell(1);
    var cellPrecio = lastRow.insertCell(2);
    cellOrden.innerHTML = nroDeOrden;
    cellNombre.innerHTML = nombre;
    cellPrecio.innerHTML = precio;
}