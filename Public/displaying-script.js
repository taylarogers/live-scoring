// Get Gonubie elements
const gBowlingTeam = document.getElementById("G-BowlingTeam");
const gBattingTeam = document.getElementById("G-BattingTeam");
const gTarget = document.getElementById("G-Target");
const gTotal = document.getElementById("G-Total");
const gWickets = document.getElementById("G-Wickets");
const gBallsRemaining = document.getElementById("G-BallsRemaining");
const gBatsman1 = document.getElementById("G-Batsman1");
const gRuns1 = document.getElementById("G-Runs1");
const gBatsman2 = document.getElementById("G-Batsman2");
const gRuns2 = document.getElementById("G-Runs2");

// Get Bohs elements
const bBowlingTeam = document.getElementById("B-BowlingTeam");
const bBattingTeam = document.getElementById("B-BattingTeam");
const bTarget = document.getElementById("B-Target");
const bTotal = document.getElementById("B-Total");
const bWickets = document.getElementById("B-Wickets");
const bBallsRemaining = document.getElementById("B-BallsRemaining");
const bBatsman1 = document.getElementById("B-Batsman1");
const bRuns1 = document.getElementById("B-Runs1");
const bBatsman2 = document.getElementById("B-Batsman2");
const bRuns2 = document.getElementById("B-Runs2");

// Get Old Boys elements
const oBowlingTeam = document.getElementById("O-BowlingTeam");
const oBattingTeam = document.getElementById("O-BattingTeam");
const oTarget = document.getElementById("O-Target");
const oTotal = document.getElementById("O-Total");
const oWickets = document.getElementById("O-Wickets");
const oBallsRemaining = document.getElementById("O-BallsRemaining");
const oBatsman1 = document.getElementById("O-Batsman1");
const oRuns1 = document.getElementById("O-Runs1");
const oBatsman2 = document.getElementById("O-Batsman2");
const oRuns2 = document.getElementById("O-Runs2");

// Get Hams elements
const hBowlingTeam = document.getElementById("H-BowlingTeam");
const hBattingTeam = document.getElementById("H-BattingTeam");
const hTarget = document.getElementById("H-Target");
const hTotal = document.getElementById("H-Total");
const hWickets = document.getElementById("H-Wickets");
const hBallsRemaining = document.getElementById("H-BallsRemaining");
const hBatsman1 = document.getElementById("H-Batsman1");
const hRuns1 = document.getElementById("H-Runs1");
const hBatsman2 = document.getElementById("H-Batsman2");
const hRuns2 = document.getElementById("H-Runs2");

function loadGonubie(item) {
    gBowlingTeam.textContent = item.bowlingTeam;
    gBattingTeam.textContent = item.battingTeam;
    gTarget.textContent = item.target;
    gTotal.textContent = item.total;
    gWickets.textContent = item.wickets;
    gBallsRemaining.textContent = item.ballsRemaining;
    gBatsman1.textContent = item.batsman1;
    gRuns1.textContent = item.runs1;
    gBatsman2.textContent = item.batsman2;
    gRuns2.textContent = item.runs2;
}

function loadBohs(item) {
    bBowlingTeam.textContent = item.bowlingTeam;
    bBattingTeam.textContent = item.battingTeam;
    bTarget.textContent = item.target;
    bTotal.textContent = item.total;
    bWickets.textContent = item.wickets;
    bBallsRemaining.textContent = item.ballsRemaining;
    bBatsman1.textContent = item.batsman1;
    bRuns1.textContent = item.runs1;
    bBatsman2.textContent = item.batsman2;
    bRuns2.textContent = item.runs2;
}

function loadOldBoys(item) {
    oBowlingTeam.textContent = item.bowlingTeam;
    oBattingTeam.textContent = item.battingTeam;
    oTarget.textContent = item.target;
    oTotal.textContent = item.total;
    oWickets.textContent = item.wickets;
    oBallsRemaining.textContent = item.ballsRemaining;
    oBatsman1.textContent = item.batsman1;
    oRuns1.textContent = item.runs1;
    oBatsman2.textContent = item.batsman2;
    oRuns2.textContent = item.runs2;
}

function loadHams(item) {
    hBowlingTeam.textContent = item.bowlingTeam;
    hBattingTeam.textContent = item.battingTeam;
    hTarget.textContent = item.target;
    hTotal.textContent = item.total;
    hWickets.textContent = item.wickets;
    hBallsRemaining.textContent = item.ballsRemaining;
    hBatsman1.textContent = item.batsman1;
    hRuns1.textContent = item.runs1;
    hBatsman2.textContent = item.batsman2;
    hRuns2.textContent = item.runs2;
}

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);

    for (item of data) {
        switch (item._id) {
            case 'Gonubie':
                loadGonubie(item);
                break;
            case 'Bohs':
                loadBohs(item);
                break;
            case 'Old Boys':
                loadOldBoys(item);
                break;
            case 'Hams':
                loadHams(item);
                break;
            default:
                console.log('This didnt work');
        }
    }
}

getData();