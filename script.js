$("#restart").hide();
var numberOfBttns = null;
var randomValue = null;

function addButtons() {
  numberOfBttns = document.getElementById("NumberOfButtons").value;
  randomValue = Math.floor(Math.random() * parseInt(numberOfBttns)) + 1;
  if (numberOfBttns <= 0) {
    alert("Please enter a number higher than 0 !")
    return false;
  } else {
    $('#addBttn').attr('disabled', 'disabled');
    document.getElementById("pick").style.visibility = "visible";
    $("#addButtons").empty();
    for (var i = 1; i <= numberOfBttns; ++i) {
      $('#addButtons').append(`
        <button class="btn btn-secondary bttn" id=` + i + ` onclick="printMessage(checkButton(id));">Press here!</button>
        `);
    }
    return false;
  }
}

function checkButton(id) {
  $("#restart").show();
  $('.bttn').attr('disabled', 'disabled');
  if (Number(randomValue) === Number(id)) {
    return "Congratulations !!! You have picked the winner button!" 
  }
  return "Sorry, this button is not winner ! You can try again !"
}

function printMessage(message) {
  return document.getElementById("message").innerHTML = message;
}

function reset() {
  window.location.reload();
  return false;
}