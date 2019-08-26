"use strict";

$('#loginModal').modal({
  show: false
});
$('#messageModal').modal({
  show: false
});
$('#loginErrModal').modal({
  show: false
});
$('#detailModal').modal({
  show: false
});
$('#authModal').modal({
  show: false
});

$('#rowModal').modal({
  show: false
});

$(function() {
  $( ".datepicker" ).datepicker();
  } );


if (window.location.href.indexOf('login.html') > -1) {
  var input = document.getElementById("password");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("login").click();
    }
  });
}

$('[data-toggle="popover"]').popover(); //login form validation

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username === '' || password === '') //alert("Login credentials cannot be Empty!")
    $('#loginErrModal').modal('show');else if (username === 'PCAstudent' && password === 'C4DE_learn') {
    sessionStorage.setItem("authState", "authenticated");
    window.location.href = 'messageboard.html';
  } else {
    //alert("Incorrect username or password! ")
    $('#detailModal').modal('show');
  }
}; //Function to display LoginInfo

 function loginInfo() {
  //alert("Your Username is: 'PCAstudent' \nPassword is:'C4DE_learn'")
  $('#loginModal').modal('show');
};

 function messageOne() {
  return document.getElementById("customCheck1").checked = true;
};

 function messageTwo() {
  return document.getElementById("customCheck2").checked = true;
}; //function to navigate to record page if both messages are read


 function route() {
  if (document.getElementById("customCheck1").checked && document.getElementById("customCheck2").checked) window.location.href = 'patientrecord.html';else //alert("Please read all messages to proceed")
    $('#messageModal').modal('show');
}; //function to add rows to table in foodrecordPage


var count = 1;

function addRow() {
  
  count++;

  if (count <= 10) {
    
    var row = document.getElementById("rowToClone"); // find row to replicate

    var table = document.getElementById("tableToModify"); // find table to append to

    var clone = row.cloneNode(true); // copy children 
    // clone.id = "newID"; // change id or other attributes/contents
    // table.appendChild(clone); // add new row to end of tabl

    var InputType = clone.getElementsByClassName("foodrecord");

    for (var i = 0; i < InputType.length; i++) {
      if (InputType[i].name == 'role') {// InputType[i].type=='checkbox'
        //  InputType[i].checked = false; 
        //&&InputType[i].value!=' ' 
      } else {
        InputType[i].value = '';
      }
    }

    table.appendChild(clone);
  } else {
    $('#rowModal').modal('show');
  }
};

// $("#tableToModify").on('click', 'input.addButton', function () {
// $clone.find('.datepicker').removeAttr('id').removeClass('hasDatepicker'); 
// $clone.find('.datepicker').datepicker({
//   autoclose: true
// });
// });