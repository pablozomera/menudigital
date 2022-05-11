jQuery('document').ready(function($){

    var menuBtn = $('.hamburger'),
        menu = $('.navegation ul'),
        quitar = $('ul');
    
    menuBtn.click(function() {
       
        if( menu.hasClass('show') ){
            
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });

    quitar.click(function() {
        menu.removeClass('show');
    });

    quitar.click(function() {
        menuBtn.removeClass('active');
     });
     
    });