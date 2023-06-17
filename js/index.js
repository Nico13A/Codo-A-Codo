const cantidadEntradas = document.getElementById("cantidadEntrada")

const botonCalcular = document.getElementById("botonCalcular")

const categoria = document.getElementById("categoria")

const totalCompra = document.getElementById("totalCompra")

let precioTicket = 200

function resumen() {
    let precioTotal = 0 
    /*
    console.log(categoria.value)

    console.log(cantidadEntradas.value)

    cantidadEntradas.value
    */

    if (categoria.value == "trainee") {
        precioTotal = (cantidadEntradas.value * (precioTicket * 0.50))
        //totalCompra.innerHTML = "Total a pagar: $" + precioTotal
    }
    else if (categoria.value == "junior") {
        precioTotal = (cantidadEntradas.value * (precioTicket * 0.85))
        //totalCompra.innerHTML = "Total a pagar: $" + precioTotal
    }
    else {
        precioTotal = (cantidadEntradas.value * (precioTicket * 0.20))
        //totalCompra.innerHTML = "Total a pagar: $" + precioTotal
    }
    totalCompra.innerHTML = "Total a pagar: $" + precioTotal

    //totalCompra.innerHTML = cantidadEntradas.value
}

function borrar() {
    totalCompra.innerHTML = "Total a pagar: $"
}