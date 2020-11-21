$(document).ready(function () {
    setContent();
});

function setContent() {
  if (window.localStorage && localStorage.userObject) {
    userObject = localStorage.getItem("userObject");
    retreivedObject = JSON.parse(userObject);
    if (JSON.stringify(retreivedObject) == "[]") {
      $(".result-desc").text("Oops!  We can't seem to find the email you're looking for. Want to try again?");
    } else {
      $(".username").append(
        retreivedObject.first_name + " " + retreivedObject.last_name
      );
      $(".user-description").append(retreivedObject.description);
      $(".address").append("<p>" + retreivedObject.address + "</p>");
      $(".email").append("<p>" + retreivedObject.email + "</p>");

      for (const phone_number in retreivedObject.phone_numbers) {
        $(".phone-num").append(
          "<p>" + `${retreivedObject.phone_numbers[phone_number]}` + "</p>"
        );
      }

      for (const relative in retreivedObject.relatives) {
        $(".relatives").append(
          "<p>" + `${retreivedObject.relatives[relative]}` + "</p>"
        );
      }

      $(".result-card").show()
    }
  }
}
