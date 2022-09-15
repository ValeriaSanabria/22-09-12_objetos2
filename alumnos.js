var Alumno = /** @class */ (function () {
    function Alumno(pNombre, pApellido, pMateria, pNota) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.nota = pNota;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.getMateria = function () {
        return this.materia;
    };
    Alumno.prototype.getCondicion = function () {
        if (this.nota >= 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(pCargo, pNombre, pApellido, pListaA) {
        this.cargo = pCargo;
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listaAlumnos = pListaA;
    }
    Profesor.prototype.getCargo = function () {
        return this.cargo;
    };
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.getApellido = function () {
        return this.apellido;
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(pNombreEsc, pListaA, pListaP) {
        this.nombreEsc = pNombreEsc;
        this.listaAlumnos = pListaA;
        this.listaProfesores = pListaP;
    }
    Escuela.prototype.getNombreEscuela = function () {
        return this.nombreEsc;
    };
    Escuela.prototype.matricularAlumno = function (pListaA) {
        this.listaAlumnos.push(pListaA);
        console.log("Alumno Matriculado");
    };
    Escuela.prototype.expulsarAlumno = function (pListaA) {
        this.listaAlumnos.push(pListaA);
        console.log("Alumno expulsado");
    };
    Escuela.prototype.contratarProfesor = function (pListaP) {
        this.listaProfesores.push(pListaP);
        console.log("Profesor contratado");
    };
    Escuela.prototype.despedirProfesor = function (pListaP) {
        this.listaProfesores.push(pListaP);
        console.log("Profesor despedido");
    };
    return Escuela;
}());
var primerAlumno = new Alumno("Juan", "Perez", "Matematica", 8);
var segundoAlumno = new Alumno("Analia", "Delgado", "Ciencias sociales", 5);
var listadoAlumnos = [primerAlumno, segundoAlumno];
var profesorA = new Profesor("Matematica", "Julian", "Diaz", listadoAlumnos);
var profesorB = new Profesor("Geografia", "Analia", "Gonzalez", listadoAlumnos);
var listaProfesores = [profesorA, profesorB];
var condicionJuan = primerAlumno.getCondicion();
console.log(condicionJuan);
