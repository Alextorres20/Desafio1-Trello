import './css/mia.css';

import {mostrarAcordeon,  mostrarSubMenu, mostrarTemaNormal, mostrarTemaInvertido} from './js/componentes';
import { ListaTarjeta, Tarjeta, subTareas} from './js/clases';
import { mostrarOpcionesTarea, moverTarjetas, construirHTML, construirSubTareaHTML} from './js/componentesTarjeta';

// export const contenidoTarjeta = new contenidoTarjeta();

mostrarAcordeon();
mostrarSubMenu();
mostrarTemaNormal();
mostrarTemaInvertido();
export const listaTarjetas = new ListaTarjeta();
listaTarjetas.panel1.forEach(tarjeta => {
    construirHTML(tarjeta, "panel1");
    tarjeta.subtarea.forEach(subtarea => {
        construirSubTareaHTML(subtarea, "panel1");
    })

});
listaTarjetas.panel2.forEach(tarjeta => {
    construirHTML(tarjeta, "panel2");
    tarjeta.subtarea.forEach(subtarea => {
        construirSubTareaHTML(subtarea, "panel2");
    })
});
listaTarjetas.panel3.forEach(tarjeta => {
    construirHTML(tarjeta, "panel3");
    tarjeta.subtarea.forEach(subtarea => {
        construirSubTareaHTML(subtarea, "panel3");
    })
});

moverTarjetas();
mostrarOpcionesTarea();
// export const subTareas = new subTarea();
// export const contenidoTarjeta = new contenidoTarjeta();

// export const listaTarjeta = new ListaTarjeta();


// import { cogerTarjeta } from './js/tarjeta';

// cogerTarjeta();

