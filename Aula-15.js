/*1. A/a -> 4
    E/e -> 3
    I/i -> 1
    O/o -> 0 */

const transformadora = (texto, transformadora) => {
    if (texto.length === 0) {
        console.log('O seu texto está vazio!');
    }

    let resultado = transformadora(texto);

    return resultado;
}

    const transformaLetras = (texto) => {
    let novoTexto = '';
    for(i = 0; i < texto.length; i++) {
            if (texto[i].toUpperCase() === 'A' ) {
                novoTexto += 4;
            } else if (texto[i].toUpperCase() === 'E' ) {
                novoTexto += 3;
            } else if (texto[i].toUpperCase() === 'I' ) {
                novoTexto += 1;
            } else if (texto[i].toUpperCase() === 'O' ) {
                novoTexto += 0;
            } else {
                novoTexto += texto[i];
            }
    }
    return novoTexto;
}


let result = transformadora(' ', transformaLetras);


console.log(result);

//2. Remova os espaços em branco    

const removeEspacos = (texto) => {
    let textoJunto = '';
    for(i = 0; i < texto.length; i++) {
        if (texto[i] === ' ') {
            continue;
        } else {
            textoJunto += texto[i];
        }
    }

    return textoJunto;
}

let textoSemEspaco = transformadora('           Olá, mundo ', removeEspacos);

console.log(textoSemEspaco);