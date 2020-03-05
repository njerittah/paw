function contacts(name, email, number, message){
  this.name=name;
  this.email=email;
  this.number=number;
  this.message=message;
}
contacts.prototype.fullContact= function(){
  return this.name + ", "+this.email+ ", "+ this.number+ ", "+this.message
}

$(document).ready(function(){
  $("button#submit").click(function(event){
    event.preventDefault();
    var name= $("input#name").val();
    var email= $("input#email").val();
    var number= $("input#phone-number").val();
    var message=$("input#message").val();
    var details=[]
    var newUser= new contacts(name, email, number, message)
    details.push(newUser)
    localStorage.setItem('details', newUser.fullContact())
    alert("We have received your message ,thank you for communicating with us")
    $("#name").val("");
    $("#email").val("");
    $("#number").val("");
    $("#message").val("");
  });
})

//navigation
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
})
