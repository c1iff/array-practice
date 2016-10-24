$(function(){

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


//unique words
  var uniqueWords = function(words) {
    console.log(words);
    var splitWords = words.split(" ");
    console.log(splitWords);

    var sortedWords = splitWords.sort();
    console.log(sortedWords);

    var wordsNumber = [];
    var wordsItem = [];
    sortedWords.forEach(function(eachWord) {
      var occurences = sortedWords.filter(function(filterWord){
        return filterWord === eachWord;
      }).length;

      sortedWords.splice(0, (occurences - 1));
      wordsNumber.push(occurences);
      wordsItem.push(eachWord);

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
    $("#wordCountOutput ul").append(wordOrder(($("#wordsToCount").val())));

  })

})
