const updateButton = document.getElementById("UpdateButton");

// Check validity of password
function checkPassword() {
    if (document.getElementById("Password").value === "4127") {
        return true;
    }
    else {
        return false;
    }
}

// Update scores
function update() {
    if (checkPassword() === true) {
        console.log("correct password");

        // Retrieve all information
        const field = document.getElementById("Field").value;
        const bowlingTeam = document.getElementById("BowlingTeam").value;
        const battingTeam = document.getElementById("BattingTeam").value;
        const target = document.getElementById("Target").value;
        const total = document.getElementById("Total").value;
        const wickets = document.getElementById("Wickets").value;
        const ballsRemaining = document.getElementById("BallsRemaining").value;
        const batsman1 = document.getElementById("Batsman1").value;
        const runs1 = document.getElementById("Runs1").value;
        const batsman2 = document.getElementById("Batsman2").value;
        const runs2 = document.getElementById("Runs2").value;

        const scores = {total, wickets};
        const data = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(total, wickets)
        };

        console.log('loaded');

        fetch('/api', data);

        console.log('fetched');
    }
    else {
        console.log("incorrect password");
    }
}

updateButton.addEventListener("click", update);