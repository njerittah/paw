//constructor
function Dog(breed, age, mode) {
    this.breed = breed;
    this.age = age;
    this.mode = mode;
}

//Function that calculates price of the Dog based on the age and breed

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
        case 'Adult':
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

//Function that calculates the delivery fee

Dog.prototype.calculateDelivery = function () {
    if (this.mode === 'Delivery') {
        this.deliveryFee = 1000;
    } else if (this.mode === 'No Delivery') {
        this.deliveryFee = 0;
    }
    return this.deliveryFee;
}



//Some javascript effects

$(document).ready(function () {
    $("#checky").click(function () {
        $("#myForm").toggle("5000")
    });
});
$(document).ready(function () {
    $("#check").click(function () {
        $("#myFrm").toggle("5000")
    });
});
$(document).ready(function () {
    $("#chec").click(function () {
        $("#myFm").toggle("5000")
    });
});
$(document).ready(function () {
    $("#che").click(function () {
        $("#myF").toggle("5000")
    });
});

<<<<<<< HEAD
$(document).ready(function () {
=======
$(document).ready(function(){
>>>>>>> ab1640e0ee1d873c9d7688640dc375eb43e0a594

    $(':button').click(function (event) {

        if (this.id === 'guard') {                     //To purchase a guard dog

            $('#service').prop('disabled', true);
            $('#sniff').prop('disabled', true);

            var dogBreed = $('#breed-1 option:selected').val();
            var dogAge = $('#age-1 option:selected').val();
            var delivered = $('#delivery-1 option:selected').val();
            var quantity = parseInt($('#quantity-1').val());

            var newDog = new Dog(dogBreed, dogAge, delivered);
            dogPrice = newDog.calculatePrice();
            dogDeliveryFee = newDog.calculateDelivery();




            $('.output').show();
            $('.dog-breed').text(newDog.breed);
            $('.dog-age').text(newDog.age);
            $('.dog-quantity').text(quantity);
            $('.dog-price').text(newDog.price);
            $('.dog-delivery').text(newDog.deliveryFee);
            $('.dog-total').text((quantity * newDog.price) + newDog.deliveryFee);



        } else if (this.id === 'service') {                        //To purchase a service dog
            $('#guard').prop('disabled', true);
            $('#sniff').prop('disabled', true);


            var dogBreed = $('#breed-2 option:selected').val();
            var dogAge = $('#age-2 option:selected').val();
            var delivered = $('#delivery-2 option:selected').val();
            var quantity = parseInt($('#quantity-2').val());

            var newDog = new Dog(dogBreed, dogAge, delivered);
            dogPrice = newDog.calculatePrice();
            dogDeliveryFee = newDog.calculateDelivery();


            $('.output').show();
            $('.dog-breed').text(newDog.breed);
            $('.dog-age').text(newDog.age);
            $('.dog-quantity').text(quantity);
            $('.dog-price').text(newDog.price);
            $('.dog-delivery').text(newDog.deliveryFee);
            $('.dog-total').text((quantity * newDog.price) + newDog.deliveryFee);



        } else if (this.id === 'sniff') {                      //To purchase a sniff dog
            $('#guard').prop('disabled', true);
            $('#service').prop('disabled', true);



            var dogBreed = $('#breed-3 option:selected').val();
            var dogAge = $('#age-3 option:selected').val();
            var delivered = $('#delivery-3 option:selected').val();
            var quantity = parseInt($('#quantity-3').val());

            var newDog = new Dog(dogBreed, dogAge, delivered);
            dogPrice = newDog.calculatePrice();
            dogDeliveryFee = newDog.calculateDelivery();

            if (newDog.mode === 'No Delivery') {
                $('.output').show();
                $('.dog-breed').text(newDog.breed);
                $('.dog-age').text(newDog.age);
                $('.dog-quantity').text(quantity);
                $('.dog-price').text(newDog.price);
                $('.dog-delivery').text(newDog.deliveryFee);
                $('.dog-total').text((quantity * newDog.price) + newDog.deliveryFee);

            } else {
                $('.output').show();
                $('.dog-breed').text(newDog.breed);
                $('.dog-age').text(newDog.age);
                $('.dog-quantity').text(quantity);
                $('.dog-price').text(newDog.price);
                $('.dog-delivery').text(newDog.deliveryFee);
                $('.dog-total').text((quantity * newDog.price) + newDog.deliveryFee);

                $("#address-3").append('<div class="new-address bg-success">' +
                    '<div class="form-group">' +
                    '<label for="new-street">Name</label>' +
                    '<input type="text" placeholder="Enter Name.." class="form-control new-street">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="phone-no">Phone number</label>' +
                    '<input type="number" placeholder="Enter phone number.." class="form-control new-city">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="street-name">Street name</label>' +
                    '<input type="text"  placeholder="Enter street name.." class="form-control new-county">' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="county">county/city</label>' +
                    '<input type="text"  placeholder="Enter county/city name..." class="form-control new-county">' +
                    '</div>' +
                    '</div>' +
                    '<button type="submit" class="btn btn-info btn-block" id="confirm-3">Confirm</button><br><br></br>'

                );



            }






        }

        event.preventDefault();


    })

})


<<<<<<< HEAD
















































=======
>>>>>>> ab1640e0ee1d873c9d7688640dc375eb43e0a594
//navigation bar

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
 
    else {
        $('nav').removeClass('black');
    }
<<<<<<< HEAD
})
=======
})
>>>>>>> ab1640e0ee1d873c9d7688640dc375eb43e0a594
