$(document).ready(function () {

    $(".btn-search").on("click", function (e) {
        localStorage.clear();
        email = $('input[type="search"]').val();
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + email; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.text())
            .then(function (contents) {
                // if (contents == '[]') {
                //     console.log(contents)
                //     return;
                // } else {
                    console.log(contents);
                    localStorage.setItem('userObject', contents);
                    window.location.href = "result.html"; 
                // }
            })
            .catch((e) => console.log(e))
    });
});


