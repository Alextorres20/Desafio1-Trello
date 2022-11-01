// import webpacklogo from '../assets/img/webpack-logo.png'
export const mostrarAcordeon = () => {
    const iconoHamburguesa = document.querySelector('.menu-Acordeon');
    const contenido = document.querySelector('.contenedor-Acordeon');
    iconoHamburguesa.addEventListener('click', (e) =>{
        contenido.classList.toggle('activado');
        document.body.classList.toggle('opacidad');

        const rutaActual = e.target.getAttribute('src');
        if(rutaActual == '../../imagenes/Menú-hamburguesa.png'){
            e.target.setAttribute('src','../../imagenes/Menú-hamburguesa.png');
        }
        else{
            e.target.setAttribute('src','../../imagenes/Menú-hamburguesa2.png');
        }
    })
}

export const mostrarSubMenu = () => {
    const menu = document.querySelectorAll('.opciones');
    menu.forEach(function(item){
        item.addEventListener('click', function(i){
            const elemento = i.target.parentNode;
            elemento.children[1].classList.toggle('activo');
        })
    })
}

export const mostrarTemaNormal = () => {
    const boton = document.querySelectorAll("button.tema-normal");
    boton.forEach(function(item){
        item.addEventListener("click", function(){
            document.querySelector("body").classList.remove("invertido");
            document.querySelector("body").classList.add("normal");
        })
    })
}

export const mostrarTemaInvertido = () => {

    const boton = document.querySelectorAll("button.tema-invertido");
    boton.forEach(function(item){
        item.addEventListener("click",function(){
            document.querySelector("body").classList.remove("normal");
            document.querySelector("body").classList.add("invertido");
        })
    })
}

export const mostrarOpcionesTarea = () => {
    const botonesAñadir = document.querySelectorAll("button.añadir");
    botonesAñadir.forEach(function(boton){
        boton.addEventListener("click", function(){
            document.querySelector(".añadirTarjeta").classList.add("activo");
        });
    })
}

export const salirOpcionesTarea = () => {
    const botonSalir = document.querySelector("button.salirTarjeta").addEventListener("click", function(){
        document.querySelector(".añadirTarjeta").classList.remove("activo");
    })
}


// export const saludar = ( nombre ) => {
//     console.log('Creando etiqueta h1');
//     const h1 = document.createElement('h1');
//     h1.innerText = `Hola, ${nombre}!!!!`;
//     document.body.append(h1);

//     // Img
//     // const img = document.createElement('img');
//     // img.src = webpacklogo;
//     // document.body.append( img );
// } 