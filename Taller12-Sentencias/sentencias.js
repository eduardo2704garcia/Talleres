/*
Sentencias de control
*/
//1) If y Else
let numero = 2;
if (numero == 1) {
    console.log("Numero 1");
}
else if (numero == 2) {
    console.warn("Numero 2")
}
else if (numero == 3){
    console.warn("Numero 3")
}
else {
    console.log("No es un numero");
}

//Ejercicio referente a las estaciones del año
//Invierno, otoño, primavera, verano

let mes = 11;
let estacion;

if (mes == 1 || mes == 2|| mes == 3){
    estacion = "Invierno";
}
else if (mes == 4|| mes == 5|| mes == 6) {
    estacion = "Otoño";
}
else if (mes == 7|| mes == 8|| mes == 9) {
    estacion = "Primavera";
}
else if (mes == 10|| mes == 11|| mes == 12) {
    estacion = "Verano";
}
else {
    estacion = "No corresponde a una estacion";
}
console.warn(estacion);

//Ejercicio:
//Calcular la hora del dia

/*
6am-11am ==> Buenos dias
12am-18pm ==> Buenas tardes
19pm-23pm ==> Buenas noches
24am-6am ==> Durmiendo
*/
let horaDia = 12;
let mensaje;

if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos dias";
}
else if (horaDia >= 12 && horaDia <= 18){
    mensaje = "Buenas tardes";
}
else if (horaDia >= 19 && horaDia <= 23){
    mensaje = "Buenas noches";
}
else if (horaDia >= 0 && horaDia < 0){
    mensaje = "Durmiendo";
}
else {
    mensaje = "No se una hora correspondida";
}
console.warn(mensaje);

/*
Swich
*/

let mesE = 11;
let estacionI = "Estacion desconodica";

switch (mesE) {
    case 1: case 2: case 3:
        estacionI = "Invierno";
        break;
    case 4: case 5: case 6:
        estacionI = "Otoño";
        break;
    case 7: case 8: case 9:
        estacionI = "Primavera";
        break;
    case 10: case 11: case 12:
        estacionI = "Verano";
        break;
    default:
        estacion = "Valor incorrecto"                  
}
console.log(estacionI);

//Otra forma de utilizar el if es quitando todos los corchetes
let horaDia1 = 12;
let mensaje1;

if(horaDia1 >= 6 && horaDia1 <= 11)
    mensaje = "Buenos dias";
else if (horaDia1 >= 12 && horaDia1 <= 18)
    mensaje = "Buenas tardes";
else if (horaDia1 >= 19 && horaDia1 <= 23)
    mensaje = "Buenas noches";
else if (horaDia1 >= 0 && horaDia1 < 0)
    mensaje = "Durmiendo";
else mensaje1 = "No se una hora correspondida";
console.warn(mensaje1);
