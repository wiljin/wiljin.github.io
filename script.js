var main = function(){

$('.dropdown-toggle').click(function(){
    $('.dropdown-menu').toggle();
});

$('.arrow-next').click(function(){
    var current_slide = $('.active-slide');
    var next_slide = current_slide.next();
    var current_dot = $('.active-dot');
    var next_dot = current_dot.next();
    if(next_slide.length === 0)
    {
        next_slide = $('.slide').first();
        next_dot = $('.dot').first();
    }   
    current_slide.fadeOut(500).removeClass('active-slide');
    next_slide.fadeIn(500).addClass('active-slide');
    current_dot.removeClass('active-dot');
    next_dot.addClass('active-dot');
    
});
};

$(document).ready(main);