export class Tarjeta {

    constructor(tarjeta){
        this.tarjeta  = tarjeta;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}



