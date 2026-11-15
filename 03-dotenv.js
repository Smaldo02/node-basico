// Tarea 3 — Variables de entorno con dotenv
require('dotenv').config()

console.log(process.env.PORT)
console.log(process.env.APP_NAME)
console.log(process.env.AUTOR)

console.log(process.env.NO_EXISTE)
