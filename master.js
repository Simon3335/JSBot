// ==UserScript==
// @name         Chat Bot
// @namespace    https://chat.stackoverflow.com/rooms/162587/simons-room
// @version      0.1
// @description  A bot for Stack Overflow chat (beta: running only for room 162587)
// @author       Simon, SShah
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
