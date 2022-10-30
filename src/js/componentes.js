// import webpacklogo from '../assets/img/webpack-logo.png'
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
    document.querySelector("button.tema-normal").addEventListener("click", function(){
        document.querySelector("body").classList.remove("invertido");
        document.querySelector("body").classList.add("normal");
    });
}

export const mostrarTemaInvertido = () => {
    document.querySelector("button.tema-invertido").addEventListener("click", function(){
        document.querySelector("body").classList.remove("normal");
        document.querySelector("body").classList.add("invertido");
    });
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

export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!!!`;
    document.body.append(h1);

    // Img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
} 