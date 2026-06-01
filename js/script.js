const imagen = document.getElementById("imagen");
const boton = document.getElementById("boton");

async function obtenerImagen(){
    const respuesta = await fetch(
        "https://api.thecatapi.com/v1/images/search"
    );
    const datos = await respuesta.json();

    imagen.src = datos[0].url;
}

boton.addEventListener("click", obtenerImagen);
obtenerImagen();