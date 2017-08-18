var fs = require("fs");

// Creates a BasicCard Constructor
var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
  this.type = "basic";
};

// creates the createCard method and adds it to the basicCardArray
BasicCard.prototype.addCardToArray = function() {
  var data = {
    front: this.front,
    back: this.back,
    type: "basic"
  };
};

// create the 5 questions

function createBasicCardsList() {
  return [
    new BasicCard(
      "Who was the first president of the United States?",
      "George Washington"
    ),

    new BasicCard(
      "Who is the oldest president of the United States?",
      "Donald Trump"
    ),
    new BasicCard(
      "Who is the youngest president of the United States?",
      "Theodore Roosevelt"
    ),

    new BasicCard(
      "Who is the only president of the United States to resign from office?",
      "Richard Nixon"
    ),

    new BasicCard(
      "Who is the only president born outside the contiguous United States?",
      "Barack Obama"
    )
  ];
}

module.exports = createBasicCardsList;
