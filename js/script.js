//constructor
function Dog(breed, age, mode) {
    this.breed = breed;
    this.age = age;
    this.mode = mode;
}

//Function that calculates price of the Dog


Dog.prototype.calculatePrice = function () {

    switch (this.age) {
        case 'Adult':
            if (this.breed === 'Bull Dog') {
                this.price = 50000;
            } else if (this.breed === 'Belgian Malinois') {
                this.price = 60000;
            } else if (this.breed === 'Rotweiler') {
                this.price = 70000;
            } else if (this.breed === 'German Shepherd') {
                this.price = 80000;
            } else if (this.breed === 'The Dalmatian') {
                this.price = 90000;
            } else if (this.breed === 'The Boxer') {
                this.price = 100000;
            } else if (this.breed === 'The Poodle') {
                this.price = 110000;
            } else if (this.breed === 'The Golden Retriever') {
                this.price = 120000;
            } else if (this.breed === 'Klein') {
                this.price = 130000;
            } else if (this.breed === 'Japanese Splitz') {
                this.price = 140000;
            } else if (this.breed === 'pugdog') {
                this.price = 150000;
            } else if (this.breed === 'Labrador Retriever') {
                this.price = 160000;
            }
            break;

        case 'Puppy':
        
            if (this.breed === 'Bull Dog') {
                this.price = 25000;
            } else if (this.breed === 'Belgian Malinois') {
                this.price = 30000;
            } else if (this.breed === 'Rotweiler') {
                this.price = 35000;
            } else if (this.breed === 'German Shepherd') {
                this.price = 40000;
            } else if (this.breed === 'The Dalmatian') {
                this.price = 25000;
            } else if (this.breed === 'The Boxer') {
                this.price = 30000;
            } else if (this.breed === 'The Poodle') {
                this.price = 35000;
            } else if (this.breed === 'The Golden Retriever') {
                this.price = 40000;
            } else if (this.breed === 'The Golden Retriever') {
                this.price = 45000;
            } else if (this.breed === 'Klein') {
                this.price = 50000;
            } else if (this.breed === 'Japanese Splitz') {
                this.price = 55000;
            } else if (this.breed === 'pugdog') {
                this.price = 60000;
            } else if (this.breed === 'Labrador Retriever') {
                this.price = 65000;
            }
            break;


    }

    return this.price;


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


//navigation bar

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
 
    else {
        $('nav').removeClass('black');
    }
})
