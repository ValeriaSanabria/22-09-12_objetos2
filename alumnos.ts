class Alumno {
    private nombre: string;
    private apellido: string;
    private materia: string;
    private nota: number;

    constructor(pNombre: string, pApellido: string, pMateria: string, pNota: number,) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.nota = pNota;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getMateria(): string {
        return this.materia;
    }

    public getCondicion(): string {
        if (this.nota >= 7) {
            return "Aprobado";
        } else {
            return "Desaprobado";
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

    public getCargo(): string {
        return this.cargo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }
}

class Escuela {
    private nombreEsc: string;
    private listaAlumnos: Alumno[];
    private listaProfesores: Profesor[];

    constructor(pNombreEsc: string, pListaA: Alumno[], pListaP: Profesor[]) {
        this.nombreEsc = pNombreEsc;
        this.listaAlumnos = pListaA;
        this.listaProfesores = pListaP;
    }

    public getNombreEscuela(): string {
        return this.nombreEsc;
    }

    public matricularAlumno(pListaA: Alumno[]): void {
        this.listaAlumnos = (pListaA);
        console.log("Alumno Matriculado");
    }

    public expulsarAlumno(pListaA: Alumno[]): void {
        this.listaAlumnos = pListaA;
        console.log("Alumno expulsado");
    }

    public contratarProfesor(pListaP: Profesor[]): void {
        this.listaProfesores = pListaP;
        console.log("Profesor contratado");
    }

    public despedirProfesor(pListaP: Profesor[]): void {
        this.listaProfesores = pListaP;
        console.log("Profesor despedido");
    }
}

let primerAlumno = new Alumno("Juan", "Perez", "Matematica", 8);
let segundoAlumno = new Alumno("Analia", "Delgado", "Ciencias sociales", 5);

let listadoAlumnos: Alumno[] = [primerAlumno, segundoAlumno];

let profesorA = new Profesor("Matematica", "Julian", "Diaz", listadoAlumnos);
let profesorB = new Profesor("Geografia", "Analia", "Gonzalez", listadoAlumnos);

let listaProfesores: Profesor[] = [profesorA, profesorB];

let condicionJuan = primerAlumno.getCondicion();

console.log(condicionJuan);
