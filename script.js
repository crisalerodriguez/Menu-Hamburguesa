// GALERIA SLIDER MOBILE //
$(document).ready(function() {
    let $sliderInner = $(".img-container-mobile");
    let $images = $sliderInner.find("img");
    let index = 1;

    setInterval(function() {
        // Porcentaje de desplazamiento horizontal
        let percentage = index * -100;
        $sliderInner.css("transform", "translateX(" + percentage + "%)");
        index++;
        // Si llegam al final, vuelve a empezar
        if (index > $images.length - 1) {
            index = 0;
        }
    }, 3000);
});


// GALERIA SLIDER DESKTOP //
$(document).ready(function() {
    let $sliderInner = $(".container");
    let $images = $sliderInner.find("img");
    let index = 1;

    setInterval(function() {
        let percentage = index * -100;
        $sliderInner.css("transform", "translateX(" + percentage + "%)");
        index++;
        if (index > $images.length - 1) {
            index = 0;
        }
    }, 3000);
});

// MENU FUNCIONALIDAD
$(document).ready(function() {
    // Agrega un evento de clic al botón de hamburguesa
    $("#btnMenu").click(function() {
        // Muestra u oculta el menú de navegación con una animación de deslizamiento
        $(".main-nav").slideToggle();
    });
});

