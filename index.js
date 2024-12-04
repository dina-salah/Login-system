var loginDiv = document.getElementById("loginDiv");
var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPass");
var loginBtn = document.getElementById("loginBtn");
var go_to_signup = document.getElementById("go_to_signup");
// signup form
var signUpDiv = document.getElementById("signUpDiv");
var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPass = document.getElementById("signUpPass");
var signUPBtn = document.getElementById("signUPBtn");
var go_to_login = document.getElementById("go_to_login");

var staticBackdrop = new bootstrap.Modal(document.getElementById("staticBackdrop"));
// home page
var userName = document.getElementById("userName");
var Logout = document.getElementById("Logout");

var users = [];
// fill the array from local storage
if (localStorage.getItem(users) !== null) {
    users = JSON.parse(localStorage.getItem(users))
} else {
    users = []
}
// regex pattern
const userNameRegex = /^[a-zA-Z0-9_]{3,15}$/;
const userEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.[a-zA-Z]*)(?=.*\d)[a-zA-Z\d@!#$%&*]{8,16}$/;




go_to_signup.addEventListener("click", function () {
    loginDiv.classList.add("hidden");
    signUpDiv.classList.remove("hidden");

    signUpEmail.classList.remove("is-valid");
    signUpName.classList.remove("is-valid");
    signUpPass.classList.remove("is-valid");


});
go_to_login.addEventListener("click", function () {
    signUpDiv.classList.add("hidden");
    loginDiv.classList.remove("hidden");
});



// create acc
signUPBtn.addEventListener("click", () => {
    var user_info = {
        signUpName: signUpName.value,
        signUpEmail: signUpEmail.value,
        signUpPass: signUpPass.value
    }
    // VALIDATION using regex
    if (userNameRegex.test(user_info.signUpName) && userEmailRegex.test(user_info.signUpEmail) && passwordRegex.test(user_info.signUpPass)) {
        users.push(user_info);
        go_to_login.click();
        reset();
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        alert('erorr')
    }
})

signUpName.addEventListener('input', function () {
    isValid();
});
signUpEmail.addEventListener('input', function () {
    emailvalidation();
});
signUpPass.addEventListener('input', function () {
    passvalidation();
});


function isValid() {
    // signUpName
    if (userNameRegex.test(signUpName.value) == true) {

        signUpName.classList.remove('is-invalid')
        signUpName.classList.add('is-valid')

    } else if (userNameRegex.test(signUpName.value) == false) {

        signUpName.classList.add('is-invalid')
        signUpName.classList.remove('is-valid')

    }


}

function emailvalidation() {
    if (userEmailRegex.test(signUpEmail.value) == true) {
        console.log("tt")
        signUpEmail.classList.remove('is-invalid')
        signUpEmail.classList.add('is-valid')

        console.log(`name true+ ${signUpEmail.value}`)
    } else if (userEmailRegex.test(signUpEmail.value) == false) {
        console.log("fffff")

        signUpEmail.classList.add('is-invalid')
        signUpEmail.classList.remove('is-valid')

        console.log(`name false+ ${signUpEmail.value}`)
    }
}

function passvalidation() {


    if (passwordRegex.test(signUpPass.value) == true) {
        signUpPass.classList.remove('is-invalid')
        signUpPass.classList.add('is-valid')

    } else if (passwordRegex.test(signUpPass.value) == false) {

        signUpPass.classList.add('is-invalid')
        signUpPass.classList.remove('is-valid')

    }


}
// login
loginBtn.addEventListener("click", () => {
    var users_list = JSON.parse(localStorage.getItem('users'));
    for (i = 0; i < users_list.length; i++) {

        if (loginEmail.value == users_list[i].signUpEmail && loginPass.value == users_list[i].signUpPass) {

            window.location.href = '\home.html'
            localStorage.setItem('current_user', users_list[i].signUpName)
            break;
        } else {
            staticBackdrop.show();
        }

    }
    reset();
})

function reset() {
    signUpName.value = '';
    signUpEmail.value = '';
    signUpPass.value = '';
    loginEmail.value = '';
    loginPass.value = '';
}


// document.addEventListener('DOMContentLoaded', function () {
//     var name = localStorage.getItem('current_user')
//     if(userName && name ){
//         userName.innerHTML = name;
//     console.log(name)
//     }else{
//     console.log('name error')
        
//     }

// })
// name in home
//  logout