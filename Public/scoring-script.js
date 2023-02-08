const updateButton = document.getElementById("UpdateButton");

function checkPassword() {
    if (document.getElementById("Password").value === "4127") {
        return true;
    }
    else {
        return false;
    }
}

function update() {
    if (checkPassword() === true) {
        console.log("correct password");
    }
    else {
        console.log("incorrect password");
    }
}

updateButton.addEventListener("click", update);