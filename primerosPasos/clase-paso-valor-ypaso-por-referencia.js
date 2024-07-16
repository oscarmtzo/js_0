let x = 1
let y = "Hola"
let z = null


let a = x 
let b = y
let c = z

console.log(x, y, z, a, b, c);

x++
a--
z = "valor nuevo"
console.log(x, y, z, a, b, c);

let frutas = ["manzanas"]
frutas.push("pera")

console.log(frutas)

let panes = ["🍞"]
let copiaDePanes = panes // paso de valor por referencia 
console.log(panes, copiaDePanes)
panes.push("🍐")

console.log(panes, copiaDePanes)
// [ '🍞', '🍐' ] [ '🍞', '🍐' ] es exactamente el mismo objeto 

console.log(copiaDePanes[0] === panes[0])


// tipo de dato complejo - paso por referencia
let frutas_obj = {
    naranja: "🍊"
} 

let verduras = frutas_obj

console.log(frutas_obj, verduras)

try {
    // frutas_obj += {
    //     pera: "🍐"
    // }
    // frutas_obj.push(
    //     {
    //         pera: "🍐"
    //     }
    // )

    frutas_obj.naranja = "🍐"
} catch(e) {
    console.log(e)
}


console.log(frutas_obj, verduras)


let ropa = {
    blusa: "👚"
}

ropa.pantalon = "👖"

console.log(ropa)

