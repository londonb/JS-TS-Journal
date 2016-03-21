/// <reference path="journal-entry-interface.ts" />

var entries: string[] = [];
$('#addEntry').submit(function(event) {
  $("#entries").empty();
  event.preventDefault();
  var title: string = $("#entryTitle").val();
  $("#entryTitle").val("");
  var body: string = $("#entryText").val();
  $("#entryText").val("");
  var newEntry: any = new Journal.JournalEntry(title,body)
  entries.push(newEntry);

  for(var entry of entries) {
    $("#entries").append("<li>" + entry.timestamp + entry.title +"<br>" + entry.body +  "</li>");
    console.log(newEntry.title);
  }
});
