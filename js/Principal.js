/*Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: porcentaje de
aprobados y cédula de alguno de los mejores estudiantes.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos), la salida que se espera es como la siguiente*/

import Materia from "./Materia.js";
import Estudiante from "./Estudiante.js";

let materia = new Materia();

let estudiante = new Estudiante(888, 60);
let estudiante2 = new Estudiante(777, 50);
let estudiante3 = new Estudiante(999, 40);
let estudiante4 = new Estudiante(333, 90);
let estudiante5 = new Estudiante(111, 30);
let estudiante6 = new Estudiante(666, 90);
let estudiante7 = new Estudiante(444, 48);
let estudiante8 = new Estudiante(222, 60);

materia.procesarEstudiantes(estudiante);
materia.procesarEstudiantes(estudiante2);
materia.procesarEstudiantes(estudiante3);
materia.procesarEstudiantes(estudiante4);
materia.procesarEstudiantes(estudiante5);
materia.procesarEstudiantes(estudiante6);
materia.procesarEstudiantes(estudiante7);
materia.procesarEstudiantes(estudiante8);

let salida = document.getElementById("salida");
salida.innerHTML += "resultado:" + "<br>";
salida.innerHTML = `El porcentaje de aprobados es: ${materia.porcAprobados()} %` + "<br>";
salida.innerHTML += `La cedula del mejor estudiante es: ${materia.mejorEstudiante()}`;