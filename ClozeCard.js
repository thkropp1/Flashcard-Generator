var fs = require("fs");

// Creates a ClozeCard Constructor
var ClozeCard = function(text, cloze) {
  this.fulltext = text;
  this.cloze = cloze;
  this.partial = this.fulltext.replace(this.cloze, "_____________");
  this.type = "cloze";
};

// creates the createCard method and adds it to the clozeCardArray
ClozeCard.prototype.addCardToArray = function() {
  var data = {
    fulltext: this.text,
    cloze: this.cloze,
    partial: this.partial,
    type: "cloze"
  };
};

// create the 5 questions

function createClozeCardsList() {
  return [
    new ClozeCard(
      "George Washington was the first president of the United States.",
      "George Washington"
    ),

    new ClozeCard(
      "Donald Trump is the oldest president of the United States.",
      "Donald Trump"
    ),

    new ClozeCard(
      "Theodore Roosevelt is the youngest president of the United States.",
      "Theodore Roosevelt"
    ),

    new ClozeCard(
      "Richard Nixon is the only president of the United States to resign from office.",
      "Richard Nixon"
    ),

    new ClozeCard(
      "Barack Obama is the only president born outside the contiguous United States.",
      "Barack Obama"
    )
  ];
}

module.exports = createClozeCardsList;
