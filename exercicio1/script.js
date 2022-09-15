const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function Funcao1(obj) {
    const novoObj = {};
    for (const key in obj) {
        novoObj[key] = obj[key];
        if (typeof novoObj[key] === "string") {
            novoObj[key] = novoObj[key].toUpperCase();
        }
    }
    return novoObj;
}

function Funcao2(obj) {
    let str = "";
    for (const key in obj) {
        if (str.length) {
            str += ", ";
        }
        str += `${key}: ${obj[key]}`;
    }

    return str;
}

function Funcao3(obj, callback) {
    console.log(callback(obj));
}

// Chama assim:
Funcao3(objeto, Funcao1);
Funcao3(objeto, Funcao2);