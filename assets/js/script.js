/* Header Scroll */
window.addEventListener('scroll', function() {
    let header = document.querySelector('header')

    header.classList.toggle('scrolled', window.scrollY>0)
})

/* Activar Tooltops */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* Cargar Autos */
const cars = document.querySelector('.products')

$(document).ready(function() {
    $.get({
        url:'assets/js/cars.json',
        dataType: 'json',
        success: function(respuesta){
            let html 
            $.each(respuesta.slice(0, 3), function(index, elemento){
                console.log(index);
                console.log(elemento);
    
                html = '<div data-aos="fade-up" class="col-lg-4 mb-4 mb-lg-0">'
                html +=        '<div class="car-card">'
                html +=            '<img src="'+ elemento.imagen +'" alt="">'
                html +=            '<h3>'+ elemento.marca + elemento.modelo +'</h3>'
                html +=            '<table class="w-100">'
                html +=                '<tr>'
                html +=                    '<th>Motor:</th>'
                html +=                    '<td class="text-end">'+ elemento.motor +'</td>'
                html +=                '</tr>'
                html +=                '<tr>'
                html +=                    '<th>Potencia:</th>'
                html +=                    '<td class="text-end">'+ elemento.potencia +'</td>'
                html +=                '</tr>'
                html +=                '<tr>'
                html +=                    '<th>Transmisión:</th>'
                html +=                    '<td class="text-end">'+ elemento.transmision +'</td>'
                html +=                '</tr>'
                html +=            '</table>'
                html +=            '<a href="#" class="disabledBtn">No disponible</a>'
                html +=        '</div>'
                html +=    '</div>'
    
                $('.products').append(html);
            })
        }, error: function(){
            cars.innerHTML = '<p class="text-danger">No se ve el listado de películas</p>'
        }
    })
})

/* Modal Marcas */
document.querySelectorAll('#modalesMarcas svg').forEach(function(svg) {
    svg.addEventListener('click', function() {
        let marca = $(this).attr("id")
        /* console.log(marca) */

        $('#modalMarca').on('shown.bs.modal', function() {
            const contenedor = document.querySelector('#modalContainer')
    
            $.get({
                url: 'assets/js/html/'+ marca +'.html',
                dataType: 'html',
                success: function(respuesta){
                    $('#modalContainer').empty();
                    contenedor.innerHTML = respuesta
                }, error: function(){
                    console.log('No se ve el listado de películas');
                }
            })
        })
    })
})

/* BOM */
document.querySelector('footer span').addEventListener('click', function() {
    window.open('https://maps.app.goo.gl/2Z5qBZPdk9veJwsz6', 'Recreo, Viña del Mar', 'resizable=yes,width=1000,height=1000')
})

// Slider
let slider = tns({
    container: '#modalesMarcas',
    items: 5,
    controls: false,
    nav: false,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400
});