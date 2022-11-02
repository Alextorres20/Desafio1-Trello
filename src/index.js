import './css/mia.css';

import {mostrarAcordeon,  mostrarSubMenu, mostrarTemaNormal, mostrarTemaInvertido , mostrarOpcionesTarea, salirOpcionesTarea} from './js/componentes';
import { Tarjeta, ListaTarjeta, contenidoTarjeta, subTareas} from './js/clases';
import {} from './js/componentesTarjeta';

// export const contenidoTarjeta = new contenidoTarjeta();

mostrarAcordeon();
mostrarSubMenu();
mostrarTemaNormal();
mostrarTemaInvertido();
mostrarOpcionesTarea();
salirOpcionesTarea();

// export const subTareas = new subTarea();
// export const contenidoTarjeta = new contenidoTarjeta();

// export const listaTarjeta = new ListaTarjeta();

const tarjeta = new Tarjeta('Aprendiendo Clases');

listaTarjeta.nuevaTarjeta( tarjeta);


// import { cogerTarjeta } from './js/tarjeta';

// cogerTarjeta();

