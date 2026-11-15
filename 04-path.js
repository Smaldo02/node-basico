// Tarea 4 — Módulo path
const path = require('path')

console.log('Directorio actual (__dirname):', __dirname)
console.log('Archivo actual (__filename):', __filename)

console.log('path.join():', path.join('carpeta', 'subcarpeta', 'archivo.txt'))

console.log('path.extname("foto.png"):', path.extname('foto.png'))
console.log('path.extname("index.html"):', path.extname('index.html'))
console.log('path.extname("datos.json"):', path.extname('datos.json'))

console.log('path.basename("reporte.pdf", ".pdf"):', path.basename('reporte.pdf', '.pdf'))
console.log('path.basename(__filename, ".js"):', path.basename(__filename, '.js'))

const rutaUsuarios = path.join(__dirname, 'datos', 'usuarios.json')
console.log('Ruta a usuarios.json:', rutaUsuarios)
