$(document).ready(function(){
    $("#checky").click(function(){
        $("#myForm").toggle("5000")
    });
});
$(document).ready(function(){
    $("#check").click(function(){
        $("#myFrm").toggle("5000")
    });
});
$(document).ready(function(){
    $("#chec").click(function(){
        $("#myFm").toggle("5000")
    });
});
$(document).ready(function(){
    $("#che").click(function(){
        $("#myF").toggle("5000")
    });
});

//navigation bar

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
 
    else {
        $('nav').removeClass('black');
    }
})
