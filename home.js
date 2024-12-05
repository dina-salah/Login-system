var userName = document.getElementById("userName");
var Logout = document.getElementById("Logout");




document.addEventListener('DOMContentLoaded', function () {
    var name = localStorage.getItem('current_user')
    if (userName && name) {
        userName.innerHTML = name;
    } else {
        logoutfun();
        alert('Something wrong');
    }

})

Logout.addEventListener('click', logoutfun)

function logoutfun() {
    window.location.href = '\index.html';
}