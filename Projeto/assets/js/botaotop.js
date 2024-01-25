$(function() {
    var header = jQuery(".botao");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 100) { // Altura da pagina em pixels
            header.removeClass('display-none');
        } else {
            header.addClass("display-none");
        }
    });
});
