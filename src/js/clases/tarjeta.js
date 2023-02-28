import { subTarea } from "./subTareas";
export class Tarjeta {

    static fromJSON({ tarjeta, id, descripcion, prioridad, label, color, imagen, subtarea}){
        const tempTarjeta = new Tarjeta(tarjeta);
        tempTarjeta.id = id;
        tempTarjeta.descripcion = descripcion;
        tempTarjeta.prioridad = prioridad;
        tempTarjeta.label = label;
        tempTarjeta.color = color;
        tempTarjeta.imagen = imagen;
        tempTarjeta.subtarea = subtarea;

        return tempTarjeta;
    
    }

    constructor( tarjeta, descripcion, prioridad, label, color, imagen) {
        this.tarjeta = tarjeta;
        this.id = new Date().getTime();
        this.descripcion= descripcion;
        this.prioridad = prioridad;
        this.label = label;
        this.color = color;
        this.imagen = imagen;
        this.subtarea = [];
    }

    nuevaSubTarea(subtarea){
        this.subtarea.push(subtarea);
        this.guardarLocalStorage();
    }

    eliminarSubTarea(id){
        this.subtarea = this.subtarea.filter( subtarea => subtarea.id != id );
    }


    guardarLocalStorage() {
        //stringify convierte un objeto, en este caso un array en un JSON perfecto.
        localStorage.setItem('subtarea', JSON.stringify(this.subtarea));
    }

    cargarLocalStorage() {
        this.subtarea = (localStorage.getItem('subtarea')) 
                        ? JSON.parse(localStorage.getItem('subtarea'))
                        :[];

        //map permite recorrer todos los elementos de un array y devolverlos
        //mutados con algún cambio, en este caso devuelve una instancia de Todo
        // this.todo = this.todo.map( obj => Todo.fromJSON( obj ));
        this.subtarea = this.subtarea.map( subTarea.fromJSON );
    }

    
}