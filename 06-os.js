// Tarea 6 — Módulo os
const os = require('os')

const bytesAGB = (bytes) => (bytes / 1024 ** 3).toFixed(2)

console.log('Sistema operativo:', os.platform())
console.log('Arquitectura:', os.arch())
console.log('Memoria total:', bytesAGB(os.totalmem()), 'GB')
console.log('Memoria libre:', bytesAGB(os.freemem()), 'GB')
console.log('Directorio home:', os.homedir())
console.log('Hostname:', os.hostname())
console.log('Núcleos del procesador:', os.cpus().length)
