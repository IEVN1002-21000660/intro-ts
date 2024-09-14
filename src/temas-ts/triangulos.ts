import { Distance } from "./Distanciapuntos.ts";

class Triangulo extends Distance {
    private puntox_3: number;
    private puntoy_3: number;

    constructor(puntox_1: number, puntoy_1: number, puntox_2: number, puntoy_2: number, puntox_3: number, puntoy_3: number) {
        super(puntox_1, puntoy_1, puntox_2, puntoy_2);
        this.puntox_3 = puntox_3;
        this.puntoy_3 = puntoy_3;
    }

    private Distanciona(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    public CalCULO(): void {
        const punto1x = this.puntox_1, punto1y = this.puntoy_1;
        const punto2x = this.puntox_2, punto2y = this.puntoy_2;
        const punto3x = this.puntox_3, punto3y = this.puntoy_3;

        const distancia1 = this.Distanciona(punto1x, punto1y, punto2x, punto2y);
        const distancia2 = this.Distanciona(punto2x, punto2y, punto3x, punto3y);
        const distancia3 = this.Distanciona(punto3x, punto3y, punto1x, punto1y);

        const suma1 = distancia1 + distancia2;
        const suma2 = distancia2 + distancia3;
        const suma3 = distancia3 + distancia1;

        const valido1 = suma1 > distancia3 ? 1 : 0;
        const valido2 = suma2 > distancia1 ? 1 : 0;
        const valido3 = suma3 > distancia2 ? 1 : 0;

        const sumaValidacion = valido1 + valido2 + valido3;

        if (sumaValidacion === 3) {
            console.log('Es un TRIANGULO');
            console.log(`Puntos: (${punto1x},${punto1y}), (${punto2x},${punto2y}), (${punto3x},${punto3y})`);
            console.log(`Distancias: ${distancia1}, ${distancia2}, ${distancia3}`);
        } else {
            console.log('NO ES UN TRIANGULO');
            console.log(`Puntos: (${punto1x},${punto1y}), (${punto2x},${punto2y}), (${punto3x},${punto3y})`);
            console.log(`Distancias: ${distancia1}, ${distancia2}, ${distancia3}`);
        }
    }
}

const encajo = new Triangulo(4, 1, 1, 4, 3, 1);
encajo.CalCULO();