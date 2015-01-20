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

$('.arrow-prev').click(function(){
    var current_slide = $('.active-slide');
    var prev_slide = current_slide.prev();
    var current_dot = $('.active-dot');
    var prev_dot = current_dot.prev();
    if(prev_slide.length === 0)
    {
        prev_slide = $('.slide').last();
        prev_dot = $('.dot').last();
    }
    current_slide.fadeOut(500).removeClass('active-slide');
    prev_slide.fadeIn(500).addClass('active-slide');
    current_dot.removeClass('active-dot');
    prev_dot.addClass('active-dot');
});
};

$(document).ready(main);