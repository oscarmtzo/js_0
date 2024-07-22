const entero = 12
const decimal = 12.4

console.log(`${typeof(entero)} ${typeof(decimal)}`)

// notacion cientifica
const cientifica = 5e3
console.log(cientifica) // 5000

// numeros infinitos y NaN Not a Number
const infinito = Infinity
const noEsUnNumero = NaN

console.log(`${infinito} ${noEsUnNumero}`) // Infinity NaN

// operaciones aritmeticas
// suma resta, multiplicacion y division

const suma = 3 + 4;
const resta = 3 - 4;
const multiplicacion = 3 * 4;
const division = 16 /3

console.log(`suma:${suma} resta:${resta} multiplicacion:${multiplicacion} division:${division}`)

// modulo y potencia (exponenciacion)

const modulo = 18 % 4;
const potencia = 3**3;
console.log(`modulo:${modulo} potencia:${potencia}`)

// precision 
/**
 * JS tiene detalles con la presicion de las operaciones 
 */

const resultado = 0.1 + 0.2 
console.log(resultado) // 0.30000000000000004
// arreglarlo
console.log(resultado.toFixed(2)) // 0.30
console.log(0.3 === resultado.toFixed(2)) // false
// por lo tanto se debe de fijar bien el numero 
console.log(resultado.toFixed(1) === 0.3 ) // false
console.log(Math.abs(0.3) === Math.abs(resultado.toFixed(1))) // true

// operaciones Avanzadas 
const raizCuadrada = Math.sqrt(16)
console.log(raizCuadrada)
const valorAbsoluto = Math.abs(-0.3)
console.log(valorAbsoluto) // 0.3 es positivo y sin las unidades del lado derecho del mundo remanentes 
console.log(Math.random())