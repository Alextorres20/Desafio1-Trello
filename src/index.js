import './css/mia.css';

import {mostrarAcordeon,  mostrarSubMenu, mostrarTemaNormal, mostrarTemaInvertido , mostrarOpcionesTarea, salirOpcionesTarea} from './js/componentes';
import { Tarjeta, ListaTarjeta} from './js/clases';
import {} from './js/componentesTarjeta';

mostrarAcordeon();
mostrarSubMenu();
mostrarTemaNormal();
mostrarTemaInvertido();
mostrarOpcionesTarea();
salirOpcionesTarea();

export const listaTarjeta = new ListaTarjeta();

const tarjeta = new Tarjeta('Aprendiendo Clases');

listaTarjeta.nuevaTarjeta( tarjeta);


// import { cogerTarjeta } from './js/tarjeta';

// cogerTarjeta();

