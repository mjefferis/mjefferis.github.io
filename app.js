var config = {
    apiKey: "AIzaSyALnRyWAKcc5fc1q0vRiCegRUw7FsE-HQI",
    authDomain: "personal-website-6fce1.firebaseapp.com",
    databaseURL: "https://personal-website-6fce1.firebaseio.com",
    projectId: "personal-website-6fce1",
    storageBucket: "personal-website-6fce1.appspot.com",
    messagingSenderId: "483325953084"
};
firebase.initializeApp(config);

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
    else{

        $('#successform').show();
        setTimeout(function () { $("#successform").hide(); }, 3000);

        var newSubmission = {
            name: name,
            email: email,
            message: message

        };

        database.ref().push(newSubmission);

        $("#name").val("");
        $("#email").val("");
        $("#message").val("");

    }
});







