class Auto {

    public modelo: string;
    public marca: string;
    public kilometros: number;
    public transmision: string;

    constructor(paramModelo: string, paramMarca: string, paramKm: number, paramTrans: string) {
        this.modelo = paramModelo;
        this.marca = paramMarca;
        this.kilometros = paramKm;
        this.transmision = paramTrans;
    }

    obtenerModelo(paramModelo: string): void {
        this.modelo = paramModelo
    }

    obtenerMarca(): string {
        return this.marca;
    }

    obtenerKm(): number {
        return this.kilometros
    }

    definirTransmision(): string {
        return this.transmision;
    }

}

let primerAuto = new Auto("Yaris", "Toyota", "25.000", "Automatico");
let segundoAuto = new Auto("Gol Trend", "Volkswagen", "125.000", "Manual");


console.log("Autos disponibles: ");
console.log("1: " + primerAuto);
console.log("2: " + segundoAuto);