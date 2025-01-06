/*
    CICLOS
*/

//Ciclo For

const heroes = ["Batman", "Superman", "Ironman", "Mujer Maravilla", "Aquaman"];

console.warn("************For tradicional*************");
for (let i = 0; i < heroes.length; i++) {
    console.warn(heroes[i]);
}

console.warn("*****For in*****");
for(let i in heroes){
    console.warn(heroes[i]);
}

console.warn("*****For of*****");

for (let heroe of heroes){
    console.warn(heroe);
}

//Usos de la declaracion for
//Se usa el for tradicional cuando necesitamos el control total de los indices del array
//Se usa el for in para el manejo de objetos, es decir para iterar un objeto o los indices del array
//Se usa el for of para iterar los calores directamente de un iterable(arrays, cadenas de texto(strings),map, set, nodelist)

//uso del continue y el brak dentro de un ciclo for

// for (let contador = 0; contador < 10; contador++) {
//     if (contador % 2 == 0) {
//         continue; //ir a la siguiente iteraccion
//     }
//     const element = array[contador]
// }

const carros = ["Ford", "Mazda", "Honda", "Toyota"];

for ( let contador = 0; contador < carros.length; contador++) {
    if (contador == 2) {
        continue;
    }
    console.log(carros[contador]);
}

//While

let i = 0;
while (carros[i]) {
    if(i==1)
    {
        i++;
        continue;
    }
    console.warn(carros[i]);
    i++;
}
