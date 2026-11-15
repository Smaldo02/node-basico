// Tarea 5 — Módulo fs (File System)
const fs = require('fs')
const path = require('path')

const contenidoInicial = `Nota 1: Aprender Node.js
Nota 2: Practicar módulos nativos
Nota 3: Entender el sistema de archivos`

const contenidoExtra = `\nNota 4: Esta línea fue agregada después`

const carpetaDatos = path.join(__dirname, 'datos')
const rutaNotas = path.join(carpetaDatos, 'notas.txt')

fs.writeFileSync(rutaNotas, contenidoInicial)

console.log('--- Contenido inicial ---')
console.log(fs.readFileSync(rutaNotas, 'utf-8'))

fs.appendFileSync(rutaNotas, contenidoExtra)
console.log('--- Contenido después de append ---')
console.log(fs.readFileSync(rutaNotas, 'utf-8'))

console.log('--- Verificar si existe ---')
if (fs.existsSync(rutaNotas)) {
  console.log('notas.txt existe:', fs.readFileSync(rutaNotas, 'utf-8'))
}
const rutaInexistente = path.join(carpetaDatos, 'no-existe.txt')
console.log('no-existe.txt existe:', fs.existsSync(rutaInexistente))

console.log('--- Archivos en datos/ ---')
console.log(fs.readdirSync(carpetaDatos))

