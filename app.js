//=========================== SLIDER =======================================
$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1000 // Set the autoplay speed in milliseconds
  });
});

//=========================== FORM VALIDATION =======================================
$().ready(function () {

  $("#signupForm").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      username: {
        required: true,
        minlength: 3
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      username: {
        required: "Please enter a username",
        minlength: " Consist of at least 2 characters"
      },
      password: {
        required: "Please provide a password",
        minlength: "At least 5 characters long"
      },
      confirm_password: {
        required: "Please provide a password",
        minlength: " At least 5 characters long",
        equalTo: "Enter the same password "
      },
      email: "Enter valid email address"
    }
  });


});

//=========================== PHOTO GALLERY =======================================
$(function () {
  "use strict";
  $(".argonbox a").click(function () {
    $(this).argonBox({
      "duration": "fast"
    });
    return false;
  });
});