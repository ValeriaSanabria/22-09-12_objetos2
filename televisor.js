var Decodificador = /** @class */ (function () {
    function Decodificador(pMarca, pModelo) {
        this.marca = pMarca;
        this.modelo = pModelo;
    }
    Decodificador.prototype.getMarca = function () {
        return this.marca;
    };
    Decodificador.prototype.getModelo = function () {
        return this.modelo;
    };
    return Decodificador;
}());
var Televisor = /** @class */ (function () {
    function Televisor(paramVolumen, paramPulgadas, pDeco) {
        this.volumenActual = paramVolumen;
        this.pulgadas = paramPulgadas;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.obtenerVolumen = function () {
        return this.volumenActual;
    };
    Televisor.prototype.obtenerPulgadas = function () {
        return this.pulgadas;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    Televisor.prototype.setearPulgadas = function (paramPulgadas) {
        this.pulgadas = paramPulgadas;
    };
    return Televisor;
}());
var decoOne = new Decodificador("Sanyo", 2342);
var primerTelevisor = new Televisor(45, 96, decoOne);
console.log(decoOne);
var volumenDelPrimerTelevisor = primerTelevisor.obtenerVolumen();
console.log("volumen " + volumenDelPrimerTelevisor);
