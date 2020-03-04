//constructor
function Dog(breed,age,mode){
    this.breed = breed;
    this.age = age ;
    this.mode = mode;
}

//Function that calculates price of the Dog based on the age and breed

Dog.prototype.calculatePrice = function(){

    switch(this.age){
        case 'Adult':
            if(this.breed === 'Bull Dog'){
                this.price = 50000;
            }else if(this.breed === 'Belgian Malinois'){
                this.price = 60000;
            }else if(this.breed === 'Rotweiler'){
                this.price = 70000 ;
            }else if(this.breed === 'German Shepherd'){
                this.price = 80000 ;
            }
            break;

        case 'Puppy':
            case 'Adult':
            if(this.breed === 'Bull Dog'){
                this.price = 25000;
            }else if(this.breed === 'Belgian Malinois'){
                this.price = 30000;
            }else if(this.breed === 'Rotweiler'){
                this.price = 35000 ;
            }else if(this.breed === 'German Shepherd'){
                this.price = 40000 ;
            }
            break;
            

    }

    return this.age ;
    
   
} 

//Function that calculates the delivery fee

Dog.prototype.calculateDelivery = function(){
    if(this.mode === 'Delivery'){
        this.deliveryFee =  1000 ;
    }else if(this.mode === 'No Delivery'){
        this.deliveryFee = 0 ;
    }
    return this.deliveryFee;
}





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

$(document).ready(function(){

    $('#guard').click(function(event){     // click event for guard dogs
        var dogBreed =  $('#breed-1 option:selected').val();
        var dogAge   =  $('#age-1 option:selected').val();
        var delivered  =  $('#delivery-1 option:selected').val();
        var quantity = parseInt($('#quantity').val());

        var newDog = new Dog(dogBreed,dogAge,delivered);
         dogPrice = newDog.calculatePrice();
         dogDeliveryFee = newDog.calculateDelivery();


       

        alert('The Breed of the Dog is ' + newDog.breed + ' the Age is ' + newDog.age + ' Number of dogs ordered is ' + quantity + ' and the price is ' + (quantity * newDog.price)  + ' mode of purchase is '
         + newDog.mode + ' and the Delivery fee is '  + newDog.deliveryFee) ;
        event.preventDefault();

    })
    



})


















































//navigation bar

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
})