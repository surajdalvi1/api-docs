// add your code here

$( document ).ready(function() {

    if(window.location.pathname=="/cda"){
        $(".cda").addClass("active");
        $(".cma").removeClass("active");
    }else if (window.location.pathname=="/cma") {
        $(".cda").removeClass("active");
        $(".cma").addClass("active");
    }else{
        $(".cda").addClass("active");
        $(".cma").addClass("active");
    }

});