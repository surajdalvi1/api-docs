// add your code here

$( document ).ready(function() {

    if(window.location.pathname=="/cda"){
        $(".cda").removeClass("active");
        $(".cma").addClass("active");
    }else if (window.location.pathname=="/cma") {
        $(".cda").addClass("active");
        $(".cma").removeClass("active");
    }else{
        $(".cda").addClass("active");
        $(".cma").addClass("active");
    }

});