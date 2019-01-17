// Lucky Sevens JavsScript!

function clearErrors() {
  for (var loopCounter=0;
    loopCounter<document.forms["luckySevens"].elements.length;
    loopCounter++) {
      if (document.forms["luckySevens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
        document.forms["luckySevens"].elements[loopCounter].parentElement.className = "form-group";
      }
    }
}

function resetForm() {
  clearErrors();
  document.forms["luckySevens"]["bet"].value = "";
  document.getElementById("results").style.display="none";
  document.getElementById("playButton").innerText = "Play";
  document.forms["luckySevens"]["bet"].focus();
}

function rollDice() {
    return Math.floor(Math.random() * 6)+1;
}

function findMax(array) {
  var max=array[0];
  var place=0;
  for (var i=0; i<(array.length); i++) {
    if (max<array[i]){
      max = array[i];
      place=i;
    }
  } return [max,place];
}


function playGame() {
  clearErrors();
  var bet = document.forms["luckySevens"]["bet"].value;
  if (bet == "" || isNaN(bet)) {
  alert("Starting Bet must be filled in with a number.");
  document.forms["luckySevens"]["bet"].parentElement.className = "form-group has-error";
  document.forms["luckySevens"]["bet"].focus();
  return false;
  }
  var money = Number(bet);
  if (money <= 0) {
      alert("Starting Bet must be greater than Zero.");
      document.forms["luckySevens"]["bet"].parentElement.className = "form-group has-error";
      document.forms["luckySevens"]["bet"].focus();
      return false;
  }
  var rollCount=0;
  var winArr=[bet];
  while (money>0){
    var r1=rollDice();
    var r2=rollDice();
    var r3 = r1+r2;
    if (r3 == 7){
      money=money+4;
    } else {
      money=money-1;
    }
    winArr.push(money);
    rollCount++;
  }

  var moneyMax=findMax(winArr)[0];
  var maxRoll=findMax(winArr)[1];
  document.getElementById("results").style.display = "block";
  document.getElementById("StartingBet").innerText = '$'+bet;
  document.getElementById("RollCount").innerText = rollCount;
  document.getElementById("MoneyMax").innerText = '$'+ moneyMax;
  document.getElementById("MaxRoll").innerText = maxRoll;
  return false
}
