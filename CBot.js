// ==UserScript==
// @name         Chat Bot
// @namespace    https://chat.stackoverflow.com/rooms/162587/simons-room
// @version      0.1
// @description  A bot for Stack Overflow chat (beta: running only for room 162587)
// @author       Simon, SShah
// @match        https://chat.stackoverflow.com/rooms/162587/simons-room
// @grant        none
// ==/UserScript==

console.log("CBT Running");

var cb_messages = ["Hello I am cbot!", "How Are you?", "What is your name", "exit"];


function cbot(message) {
    var textarea = document.getElementById('input');
    textarea.value = message;
    document.getElementById('sayit-button').click();
}


function checkLastMessage(){

  var stopCbot = false;

  try{
        //Get The last sent message
        var lastMessage = document.getElementsByClassName("content");
        // alert("lastMessage = "+lastMessage);
        lastMessage = lastMessage[lastMessage.length - 1];

        //Who sent last message
        var lastMessageUser = lastMessage.parentElement.parentElement.parentElement.getElementsByClassName("username");
        //var lastMessageUser = document.getElementsByClassName("username");
        lastMessageUser = lastMessageUser[lastMessageUser.length - 1].innerHTML;

        //Way to manually stop chatbot by other users
        if (lastMessage.innerHTML == "cbot stop!") {
            stopCbot = true;
        }

        //If the last message sent by any other user except for chatbot, then a new message has to be sent (currently using my username)
        //if (lastMessageUser != "SShah") {
        if (lastMessageUser != "SShah") {
            NewCbotMessage = cb_messages[Math.floor(Math.random() * cb_messages.length)];
            cbot("@" + lastMessageUser + " " + NewCbotMessage);
        }
    }

    catch(err){
        //The url below states that it is ok to leave this part empty:
        //https://stackoverflow.com/questions/33383840/is-there-a-javascript-equivalent-for-the-python-pass-statement-that-does-nothing
    }

    if (!stopCbot){
          setTimeout(function(){wait30Secs();}, 3000);
    }
  }

function wait30Secs(){
  checkLastMessage();
}

checkLastMessage();
