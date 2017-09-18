# Flashcard-Generator
Flashcard-Generator

I created the backend for a basic flashcard application using advanced JavaScript and Cloze constructors.

The backend will essentially constitute an API that allows users to create two types of flashcards.

Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

Cloze Deletions
A cloze deletion is simply a sentence that has had some of its text removed. For example, given the sentence:

"George Washington was the first president of the United States."

...We can create a "cloze deletion" by removing the words "George Washington":

"... was the first president of the United States."

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is a common device in educational applications.

A flash card built this way has three parts:

The full text. This is the entire sentence users need to remember: "George Washington was the first president of the United States."

The cloze deletion. This is the text we've chosen to remove: "George Washington".

The partial text. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.

How to run the app:

1. Clone this repo.
2. cd into the cloned directory and open Git Bash.
3. Type in the command line: node app
