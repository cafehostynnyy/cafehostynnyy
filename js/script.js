$(document).ready(function(){
    $('a[href^="#menu"], *[data-href^="#menu"]').on('click', function(e){
        e.preventDefault();
        var t = 3000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});