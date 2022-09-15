var Auto = /** @class */ (function () {
    function Auto(paramModelo, paramMarca, paramKm, paramTrans) {
        this.modelo = paramModelo;
        this.marca = paramMarca;
        this.kilometros = paramKm;
        this.transmision = paramTrans;
    }
    Auto.prototype.obtenerModelo = function (paramModelo) {
        this.modelo = paramModelo;
    };
    Auto.prototype.obtenerMarca = function () {
        return this.marca;
    };
    Auto.prototype.obtenerKm = function () {
        return this.kilometros;
    };
    Auto.prototype.definirTransmision = function () {
        return this.transmision;
    };
    return Auto;
}());
var primerAuto = new Auto("Yaris", "Toyota", "25.000", "Automatico");
var segundoAuto = new Auto("Gol Trend", "Volkswagen", "125.000", "Manual");
console.log("Autos disponibles: ");
console.log("1: " + primerAuto);
console.log("2: " + segundoAuto);
