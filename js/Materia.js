export default class Materia {
    constructor() {

        this.contEstudiantes = 0;
        this.contAprobados = 0;
        this.auxCedula = "";
        this.mayorNota = 0;
    }

    procesarEstudiantes(estudiante) {

        this.contEstudiantes++;
        if (estudiante.notaFinal >= 48) {
            this.contAprobados++;
        }
        if (estudiante.notaFinal > this.mayorNota) {
            this.mayorNota = estudiante.notaFinal;
            this.auxCedula = estudiante.cedula;
        }

    }


    porcAprobados() {
        return (this.contAprobados / this.contEstudiantes) * 100;
    }


    mejorEstudiante() {
        return this.auxCedula;
    }
}