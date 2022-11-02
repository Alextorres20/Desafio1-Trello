export class contenidoTarjeta {

    constructor(titulo, descripcion, prioridad, imagen){
        this.titulo  = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad
        this.subTareas = [];
        this.imagen = imagen;
    }

    nuevaSubTarea(subTarea){
        this.subTareas.push(subTarea);
    }

    eliminarSubTarea(){

    }
}