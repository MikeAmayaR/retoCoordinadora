import Util from '../util/util.js';
import ServiceChallenge from '../service/serviceChallenge.js';
import ParseChallenge from '../util/parseChallenge.js';

const util = new Util();
const parseChallenge = new ParseChallenge();

class ChallengeController {
    static async average(req, res) {
        let body = req.body
        try {
            if (body.a && body.b) {
                const response = parseInt(body.a) + parseInt(body.b) / 2;
                util.setSuccess(200, 'C01', 'Response Average', 'success', {
                    response
                });
            } else {
                util.setSuccess(200, 'C02', 'Ha ocurrido un error con este reto', 'error', {});
            }
        } catch (error) {
            throw new TypeError("Ha ocurrido un error con este reto", e);
        }
        return util.send(res);
    }

    static async manipulation(req, res) {
        let body = req.body;
        try {
            if (typeof body.texto !== 'string') {
                util.setSuccess(200, 'C02', 'El parmetro recibido debe ser string', 'error', {});
            }
            let remove;
            let bodyText = body.texto;
            let text = bodyText.substr(-1);
            if (text == "!") {
                remove = bodyText.substring(0, bodyText.length - 1);
                util.setSuccess(200, 'C02', 'Response manipulation ', 'success', {
                    remove
                });
            } else {
                util.setSuccess(200, 'C02', 'La cadena de texto enviada no tiene signos de admiración', 'error', {});
            }
            return util.send(res);
        } catch (error) {
            console.log(error, "Ha ocurrido un error con este reto");
        }
    }

    static async sumArray(req, res) {
        let body = req.body;
        let matriz;
        let response;
        matriz = Array.isArray(body.matriz);
        if (matriz === false) {
            util.setSuccess(200, 'C02', 'El parmetro recibido debe ser una matriz', 'error', {});
        }
        for (let i = 0; i < body.matriz.length; i++) {
            if (typeof body.matriz[i] !== "number") {
                util.setSuccess(200, 'C02', 'La matriz solo permite números', 'error', {});
            }
        }
        try {
            let par = 0;
            let impar = 0;
            let entero = 0;
            let suma = 0;
            for (let i = 0; i < body.matriz.length; i++) {
                suma += body.matriz[i];
            }
            for (let i = 0; i < body.matriz.length; i++) {
                if (body.matriz[i] > 0 && (body.matriz[i] % 1) == 0) {
                    entero += body.matriz[i];
                }
            }
            for (let i = 0; i < body.matriz.length; i++) {
                if ((body.matriz[i] % 2) == 0) {
                    par += body.matriz[i];
                } else {
                    impar += body.matriz[i];
                }
            }
            util.setSuccess(200, 'C02', 'Response sumArray', 'success', {
                sumaMatriz: suma,
                sumaEnteros: entero,
                sumaPares: par,
                sumaImpares: impar
            });
            return util.send(res);
        } catch (error) {
            console.log(error, "Ha ocurrido un error con este reto");
        }
    }

    static async transform(req, res) {
        let body = req.body;
        let matriz;
        matriz = Array.isArray(body.matriz);
        if (matriz === false) {
            util.setSuccess(200, 'C02', 'El parmetro recibido debe ser una matriz', 'error', {});
        }
        try {
            let arreglo = [];
            let response;
            for (let i = 0; i < body.matriz.length; i++) {
                for (let j = 0; j < body.matriz[i].length; j++) {
                    if (typeof body.matriz[i][j] === "number") {
                        arreglo.push(body.matriz[i][j]);
                        if (body.order === "ASC") {
                            response = arreglo.sort((a, b) => a - b);
                        } else if (body.order === "DESC") {
                            response = arreglo.sort((a, b) => b - a);
                        }
                    }
                }
            }
            util.setSuccess(200, 'C02', 'Response sumArray', 'success', {
                response
            });
            return util.send(res);
        } catch (error) {
            console.log(error, "Ha ocurrido un error con este reto");
        }
    }

    static async coordinadora(req, res) {
        let coordinadora, parseData, stageProccess;
        let responseConsumo = [];
        let codigo = req.params.codigo;
        let consumoTalentos = await ServiceChallenge.getChallenge();
        let consumoTracking = await ServiceChallenge.getChallengeTracking();
        if (consumoTalentos && consumoTracking) {
            coordinadora = consumoTalentos.data.data.guias;
            for (let i = 0; i < coordinadora.length; i++) {
                if (coordinadora[i].codigo_remision === codigo) {
                    responseConsumo.push(coordinadora[i]);
                } else {
                    responseConsumo.push(coordinadora);
                }
            }
            let stage = codigo.substring(0, 1);
            if (stage != 7) {
                stageProccess = 1
            } else {
                stageProccess = 2
            }
            parseData = parseChallenge.parseConsumo(stageProccess, responseConsumo, consumoTracking.data);
            util.setSuccess(200, 'C02', 'Respuesta Consumo Coordinadora', 'success',
                parseData
            );
        }
        return util.send(res);
    }

    static async arrayScore(req, res) {
        let body = req.body;
        let matriz;
        matriz = Array.isArray(body.matriz);
        if (matriz === false) {
            util.setSuccess(200, 'C02', 'El parmetro recibido debe ser una matriz', 'error', {});
        }
        for (let i = 0; i < body.matriz.length; i++) {
            if (typeof body.matriz[i] !== "number") {
                util.setSuccess(200, 'C02', 'La matriz solo permite números', 'error', {});
            }
        }
        try {
            let par = 0;
            let impar = 0;
            let five = 0;
            for (let i = 0; i < body.matriz.length; i++) {
                let arrayP = body.matriz[i];
                if ((body.matriz[i] % 2) == 0) {
                    arrayP = 1;
                    par += arrayP;
                }
                let arrayI = body.matriz[i];
                if ((body.matriz[i] % 2) != 0 && body.matriz[i] != 5) {
                    arrayI = 3;
                    impar += arrayI;
                }
                let arrayF = body.matriz[i];
                if (body.matriz[i] == 5) {
                    arrayF = 5;
                    five += arrayF;
                }
            }
            util.setSuccess(200, 'C02', 'Response arrayScore', 'success', {
                result: par + impar + five
            });
            return util.send(res);
        } catch (error) {
            console.log(error, "Ha ocurrido un error con este reto");
        }
    }
}

export default ChallengeController;