var nroDeOrden;
var nombre;
var precio;

function enviar() {
    nroDeOrden = document.getElementById("orden").value;
    nombre = document.getElementById("nombre").value;
    precio = document.getElementById("precio").value;
}

function ensureSize(size) {
    var table = document.getElementById("tabla");
    for (var i = size; i <= nroDeOrden; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = i;
        cell2.innerHTML = "0";
        cell3.innerHTML = "0";
    }
}

function imprimir() {
    var table = document.getElementById("tabla");
    let rows = table.rows;

    ensureSize(rows.length);

    var modifyRow = rows[nroDeOrden]
    var cellOrden = modifyRow.cells[0].innerHTML = nroDeOrden;
    var cellNombre = modifyRow.cells[1].innerHTML = nombre;
    var cellPrecio = modifyRow.cells[2].innerHTML = precio;
}