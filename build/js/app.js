var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Journal;
(function (Journal) {
    var Entry = (function () {
        function Entry(title, body) {
            this.title = title;
            this.body = body;
            this.timestamp = new Date();
        }
        return Entry;
    }());
    Journal.Entry = Entry;
    var JournalEntry = (function (_super) {
        __extends(JournalEntry, _super);
        function JournalEntry(title, body) {
            _super.call(this, title, body);
            this.title = title;
            this.body = body;
        }
        return JournalEntry;
    }(Entry));
    Journal.JournalEntry = JournalEntry;
})(Journal || (Journal = {}));
/// <reference path="journal-entry-interface.ts" />
var entries = [];
$('#addEntry').submit(function (event) {
    $("#entries").empty();
    event.preventDefault();
    var title = $("#entryTitle").val();
    $("#entryTitle").val("");
    var body = $("#entryText").val();
    $("#entryText").val("");
    var newEntry = new Journal.JournalEntry(title, body);
    entries.push(newEntry);
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        $("#entries").append("<li>" + entry.timestamp + entry.title + "<br>" + entry.body + "</li>");
        console.log(newEntry.title);
    }
});
