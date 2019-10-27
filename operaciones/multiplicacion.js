const fs= require('fs');
const colors = require('colors');

let listarTabla = (base, limite)=>{
    let texto= ''
    for (let i = 1; i<limite ;i++){
        texto += `${base} * ${i} = ${base*i}\n`
    }

    console.log("===============================")
    console.log(`tabla de ${base}.green ====`)
    console.log("================================")
    console.log(texto)

}

let crearArchivo =(base, limite = 10)=>{
    return new Promise((resolve, reject) => {
        let texto = ""

        if(!Number(base)){
            reject(`El valor ${base} no es un número`)
            return;
        }

        for (let i = 1;i<limite ;i++){
            texto += `${base} * ${i} = ${base*i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, texto,"utf-8" ,(err)=>{
            if(err)reject(err)
            else resolve(`tablas/tabla-${base}.txt`);

            console.log("se creo el archivo")
        })

    })
}

module.exports = {
    crearArchivo,
    listarTabla
};