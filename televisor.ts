
class Decodificador {
    private marca: string;
    public modelo: number;

    constructor(pMarca: string,pModelo: number){
        this.marca = pMarca;
        this.modelo = pModelo;
    }

    getMarca(): string{
        return this.marca
    }

    getModelo(): number{
        return this.modelo
    }
}

class Televisor{

    private estaPrendido:boolean;
    private volumenActual:number;
    private canalActual:number;
    private modelo:string;
    private marca:string;
    private pulgadas:number;
    private decodificador: Decodificador;

    constructor(paramVolumen:number,paramPulgadas:number,pDeco: Decodificador){
        this.volumenActual = paramVolumen;
        this.pulgadas = paramPulgadas;
    }


    prenderApagar():void{
        if(this.estaPrendido === true){
            this.estaPrendido = false;
        }else{
            this.estaPrendido = true;
        }
    }
    
    obtenerVolumen():number{
        return this.volumenActual;
    }

    obtenerPulgadas():number{
        return this.pulgadas;
    }


    subirVolumen():void{
        this.volumenActual = this.volumenActual++;
    }

    setearPulgadas(paramPulgadas:number):void{
        this.pulgadas=paramPulgadas;
    }

}

let decoOne = new Decodificador("Sanyo", 2342);
let primerTelevisor = new Televisor(45, 96, decoOne);

console.log(decoOne);

let volumenDelPrimerTelevisor:number = primerTelevisor.obtenerVolumen();

console.log("volumen "+ volumenDelPrimerTelevisor);
