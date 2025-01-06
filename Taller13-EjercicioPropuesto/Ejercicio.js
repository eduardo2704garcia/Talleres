let est1 = 
    {nombre: "Eduardo García",
        notas: [18, 18, 10],
        promedio:0
    };

let est2 = {
    nombre: "Mateo Iza",
    notas: [20, 12, 20],
    promedio:0
}

let est3 = {
    nombre: "Luis Sagnay",
    notas: [18, 20, 20],
    promedio:0
}

let est4 = {
    nombre: "Mateo Criollo",
    notas: [20, 20, 20],
    promedio:0
}

let est5 = {
    nombre: "Stefani Díaz",
    notas: [16, 20, 12],
    promedio:0
}

let est6 = {
    nombre: "Sara Candelario",
    notas: [20, 18 , 19],
    promedio:0
}

let est7 = {
    nombre: "Gabriel Lopez",
    notas: [14, 15, 16],
    promedio:0
}

let est8 = {
    nombre: "Fermin Lopez",
    notas: [20, 15 ,17],
    promedio: 0
}

let est9 = {
    nombre: "Camila Lopez",
    notas: [12, 11, 0],
    promedio:0
}

let est10 = {
    nombre: "Shelssy Guevara",
    notas: [14, 12, 10],
    prommedio:0
}

let estudiantes = [est1, est2, est3, est4, est5, est6, est7, est8, est9, est10];

let tipo;
let notas = [];
let prom = 0;
let promedio;
let suma = 0;

for(let estudiante of estudiantes){
    for(let est of estudiante.notas){
        estudiante.promedio += est;
    }
    estudiante.promedio = estudiante.promedio / 3;
    if(estudiante.promedio > 16){
        tipo = "Exclente";
    }else if(estudiante.promedio >= 12 && estudiante.promedio < 16){
        tipo = "Bueno";
    }else if (estudiante.promedio >= 8 && estudiante.promedio < 12){
        tipo = "Aprobado";
    }else if(estudiante.promedio < 8 && estudiante.promedio > 0){
        tipo = "Reprobado"
    }
    console.log(estudiante.nombre + ":");

    console.log("Estado: "+ tipo);

    console.log("Promedio: "+ estudiante.promedio);
    let maximo = estudiante.notas.reduce((acumulador, num) => num > acumulador ? num : acumulador, estudiante.notas[0]);

    console.log("Calificacion mas alta: "+ maximo);
    let minimo = estudiante.notas.reduce((acumulador, num) => num < acumulador ? num : acumulador, estudiante.notas[0]);

    console.log("-----------------------------------------------------");
}
