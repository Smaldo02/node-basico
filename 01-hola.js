// Tarea 1 — Tu primer script

const nombre = 'Node.js'
let edad = 15
const activo = true
let nada = null
let indefinido

console.log('Nombre:', nombre)
console.log('Edad:', edad)
console.log('Activo:', activo)
console.log('Nada:', nada)
console.log('Indefinido:', indefinido)

const resultado = (10 + 5) * 2
console.log('Resultado de (10 + 5) * 2:', resultado)

const persona = {
  nombre: 'Ana',
  edad: 28,
  ciudad: 'Buenos Aires'
}
console.log('Objeto persona:', persona)

const frutas = ['manzana', 'banana', 'naranja', 'pera']
frutas.forEach((fruta) => {
  console.log('Fruta:', fruta)
})

console.log('Versión de Node:', process.version)
console.log('Sistema operativo:', process.platform)
console.log('Directorio de ejecución:', process.cwd())
console.log('Argumentos:', process.argv)
