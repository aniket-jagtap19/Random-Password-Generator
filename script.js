let myRuns = 0, myWickets = 0, myPlayer = 1;
    let opRuns = 0, opWickets = 0, opPlayer = 1;
    let isPlayerBattingFirst = true;
    let isPlayerBatting = true;
    let inning = 1;
    let hasChosen = false;
    let gameOver = false;

    function chooseBatting() {
      isPlayerBattingFirst = true;
      isPlayerBatting = true;
      hasChosen = true;
      document.getElementById("status").textContent = "🔥 You chose to Bat first. Press 0–9 to play!";
    }

    function chooseBalling() {
      isPlayerBattingFirst = false;
      isPlayerBatting = false;
      hasChosen = true;
      document.getElementById("status").textContent = "💥 You chose to Ball first. Press 0–9 to play!";
    }

    document.addEventListener("keydown", function (e) {
      if (!hasChosen || gameOver) return;
      const key = e.key;
      if (key >= '0' && key <= '9') {
        playTurn(parseInt(key));
      }
    });

    function playTurn(input) {
  const random = Math.floor(Math.random() * 10);

  if (input === random) {
    // OUT!
    if (inning === 1) {
      if (isPlayerBatting) {
        myWickets++;
        myPlayer++;
        if (myWickets >= 10) switchInnings();
      } else {
        opWickets++;
        opPlayer++;
        if (opWickets >= 10) switchInnings();
      }
    } else {
      if (isPlayerBatting) {
        myWickets++;
        myPlayer++;
        if (myWickets >= 10 || myRuns > opRuns) endGame();
      } else {
        opWickets++;
        opPlayer++;
        if (opWickets >= 10 || opRuns > myRuns) endGame();
      }
    }
  } else {
    if (isPlayerBatting) {
      myRuns += input;  // ✅ YOU add what YOU pressed
    } else {
      opRuns += random; // ✅ OPPONENT adds random
    }
  }

  updateScoreboard();
  if (inning === 2 && !gameOver) checkAutoWin();
}


    function switchInnings() {
      inning = 2;
      isPlayerBatting = !isPlayerBatting;
      document.getElementById("status").textContent = "⏭ Inning 2 Starts! Switch Sides!";
    }

    function endGame() {
      gameOver = true;
      let result = "";
      if (myRuns > opRuns) result = "🏆 You Won!";
      else if (opRuns > myRuns) result = "💀 Opponent Won!";
      else result = "🤝 It's a Draw!";
      document.getElementById("result").textContent = result;
    }

    function checkAutoWin() {
      if (isPlayerBatting && myRuns > opRuns) endGame();
      if (!isPlayerBatting && opRuns > myRuns) endGame();
    }

    function updateScoreboard() {
      document.getElementById("myStatus").textContent =
        `👤 Player Team: ${myRuns}/${myWickets} | Batsman: ${myPlayer <= 11 ? myPlayer : "All Out"}`;
      document.getElementById("opStatus").textContent =
        `🤖 Opponent Team: ${opRuns}/${opWickets} | Batsman: ${opPlayer <= 11 ? opPlayer : "All Out"}`;
    }