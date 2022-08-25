function formvalidate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";


    if (email.indexOf("@") == -1 || email.length < 6) {
        text = " please Enter valid Email";
        error.innerHTML = text;
        return false;
    }

    else if (password.length < 5 || password.length > 15) {
        text = " please Enter valid password";
        error.innerHTML = text;
        return false;
    }

    else {
        alert("Done");
        return true;
    }
}
function openNav() {
    document.getElementById("mynaveside").style.width = "400px";
    document.getElementById("mynaveside").style.backgroundColor = "white";
    document.getElementById("mynave").style.width = "100%"
    
   

}

function closenav() {
    document.getElementById("mynaveside").style.width = "0px";
    document.getElementById("mynaveside").style.backgroundColor = "white";
    document.getElementById("mynave").style.width = "0px";
}
function formv() {
    var firstName = document.getElementById("firstName").value;
    var secondName = document.getElementById("secondName").value;
    var email2 = document.getElementById("email2").value;
    var password2 = document.getElementById("password2").value;
    var error2 = document.getElementById("error2");
    var text = "";
     if (firstName.length < 5 ) {
        text = " please Enter first name";
        error2.innerHTML = text;
        return false;
    }
    else if (secondName.length < 5 ) {
        text = " please Enter second name";
        error2.innerHTML = text;
        return false;
    }

    else if (email2.indexOf("@") == -1 || email2.length < 6) {
        text = " please Enter valid Email";
        error2.innerHTML = text;
        return false;
    }

    else if (password2.length < 5 || password2.length > 15) {
        text = " please Enter valid password";
        error2.innerHTML = text;
        return false;
    }

    else {
        alert("Done");
        return true;
    }
}

