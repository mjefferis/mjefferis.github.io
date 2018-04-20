var config = {
    apiKey: "AIzaSyC6919Es1aUW-UFbq-aIphnb05QImE1X_s",
    authDomain: "live-37774.firebaseapp.com",
    databaseURL: "https://live-37774.firebaseio.com",
    projectId: "live-37774",
    storageBucket: "live-37774.appspot.com",
    messagingSenderId: "832287297965"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$('.alert').hide(); 

$('#A').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".jumbotron").offset().top
    }, 1);
    /*$("#A").velocity({
        translateY: "10px"
      }, {
        //loop: true
      }).velocity("reverse");*/
});

$('#P').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 1);

});

$('#C').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".connect").offset().top
    }, 1);

});
$('#B').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".education").offset().top
    }, 1);

});

$('#top').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".jumbotron").offset().top
    }, 2000);
});



$("#submit").on("click", function (event) {
    event.preventDefault();
   
    var fName = $("#fname").val().trim();
    var lName = $('#lname').val().trim(); 
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    if (fname === "" || lname === ""|| email === "" || message === "") {
        $('#emptyform').show();
        setTimeout(function () { $("#emptyform").hide(); }, 4000);
    }

   else if (email.indexOf('@')<0){

        $('#bademail').show();
        setTimeout(function () { $("#bademail").hide(); }, 4000);

    }
    else{
       

        $('#successform').show();
        setTimeout(function () { $("#successform").hide(); }, 3000);

       var newSubmission = {
            fname: fname,
            lname: lname,
            email: email,
            message: message

        }

        database.ref().push(newSubmission);

        $("#fname").val(" ");
        $("#lname").val(" "); 
        $("#email").val(" ");
        $("#message").val(" ");

    }
});
