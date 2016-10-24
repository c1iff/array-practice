$(function(){

//grocery list function
  var groceryFunction = function(inputs) {
    var items = [];
    inputs.forEach(function(input) {
      items.push($("#item" + input).val());
    });
    var upperCase = items.map(function(item){
      return item.toUpperCase();
    });
    finalItem = upperCase.sort();
    return finalItem;
  }

//Word play function take string and return all words greater than 3 letters  and reverses
  var wordFunction = function(words) {
    var wordsThree = [];
    var splitWords = words.split(" ");
    console.log(splitWords);
    splitWords.forEach(function(word){
      if (word.length > 2){
        wordsThree.push(word);
      }
    });
      var finishedWord = wordsThree.reverse().join(" ");
      console.log(finishedWord);
      return finishedWord;
  }


//creates a deck of card and returns card type
  var cardFunction = function() {
    deckOfCards = []
    suits = ['hearts', 'clubs', 'spades', 'diamonds'];
    cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    suits.forEach(function(suit){
      cards.forEach(function(card){
        deckOfCards.push("<li>" + card + " of " + suit + "</li>");
      })
    })
    return deckOfCards;
  }


//this function finds unique words and counts how many are there, return as arrays
  var wordOrder = function(words) {  //input string from user
    console.log(words);
    var splitWords = words.split(" "); //create array from string
    console.log(splitWords);

    var sortedWords = splitWords.sort(); //sort array
    console.log(sortedWords);

    var wordsNumber = [];  //create empty array for number of words
    var wordsItem = [];   //create emty array for unique words
    sortedWords.forEach(function(eachWord) {  //for each emelent in array, run a function
      var occurences = sortedWords.filter(function(filterWord){  //for each element count occurences
        return filterWord === eachWord;
      }).length;

      sortedWords.splice(0, (occurences - 1)); //remove duplicate elements
      wordsNumber.push(occurences); //output number of words into array
      wordsItem.push(eachWord);  //output unique words into array

    })
    console.log(wordsNumber);
    console.log(wordsItem);

    return wordsItem + wordsNumber;
  }

// Begin front end logic

//Grocery List Logic
  $("#groceries").submit(function(event) {
    $("#groceries").hide();
    $("#groceriesOutput").show();
    $("#groceriesOutput").text(groceryFunction(["1", "2", "3", "4"]));
    event.preventDefault();
  });

//Word Play Logic
  $("#wordPlay").submit(function(event) {
    $("#wordOutput").show();
    $("#wordOutput").text(wordFunction(($("#sentence").val())));
    event.preventDefault();
  });
//Cards logic
  $("#cards").submit(function(event) {
    $(".cards ul").append(cardFunction());
    $(".cards ul").toggle();
    event.preventDefault();
  });
//word order logic
  $("#wordOrder").submit(function(event){
    event.preventDefault();
    $("#wordCountOutput ul").append("<li>" + wordOrder(($("#wordsToCount").val()))+ "</li>");

  })

})
