var pady = ["Nominativ", "Genitiv", "Dativ", "Akuzativ", "Vokativ", "Lokál", "Instrumentál"];

var tables = document.getElementsByClassName("para");
for (var tableNr = 0; tableNr < tables.length; tableNr++) {
  var firstColumn = tables[tableNr].getElementsByClassName("vlevo");
  for (var i = 0; i < firstColumn.length; i++) {
    firstColumn[i].innerText += " (" + pady[i] + ")";
  }
}
