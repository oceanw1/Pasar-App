var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("load", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if(content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

  })
}


function getTime() {
  let today = new Date();
  hours = today.getHours()
  minutes = today.getMinutes()

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

function firstBotMessage() {
  let firstMessage = "Apa kabar? Butuh bantuan apa?";
  document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);

}

firstBotMessage();

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHTML = '<p class="botText"><span>' + botResponse + '</span></p>';
  $("#chatbox").append(botHTML);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
  let userResponse = $("#textInput").val();

  if (userResponse == ""){
    userResponse = "I pressed enter by accident"
  }

  let userHTML = '<p class="userText"><span>' + userResponse + '</span></p>';

  $("#textInput").val("");
  $("#chatbox").append(userHTML);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userResponse);
  }, 1000)

}

function buttonSendText(sampleText) {
  let userHTML = '<p class="userText"><span>' + sampleText + '</span></p>';
  $("textInput").val("");

  $("#chatbox").append(userHTML);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse()
}

function heartButton() {
  buttonSendText("Heart clicked!")
}

//press enter to send a message
$("#textInput").keypress(function (e) {
  if(e.which == 13) {
    getResponse();
  }
})
