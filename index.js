// ==UserScript==
// @name         priruckaHelper
// @namespace    http://tampermonkey.net/
// @version      0.8
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
    padyRus = ["\u0418\u043C\u0435\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439\u000A", 
               "\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",
               "\u0414\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",
               "\u0412\u0438\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",
               "\u0417\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",
               "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u043D\u044B\u0439",
               "\u0422\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439"]
    var questions = ["kdo? co?", "koho? \u010deho?", "komu? \u010demu?", "koho? co?", "-", "(o) kom? (o) \u010dem?", "k\u00fdm? \u010d\u00edm"];

    var tables = document.getElementsByClassName("para");
    for (var tableNr = 0; tableNr < tables.length; tableNr++) {
      // Add names for cases
      var firstColumn = tables[tableNr].getElementsByClassName("vlevo");
      if (firstColumn.length == 7) {
          for (var i = 0; i < firstColumn.length; i++) {
            firstColumn[i].innerHTML += " (" + pady[i] + ") </br>" + padyRus[i];
            firstColumn[i].innerHTML += "</br> <i>" + questions[i] + "</i>";
          }
      }
    }
})();
