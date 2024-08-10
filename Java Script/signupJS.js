document.addEventListener("DOMContentLoaded", function() {
    load();
});

function load() {
    wrong();
    document.getElementById("name").focus();
}

function wrong() {
    document.getElementById("signupbtn").disabled = true;
    document.getElementById("signupbtn").style.opacity = "0.5";
    document.getElementById("tnc").disabled = true;
    document.getElementById("tnc").checked = false;
}

function right() {
    document.getElementById("result").innerHTML = "";
}

function validUserName() {
    var username = document.getElementById("username").value;
    if (/\s/.test(username)) {
        wrong();
        document.getElementById("result").innerHTML = "Username must not contain any spaces.";
        document.getElementById("username").focus();
        return false;
    } else {
        right();
        return true;
    }
}

function validPassword() {
    var pass = document.getElementById("password").value;
    if (pass.length < 6) {
        wrong();
        document.getElementById("result").innerHTML = "Password should contain at least 6 characters.";
        document.getElementById("password").focus();
        document.getElementById("password").style.border = "2px solid red";
        return false;
    } else if (!/(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(pass)) {
        wrong();
        document.getElementById("result").innerHTML = "Password should contain uppercase, lowercase, and numeric characters.";
        return false;
    } else {
        right();
        document.getElementById("password").style.border = "2px solid #ccc";
        return true;
    }
}

function cnfrmPass() {
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("confirmPassword").value;
    if (pass1 !== pass2) {
        wrong();
        document.getElementById("result").innerHTML = "Confirm Password must be the same as Password.";
        document.getElementById("confirmPassword").focus();
        return false;
    } else {
        right();
        if (validUserName() && validPassword()) {
            document.getElementById("tnc").disabled = false;
            return true;
        } else {
            document.getElementById("result").innerHTML = "There is something wrong in the form.";
            document.getElementById("tnc").checked = false;
            return false;
        }
    }
}

function validForm() {
    if (cnfrmPass()) {
        if (!document.getElementById("tnc").checked) {
            document.getElementById("tnc").disabled = false;
            document.getElementById("signupbtn").disabled = true;
            document.getElementById("signupbtn").style.opacity = "0.5";
            document.getElementById("tnc").focus();
            return false;
        } else {
            document.getElementById("signupbtn").style.opacity = "1";
            document.getElementById("signupbtn").disabled = false;
            return true;
        }
    } else {
        wrong();
    }
}

function goto() {
    document.getElementById("signupbtn").style.borderStyle = "inset";
    window.location.replace("home.html");
    return true;
}
