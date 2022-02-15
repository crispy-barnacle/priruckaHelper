// ==UserScript==
// @name         priruckaHelper
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       Me
// @match        https://prirucka.ujc.cas.cz/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var pady = ["Nominativ", "Genitiv", "Dativ", "Akuzativ", "Vokativ", "Lok\u00e1l", "Instrument\u00e1l"];
    var padyRus = ["Именительный", "Родительный", "Дательный", "Винительный", "Звательный", "Предложный", "Творительный"];

    var tables = document.getElementsByClassName("para");
    for (var tableNr = 0; tableNr < tables.length; tableNr++) {
      var firstColumn = tables[tableNr].getElementsByClassName("vlevo");
      if (firstColumn.length == 7) {
          for (var i = 0; i < firstColumn.length; i++) {
            firstColumn[i].innerHTML += " (" + pady[i] + ") </br>" + padyRus[i];
          }
      }
    }
})();
