// ==UserScript==
// @name         Steam queue
// @version      0.1
// @description  Steam queue auto go to next item
// @author       rogeraabbccdd
// @match        https://store.steampowered.com/app/*
// @namespace    https://github.com/rogeraabbccdd/Auto-Steam-Queue/
// @updateURL    https://raw.githubusercontent.com/rogeraabbccdd/Auto-Steam-Queue/master/Auto-Steam-Queue.user.js
// @downloadURL  https://raw.githubusercontent.com/rogeraabbccdd/Auto-Steam-Queue/master/Auto-Steam-Queue.user.js
// @grant        none
// ==/UserScript==

const next = document.getElementById("next_in_queue_form")
if(next.length > 0) {
    next.submit()
}
