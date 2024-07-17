const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Commillas al reves - back quotes`

// concatenar o unir los strings
/**
 * Existen 4 maneras
 * 
 * 1. Concatenacion  usando el operador +
 */
const direccion = 'Calle falsa 123 '
const ciudad = 'Springfield ' 
const direccionCompleta = "Mi direccion completa es " + direccion + ciudad

console.log(direccionCompleta)

const nombre = "James", pais = "🏳‍🌈";

console.log(`Hola soy ${nombre} y soy de ${pais}`)

/**
 * 3. Concatenacion con join()
 */

const primeraParte = 'Me encanta'
const segundaParte = 'la comida de'
const terceraParte = '🌮'
const pensamiento = [primeraParte, segundaParte, terceraParte]

console.log(pensamiento.join(" ")) // Me encanta la comida de 🌮

/**
 * 4. Concatenacion con concat()
 */

const hobbie1 = 'leer 📚'
const hobbie2 = 'videojuegos 🎮'
const hobbie3 = 'lego 🧩'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ", ", hobbie2, ", ", hobbie3)
console.log(hobbies)

/**
 * carcateres de escape 
 * ocupamos el simbolo de diagonale invertida \ para ingresar comilla simples o dobles dentro de las diferentes formas de declarar nuestros strings
 */

console.log('\'')
console.log(`\``)
console.log("\"")
