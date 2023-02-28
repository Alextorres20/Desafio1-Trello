import { Tarjeta } from "./Tarjeta";
export class subTarea {

    static fromJSON( { id, subtarea, completado} ) {
        const tempSubTarea = new subTarea(subtarea)
        tempSubTarea.id = id;
        tempSubTarea.subtarea = subtarea
        tempSubTarea.completado = completado;

        return tempSubTarea;
    }

    constructor(subtarea){
        this.id = new Date().getTime();
        this.subtarea = subtarea.value;
        this.completado = subtarea.checked;
    }
}