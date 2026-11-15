// Tarea 7 — Módulo readline
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingresá tu fecha de nacimiento (DD/MM/AAAA): ', (fecha) => {
  const [dia, mes, anio] = fecha.split('/').map(Number)

  const hoy = new Date()
  let edad = hoy.getFullYear() - anio

  const mesActual = hoy.getMonth() + 1
  const diaActual = hoy.getDate()
  if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
    edad--
  }

  console.log(`Tu edad actual es ${edad} años`)
  rl.close()
})
