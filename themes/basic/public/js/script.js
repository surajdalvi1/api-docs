// add your code here

$( document ).ready(function() {

    if(window.location.pathname=="/cda"){
        $(".pagetitle").text("Content Delivery API");
        $(".cda").addClass("active");
        $(".cma").removeClass("active");
    }else if (window.location.pathname=="/cma") {
        $(".pagetitle").text("Content Management API");
        $(".cda").removeClass("active");
        $(".cma").addClass("active");
    }else{
        $(".cda").addClass("active");
        $(".cma").addClass("active");
    }

});