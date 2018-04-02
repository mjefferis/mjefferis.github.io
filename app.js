var config = {
    apiKey: "AIzaSyBlUG4ucv7CypkpyqV0xxvCUoXW8ZIL040",
    authDomain: "my-first-firebase-projec-85758.firebaseapp.com",
    databaseURL: "https://my-first-firebase-projec-85758.firebaseio.com",
    projectId: "my-first-firebase-projec-85758",
    storageBucket: "my-first-firebase-projec-85758.appspot.com",
    messagingSenderId: "789893387238"
};
firebase.initializeApp(config);

$('.alert').hide(); 

$('#A').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".jumbotron").offset().top
    }, 1);
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
        scrollTop: $(".resume").offset().top
    }, 1);
});

$('#top').on('click', function () {
    $('html, body').animate({
        scrollTop: $(".jumbotron").offset().top
    }, 2000);
});

$("#submit").on("click", function (event) {

    function validateEmail(email) {
        if (email != undefined || email != '') {
            var regExp2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var match2 = email.match(regExp2);
            if (match2 && match2[2].length == 11) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    event.preventDefault();
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
        $('#emptyform').show();
        setTimeout(function () { $("#emptyform").hide(); }, 4000);
    }

    else if (!validateEmail(email)) {

        $('#bademail').show();
        setTimeout(function () { $("#bademail").hide(); }, 4000);

    }
    else {

        $('#successform').show();
        setTimeout(function () { $("#successform").hide(); }, 3000);

        var newMessage = {
            newName: name,
            newEmail: email,
            newMessage: message,

        }

        database.ref().push(newMessage);

    }
});







