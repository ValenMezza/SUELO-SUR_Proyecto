

const catalogoProductos = [
    {id:1 ,nombre: 'MAQUINARIA', Precio: '20000'},
    {id:2 ,nombre: 'CONTENEDOR', Precio: '9000'}, 
    {id:3 ,nombre: 'ARENA',      Precio: '1500'},
    {id:4 ,nombre: 'TIERRA',     Precio: '1800'},
    {id:5 ,nombre: 'PIEDRA',     Precio: '2500'},
];

let selectCarrito = document.querySelector("select");
// selectCarrito.appendChild('option')
let divCard = document.getElementById('carrito-card')

catalogoProductos.forEach(element => {
    let option = document.createElement('option');
    option.innerHTML = element.nombre;
    selectCarrito.appendChild(option)

    let info
});




















// selectCarrito.addEventListener('click', mostrarProducto);


// const inputName = document.getElementById("name-input");
// inputName.addEventListener()  