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
// home page
var username = document.getElementById("username");
var Logout = document.getElementById("Logout");

var users = [];
// fill the array from local storage
// regex pattern
const userNameRegex = /^[a-zA-Z0-9_]{3,15}$/;
const userEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.[a-zA-Z]*)(?=.*\d)[a-zA-Z\d@!#$%&*]{8,16}$/ 



go_to_signup.addEventListener("click", function () {
    loginDiv.classList.add("hidden");
    signUpDiv.classList.remove("hidden");
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
    if ( userNameRegex.test(user_info.signUpName)   && userEmailRegex.test(user_info.signUpEmail) &&  passwordRegex.test(user_info.signUpPass)) {
        users.push(user_info);
        go_to_login.click();
        reset();
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        // else if must be included using classadd add invaild to form control class
        console.log('fill the form')

    }

})


// login
loginBtn.addEventListener("click", () => {
    var users_list = JSON.parse(localStorage.getItem('users'));
    for (i = 0; i < users_list.length; i++) {

        if (loginEmail.value == users_list[i].signUpEmail && loginPass.value == users_list[i].signUpPass) {
            // go to home page 
            console.log('loged in successful')
            break;
        } else {
            // show error message 
            console.log('failed')
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

// log out from home page to index