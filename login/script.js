let login = {
  name: "MuhamadBayu",
  password: "admin",
};

$(document).ready(function () {
  $(".btn").click(function (e) {
    e.preventDefault();
    if ($("#username").val() === login.name && $("#password").val() === login.password) {
      window.location.replace("https://ganes556.github.io/bayu/main/");
      sessionStorage.setItem("user", $("#username").val());
      sessionStorage.setItem("pass", $("#password").val());
    } else {
      $(".form-control").addClass("is-invalid");
    }
  });
});
