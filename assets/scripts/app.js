$(document).ready(function () {
//   $(".btn-search").on("click", function () {
    email = $('input[type="search"]').val();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + email; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.text())
    .then(contents => alert(contents))
    .catch(() => alert("Can’t access " + url + " response. Blocked by browser?"))
//   });
});
