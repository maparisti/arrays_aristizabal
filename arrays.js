/* debugger */

let dolar = 1.02
let euro = 0.98
let bienvenida = prompt("Estás listo para convertir tu dinero? Da click en continuar para comenzar")
let escoger = prompt("Conertir USD a EUR o EUR a USD?")
const conversiones = ['usd a eur', 'eur a usd'];

function valorEUR() {
    divisa = parseFloat(prompt("Ingresa el valor a convertir:"))
    resultado = usdEur(divisa, euro)
    console.log(divisa, "dolares", "equivale a:", resultado, "euros")
}

function valorUSD() {
    divisa = parseFloat(prompt("Ingresa el valor a convertir:"))
    resultado = usdEur(divisa, dolar)
    console.log(divisa, "euros", "equivale a:", resultado, "dolares")
}

function usdEur(divisa, euro) {
    return divisa * euro
}

function eurUsd (divisa, dolar) {
    return divisa * dolar
}

function nuevaConversion(){
    let nuevaCon = prompt("Ingresa nuevamente la conversion, por favor")
    let resultado = conversiones.includes(nuevaCon)
    if (!resultado) {
        conversiones.push(nuevaCon)
        console.log("Gracias!", nuevaCon, "ha sido añadida cómo sugerencia")
    }
}
switch (escoger.toLowerCase()) {
    case "usd a eur":
        valorEUR()
        break
    case "eur a usd":
        valorUSD()
        break
    default:
        console.warn("No tenemos disponible esa conversion, pero puedes ingresar tu sugerencia a continuación")
        nuevaConversion()
}