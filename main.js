// ==UserScript==
// @name         Chat Bot
// @namespace    https://chat.stackoverflow.com/rooms/162587/simons-room
// @version      0.1
// @description  Automation Project
// @author       Simon
// @match        https://chat.stackoverflow.com/rooms/162587/simons-room
// @grant        none
// ==/UserScript==

function cbot(message){
    var textarea = document.getElementById('input');
    textarea.value = message;
    document.getElementById('sayit-button').click();
}

function time() {
    var time = new Date();
    return time.toLocaleTimeString();
}

// ------------------------------------------------------------------------------------------

var cb_messages = ["Hello I am cbot!", "How Are you?", "What is your name", "exit"];

function cbot(message) {
  var textarea = document.getElementById('input');
  textarea.value = message;
  document.getElementById('sayit-button').click();
}

//Learnt from:
var process = function() {
  for (; index < length; index++) {
    var toProcess = xmlElements[index];
    // Perform xml processing
    if (index + 1 < length && index % 100 == 0) {
        setTimeout(process, 5);
    }
  }
};


while (true) {
  //Get The last sent message
  var lastMessage = document.getElementsByClassName("content");
  lastMessage = lastMessage[lastMessage.length - 1].innerHTML;

  //Who sent last message
  var lastMessageUser = lastMessage.parentElement.parentElement.parentElement.getElementsByClassName("username");
  //var lastMessageUser = document.getElementsByClassName("username");
  lastMessageUser = lastMessageUser[lastMessageUser.length - 1].innerHTML;

  //Way to manually stop chatbot by other users
  if (lastMessage == "cbot stop!") {
    break;
  }

  //If the last message sent by any other user except for chatbot, then a new message has to be sent (currently using my username)
  if (lastMessageUser != "SShah") {
    NewCbotMessage = cb_messages[Math.floor(Math.random() * cb_messages.length)];
    cbot("@" + lastMessageUSer + " " + NewCbotMessage);
  }

}
