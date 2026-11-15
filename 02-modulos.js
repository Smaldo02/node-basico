// Tarea 2 — Sistema de módulos
const { sumar, restar, multiplicar, dividir } = require('./utils/matematica')

console.log('sumar(8, 4) =', sumar(8, 4))
console.log('restar(20, 7) =', restar(20, 7))
console.log('multiplicar(6, 3) =', multiplicar(6, 3))
console.log('dividir(15, 3) =', dividir(15, 3))
console.log('dividir(10, 0) =', dividir(10, 0))
