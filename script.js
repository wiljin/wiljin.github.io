var main = function(){

$('.dropdown-toggle').click(function(){
    $('.dropdown-menu').toggle();
});

$('.arrow-next').click(function(){
    var current_dot = $('.active-dot');
    var next_dot = current.next();
    if(next_dot == 0)
        next_dot = $('.dot').first();
    current_dot.removeClass('active');
    next_dot.addClass('active');
    
});
};

$(document).ready(main);