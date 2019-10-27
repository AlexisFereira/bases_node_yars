const fs = require('fs');
const {crearArchivo,listarTabla} = require('./operaciones/multiplicacion');
const {argv} = require('./config/yargs')
const colors = require('colors')
let comando = argv._[0];


switch (comando) {
    case 'listar':
       listarTabla(argv.base,argv.limite)
        break;
    case 'crear':

crearArchivo(argv.base,argv.limite)
.then(archivo => console.log(`Se creo el archivo ${archivo}`))
.catch(error => console.log(error))
        break;
    default:console.log("Comando no conocido")
}
