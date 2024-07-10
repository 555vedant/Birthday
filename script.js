function submitName() {
    let userName = document.getElementById("userName").value.trim();
    if (userName === "") {
        alert("Nam dal ke daba!");
    } else {
        localStorage.setItem("userName", userName);
        window.location.href = "birthday.html";
    }
}

// Function to check the secret word
function checkSecretWord() {
    let secretWord = document.getElementById("secretWord").value.trim().toLowerCase();
    if (secretWord === "vedant" || secretWord === "backup") {
        document.getElementById("birthdayMessage").classList.add("hidden");
        document.getElementById("puzzle").classList.add("hidden");
        document.getElementById("hint").classList.add("hidden");
        document.getElementById("formGroup").classList.add("hidden");
        document.getElementById("birthdayWish").classList.remove("hidden");
        document.getElementById("birthdayWish").innerText = `Happy Birthday, ${localStorage.getItem("userName")}! 🎉🎂`;
        document.getElementById("signature").classList.remove("hidden");
    } else {
        alert("Galat Jawab,Keep Trying!");
    }
}

// Initial alert on page load
window.onload = function() {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        alert("Disclaimer: Don't take it seriously, it's just for fun. Enjoy your day!");
    } else if (window.location.pathname.endsWith('birthday.html')) {
        alert("Puzzle is quite easy i dont wanna spoil your day ha! ha! ha!");
        let userName = localStorage.getItem("userName");
        if (userName) {
            document.getElementById("birthdayWish").innerText = `Happy birthday, ${userName}!`;
            document.getElementById("birthdayWish").classList.add("highlight");
        } else {
            alert("Please enter your name!");
            window.location.href = "index.html";
        }
    }
}
