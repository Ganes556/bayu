if (sessionStorage.getItem("user") !== "MuhamadBayu" && sessionStorage.getItem("pass") !== "admin") {
  window.location.replace("/");
}
$(document).ready(function () {
  $("a.log-out").click(function (e) {
    window.location.replace("/");
    sessionStorage.clear();
  });
});
