if (sessionStorage.getItem("user") !== "MuhamadBayu" && sessionStorage.getItem("pass") !== "admin") {
  window.location.replace("/bayu/");
}
$(document).ready(function () {
  $("a.log-out").click(function (e) {
    window.location.replace("/bayu/");
    sessionStorage.clear();
  });
});
