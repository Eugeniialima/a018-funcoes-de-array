const numerosAleatorios = [5, 10, 12, 7, 26, 14, 20, 2];
const triplos = numerosAleatorios.map(myFunction);


function myFunction(value, index, array) {
    return value * 3;
}
console.log(`O novo array vai ser esse: ${triplos}`);

const metades = numerosAleatorios.map(myFunction2);
function myFunction2(value, index, array) {
    return value / 2;
}

console.log(`Os números dividos por dois: ${metades}`)

