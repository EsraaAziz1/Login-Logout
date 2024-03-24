let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign-in")

let getUsername = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click", function (a) {
    a.preventDefault()
    if (username.value === "" || password.value === "") {
        alert("please fill in data")
    }
    else {
        if ((getUsername && getUsername.trim() === username.value) && (getPassword && getPassword.trim() === password.value)) {

            setTimeout(() => {
                window.location = "app.html"
            }, 1500)
        }
        else {
           // alert("username or password incorrect")
           console.log(getUsername)
        }
    }
})

