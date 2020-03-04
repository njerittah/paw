//constructor
function Dog(breed,age){
    this.breed = breed;
    this.age = age ;
}

//Function that calculates price of the Dog

Dog.prototype.calculatePrice = function(){
    if(this.breed === 'Bull Dog'){
        this.price = 50000;
    }else if(this.breed === 'Belgian Malinois'){
        this.price = 60000;
    }else if(this.breed === 'Rotweiler'){
        this.price = 70000 ;
    }else if(this.breed === 'German Shepherd'){
        this.price == 80000 ;
    }else{
        this.price = 0 ;
    }
    return this.price ;
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

    $('#guard').click(function(){     // click event for guard dogs
        var dogBreed =  $('#breed-1 option:selected').val();
        var dogAge   =  $('#age-1 option:selected').val();

        var newDog = new Dog(dogBreed,dogAge);
        dogPrice = newDog.calculatePrice();
        alert('The Breed of the Dog is ' + newDog.breed + ' the Age is ' + newDog.age + ' and the price is ' + newDog.price);


    })



})


