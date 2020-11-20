$(document).ready(function () {
  $(".btn-search").on("click", function (e) {
    email = $('input[type="search"]').val();
    $.ajax({
      type: "GET",
      crossDomain: true,
      url:
        "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + email + '.',
      dataType: "jsonp",
      success: function (data) {
        //if the request is successful do something with the data
        alert(data);
      },
      error: function (request) {
        //if the request fails, log what happened
        console.log(request);
        alert(JSON.stringify("Error: " + request));
      },
    });
  });
});
