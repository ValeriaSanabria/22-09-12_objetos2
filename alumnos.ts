class Alumno {

    private nombre: string;
    private apellido: string;
    private materia: string;
    private nota: number;

    constructor(pNombre: string, pApellido: string, pMateria: string, pNota: number, ) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.nota = pNota;
    }

    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    getMateria(): string {
        return this.materia;
    }

    getCondicion(): string {
        if (this.nota >= 7) {
            return "Aprobado"
        } else {
            return "Desaprobado"
        }
    }
}

class Profesor {

    private cargo: string;
    private nombre: string;
    private apellido: string;
    private listaAlumnos: Alumno[];

    constructor(pCargo: string, pNombre: string, pApellido: string, pListaA: Alumno[]) {
        this.cargo = pCargo;
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listaAlumnos = pListaA;
    }

    getCargo(): string {
        return this.cargo;
    }

    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }
}

class Escuela{

private nombreEsc: string;
private listaAlumnos: Alumno[];
private listaProfesores: Profesor[];

constructor(pNombreEsc: string, pListaA: Alumno[], pListaP: Profesor[]){
    this.nombreEsc = pNombreEsc;
    this.listaAlumnos = pListaA;
    this.listaProfesores = pListaP;
}

getNombreEscuela(): string{
    return this.nombreEsc;
}

matricularAlumno(pListaA:Alumno): void {
    this.listaAlumnos.push(pListaA);
    console.log("Alumno Matriculado");
}

expulsarAlumno(pListaA:Alumno): void {
    this.listaAlumnos.push(pListaA);
    console.log("Alumno expulsado");
}

contratarProfesor(pListaP:Profesor): void {
    this.listaProfesores.push(pListaP);
    console.log("Profesor contratado");
}

despedirProfesor(pListaP:Profesor): void {
    this.listaProfesores.push(pListaP);
    console.log("Profesor despedido");
}

}

let primerAlumno = new Alumno("Juan", "Perez", "Matematica", 8);
let segundoAlumno = new Alumno("Analia", "Delgado", "Ciencias sociales", 5);

let listadoAlumnos:Alumno[] = [primerAlumno, segundoAlumno];

let profesorA = new Profesor("Matematica", "Julian", "Diaz", listadoAlumnos);
let profesorB = new Profesor("Geografia", "Analia", "Gonzalez", listadoAlumnos);

let listaProfesores:Profesor[] = [profesorA, profesorB];

let condicionJuan = primerAlumno.getCondicion();

console.log(condicionJuan);

