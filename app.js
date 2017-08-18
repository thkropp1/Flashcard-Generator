// require basic flashcard module
var BasicCard = require("./BasicCard.js");
// require cloze flashcard module
var ClozeCard = require("./ClozeCard.js");
// require inquirer for getting user input at command line
var inquirer = require("inquirer");
// require fs
var fs = require("fs");

// Keep track of the # of correct and wrong answers
var correct = 0;
var wrong = 0;

// Create arrays for the questions and answers
var basicCardArray = [];
var clozeCardArray = [];

// Initialize the Basic and Cloze flashcards (5 questions)
basicCardArray = BasicCard();
clozeCardArray = ClozeCard();
//console.log(basicCardArray);
//console.log(clozeCardArray);

inquirer
  .prompt([
    {
      type: "list",
      name: "answer",
      message: "What would you like to do?",
      //choices: ['Play BasicCards', 'Play ClozeCards', 'Quit']
      choices: ["Play BasicCards", "Play ClozeCards", "Quit"]
    }
  ])
  .then(function(response) {
    switch (response.answer) {
      case "Play BasicCards":
        //console.log("Play BasicCards");
        askQuestion(basicCardArray, 0); // Call the function to process data
        break;

      case "Play ClozeCards":
        //console.log("Play ClozeCards");
        askQuestion(clozeCardArray, 0); // Call the function to process data
        break;

      case "Quit":
        console.log("Bye!");
        break;
    }
  });

function askQuestion(array, index) {
  question = array[index];
  //console.log("Array[" + index + "] is: " + array[index]);
  var questionText = "";
  var correctResponse = "";
  if (question.type === "basic") {
    // Basic Flashcards
    questionText = question.front;
    //console.log("Front: " + questionText);
    correctResponse = question.back;
    //console.log("Back: " + correctResponse);
  } else if (question.type === "cloze") {
    // Cloze Flashcards
    questionText = question.partial;
    //console.log("Partial: " + questionText);
    correctResponse = question.cloze;
    //console.log("Cloze: " + correctResponse);
  }
  inquirer
    .prompt([
      // Ask the question, and wait for the user's answer
      {
        name: "response",
        message: questionText
      }
    ])
    .then(function(answer) {
      // Process the user's answer if it's correct
      // Convert the user's answer and the correct answer to all lower case
      if (answer.response.toLowerCase() === correctResponse.toLowerCase()) {
        console.log("Correct!\r\n");
        correct++; // Keep track of correct answers
        if (index < array.length - 1) {
          // Ask the next question
          askQuestion(array, index + 1);
        } else {
          //End of quiz
          // Let the user know the final score
          console.log(
            "\r\nYou got " +
              correct +
              " correct and " +
              wrong +
              " wrong answers."
          );
        }
      } else {
        // Process the user's answer, if it's wrong
        wrong++; // Keep track of wrong answers
        if (question.type === "basic") {
          // Basic Flashcards
          console.log("Wrong!\r\n");
          if (index < array.length - 1) {
            // Ask the next question
            askQuestion(array, index + 1);
          } else {
            // Let the user know the final score
            console.log(
              "\r\nYou got " +
                correct +
                " correct and " +
                wrong +
                " wrong answers."
            );
          }
        } else {
          // Cloze Flashcards
          inquirer
            .prompt([
              {
                type: "input",
                name: "answer",
                message: "Wrong! Do you want to see the correct answer?(y/n) "
              }
            ])
            .then(function(reply) {
              if (reply.answer === "y" || reply.answer === "Y") {
                // If yes, print the full text of the correct answer
                console.log(question.fulltext + "\r\n");
              } else {
								console.log("\n"); // create a blank space
							}
              if (index < array.length - 1) {
                // Ask the next question
                askQuestion(array, index + 1);
              } else {
                // End of quiz
                // Let the user know the final score
                console.log(
                  "\r\nYou got " +
                    correct +
                    " correct and " +
                    wrong +
                    " wrong answers."
                );
              }
            });
        }
      }
    });
}
