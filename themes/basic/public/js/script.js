// add your code here

$( document ).ready(function() {
    var currentpath = window.location.pathname;
    $('.header-right li a').each(function(){
        var anchor_link = $(this).attr('href');
        if (currentpath == anchor_link){
            $(this).parent().addClass('active');
        }
    });

});