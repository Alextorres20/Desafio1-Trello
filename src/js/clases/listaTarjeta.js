import { Tarjeta } from "./Tarjeta";
export class ListaTarjeta {
    constructor() {
        this.cargarPanel1LocalStorage();
        this.cargarPanel2LocalStorage();
        this.cargarPanel3LocalStorage();
    }

    guardarPanel1(tarjeta) {
        this.panel1.push(tarjeta);
        this.guardarPanel1LocalStorage();
    }

    guardarPanel2(tarjeta) {
        this.panel2.push(tarjeta);
        this.guardarPanel2LocalStorage();
    }

    guardarPanel3(tarjeta) {
        this.panel3.push(tarjeta);
        this.guardarPanel3LocalStorage();
    }

    modificarPanel1(tarjeta_modificada, identificador_tarjeta) {
        for( const tarjeta of this.panel1 ){
            console.log(tarjeta, identificador_tarjeta);
            if (tarjeta.id == identificador_tarjeta) { //en mi array lo tengo como numérico y al tomarlo del HTML es string, por eso dos iguales
                tarjeta.color = tarjeta_modificada.color;
                tarjeta.descripcion = tarjeta_modificada.descripcion;
                tarjeta.imagen = tarjeta_modificada.imagen;
                tarjeta.label = tarjeta_modificada.label;
                tarjeta.prioridad = tarjeta_modificada.prioridad;
                tarjeta.tarjeta = tarjeta_modificada.tarjeta;
                tarjeta.subtarea = tarjeta_modificada.subtarea;
            }
        }
        this.guardarPanel1LocalStorage();
    }

    modificarPanel2(tarjeta_modificada, identificador_tarjeta) {
        for( const tarjeta of this.panel2 ){
            console.log(tarjeta, identificador_tarjeta);
            if (tarjeta.id == identificador_tarjeta) { //en mi array lo tengo como numérico y al tomarlo del HTML es string, por eso dos iguales
                tarjeta.color = tarjeta_modificada.color;
                tarjeta.descripcion = tarjeta_modificada.descripcion;
                tarjeta.imagen = tarjeta_modificada.imagen;
                tarjeta.label = tarjeta_modificada.label;
                tarjeta.prioridad = tarjeta_modificada.prioridad;
                tarjeta.tarjeta = tarjeta_modificada.tarjeta;
                tarjeta.subtarea = tarjeta_modificada.subtarea;
            }
        }
        this.guardarPanel2LocalStorage();
    }

    modificarPanel3(tarjeta_modificada, identificador_tarjeta) {
        for( const tarjeta of this.panel3 ){
            console.log(tarjeta, identificador_tarjeta);
            if (tarjeta.id == identificador_tarjeta) { //en mi array lo tengo como numérico y al tomarlo del HTML es string, por eso dos iguales
                tarjeta.color = tarjeta_modificada.color;
                tarjeta.descripcion = tarjeta_modificada.descripcion;
                tarjeta.imagen = tarjeta_modificada.imagen;
                tarjeta.label = tarjeta_modificada.label;
                tarjeta.prioridad = tarjeta_modificada.prioridad;
                tarjeta.tarjeta = tarjeta_modificada.tarjeta;
                tarjeta.subtarea = tarjeta_modificada.subtarea;
            }
        }
        this.guardarPanel3LocalStorage();
    }


    guardarPanel1LocalStorage() {
        localStorage.setItem('panel1', JSON.stringify(this.panel1));
    }

    cargarPanel1LocalStorage() {
        this.panel1 = (localStorage.getItem('panel1'))
                        ? JSON.parse(localStorage.getItem('panel1'))
                        :[];
        this.panel1 = this.panel1.map( Tarjeta.fromJSON );

        // this.panel1 = JSON.parse(localStorage.getItem("panel1"));
    }

    guardarPanel2LocalStorage() {
        localStorage.setItem('panel2', JSON.stringify(this.panel2));
    }

    cargarPanel2LocalStorage() {
        this.panel2 = (localStorage.getItem('panel2'))
                        ? JSON.parse(localStorage.getItem('panel2'))
                        :[];
        this.panel2 = this.panel2.map( Tarjeta.fromJSON );

        // this.panel2 = JSON.parse(localStorage.getItem("panel2"));
        
    }

    guardarPanel3LocalStorage() {
        localStorage.setItem('panel3', JSON.stringify(this.panel3));
    }

    cargarPanel3LocalStorage() {
        this.panel3 = (localStorage.getItem('panel3'))
                        ? JSON.parse(localStorage.getItem('panel3'))
                        :[];
        this.panel3 = this.panel3.map( Tarjeta.fromJSON );

        // this.panel3 = JSON.parse(localStorage.getItem("panel3"));
    }
}