$(document).ready(function () {

  $(".btn-search").on("click", function (e) {
    getContent();
  });

  $('input[type="text"]').keypress(function(event){
    keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        getContent();  
    }
});

});

/**
   * Makes a request to ltv API to search an specific email address.
   * If there's a response, it gets stored in the local storage and redirects to results page
   */
    function getContent(){
    localStorage.clear(); //Clears storage for next request
    email = $('input[type="text"]').val().toLowerCase();

    if (validateEmail(email)) {
      const proxyurl = "https://cors-anywhere.herokuapp.com/"; //Proxy that helps enable CORS requests
      const url =
        "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + email;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
        })
        .catch((e) => console.log(e));
    } else {
      $('input[type="text"]').addClass("error");
      $("span.floating-label").addClass("error");
      $(".floating-label").text("Please add a valid email address");
    }
  }

// Validates user's email request using regular expressions
function validateEmail(email) {
  regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email.match(regEx)) {
    return true;
  } else {
    return false;
  }
}
