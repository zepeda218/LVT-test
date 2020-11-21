$(document).ready(function () {
  $(".btn-search").on("click", function (e) {
    localStorage.clear();
    email = $('input[type="text"]').val();
    if (validateEmail(email)) {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url =
        "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + email;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          console.log(contents);
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
        })
        .catch((e) => console.log(e));
    } else {
      $('input[type="text"]').addClass("error");
      $('span.floating-label').addClass("error");
      $(".floating-label").text("Please add a valid email address");
    }
  });
});

function validateEmail(email) {
  regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email.match(regEx)) {
    return true;
  } else {
    return false;
  }
}
