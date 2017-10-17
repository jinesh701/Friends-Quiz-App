"use strict";


let questions = [{
    question: "What did Rachel believe Chandler's job was?",
    choices: ["Statistical Analysis and Data Reconfiguration", "Transponster", "Accountant", "Financial Analysis and Projections"],
    correctAnswer: 2
  }, {
    question: "What is Joey's favorite food?",
    choices: ["Pizza", "Sandwiches", "Turkey", "Burgers"],
    correctAnswer: 2
  }, {
    question: "Joey wears what to Monica and Chandler’s wedding?",
    choices: ["A Police Uniform", "A Spacesuit", "An Army Uniform", "A Swimsuit"],
    correctAnswer: 3
  }, {
    question: "Which actor guest starred in \"The One with The Rumor\"?",
    choices: ["Bruce Willis", "Jon Favreau", "Ben Stiller", "Brad Pitt"],
    correctAnswer: 4
  }, {
    question: "What name is Chandler's TV Guide addressed to?",
    choices: ["Miss Chanandler Bong", "Chandler Bing", "Chanandler Bong", "Chandy Bing"],
    correctAnswer: 1
  }, {
    question: "Which is NOT the name of one of Phoebe's triplets?",
    choices: ["Chandler", "Frank Jr. Jr.", "Leslie", "Alice"],
    correctAnswer: 4
  }, {
    question: "Who gave birth to Chandler and Monica's twins?",
    choices: ["Erica", "Laura", "Alice", "Susan"],
    correctAnswer: 1
  }, {
    question: "Who was drunk on their 30th birthday before their surprise party?",
    choices: ["Rachel", "Chandler", "Monica", "Ross"],
    correctAnswer: 3
  }, {
    question: "Which dessert does Rachel try to make for Thanksgiving?",
    choices: ["Souffle", "Trifle", "Cake", "Brownies"],
    correctAnswer: 2
  }, {
    question: "How many times was Ross married during the entire span of the show?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: 3
  }, {
    question: "What is Rachel’s favorite movie?",
    choices: ["Dangerous Liaisons", "Weekend at Bernie's", "Sophie's Choice", "Pretty in Pink"],
    correctAnswer: 2
  },
  {
    question: "What type of bed does Monica accidentally get from Mattress King?",
    choices: ["Race Car Bed", "Bunk Bed", "Princess Bed", "A Crib"],
    correctAnswer: 1
  },
  {
    question: "Where do Phoebe and Mike get married?",
    choices: ["On the Street", "On the Beach", "At Monica's Apartment", "In Central Perk"],
    correctAnswer: 1
  },
  {
    question: "There’s an episode where Rachel and Chandler claim to have the best _________ they’ve ever eaten. They also eat it when it falls on the floor. What was the food?",
    choices: ["Chocolate Cake", "Cheesecake", "Apple Pie", "Chocolate Truffles"],
    correctAnswer: 2
  },
  {
    question: "Chandler gets sent to a different city/state after falling asleep at work. Which one was it?",
    choices: ["Tulsa, Oklahoma", "Topeka, Kansas", "Montgomery, Alabama", "Montpelier, Vermont"],
    correctAnswer: 1
  },
  {
    question: "Where is Rachel leaving to in the final two episodes (The Last One)?",
    choices: ["Amsterdam", "Venice", "London", "Paris"],
    correctAnswer: 4
  },
  {
    question: "Where did the group go to listen to Ross be a key note speaker at a paleontology convention?",
    choices: ["Jamaica", "Bahamas", "Barbados", "Key West"],
    correctAnswer: 3
  },
  {
    question: "Who does Ross have to hide from when he and Elizabeth go to Elizabeth's grandma's cottage for the weekend?",
    choices: ["Paolo", "Paul", "Barry", "Mike"],
    correctAnswer: 2
  },
  {
    question: "By the last two seasons, how much money were the main cast member making per episode?",
    choices: ["$500,000", "$750,000", "$950,000", "$1 Million"],
    correctAnswer: 4
  },
  {
    question: "What game do Mike and Monica play in Barbados?",
    choices: ["Foosball", "Air Hockey", "Ping Pong", "Billiards"],
    correctAnswer: 3
  }
];

let currentScore = 0;
let questionCount = 0;
let currentQuestion = 0;
let currentChoices = 0;
let progress = 0;


$(document).ready(function() {

  //Shuffle array
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  };

  //Question counter
  function questionCounter() {
    questionCount++;
    $('.question-number').text('Question: ' + questionCount + '/10');
  };

  //Score counter
  function updateScore() {
    $('.score').text('Score: ' + currentScore + '/10')
  };

  //Progress bar
  function progressBar() {
    progress += 10;
    $('.progress-bar').attr('style', 'width:' + progress + '%')
  };

  //User results
  function showUserResults() {
    $('.score-result').text('You scored a: ' + currentScore + '/10');

  };


  //Starts the quiz
  function startQuiz() {
    $('#start-btn').click(function() {
      $('#start-page').fadeOut(500, function() {
        $('#quiz').fadeIn(500);
      });
    });
  };

  //Displays the questions and choices
  function displayQuestions() {

    //displays the first question
    $('.question-text').text(questions[currentQuestion].question);

    //displays the first list of choices
    $('.option-1').text(questions[currentChoices].choices[0]);
    $('.option-2').text(questions[currentChoices].choices[1]);
    $('.option-3').text(questions[currentChoices].choices[2]);
    $('.option-4').text(questions[currentChoices].choices[3]);


    //displays the next question
    $('#next-btn').on('click', function() {
      //empty all form text
      $('.question-text').empty();
      $('.option-1').empty();
      $('.option-2').empty();
      $('.option-3').empty();
      $('.option-4').empty();
      $("input[type='radio']:checked").parent().removeClass('alert alert-success');
      $("input[type='radio']:checked").parent().removeClass('alert alert-danger');
      $("input[type='radio']").prop('checked', false);


      //displays the next question and changes the question counter
      currentQuestion++;
      $('.questions').hide();
      $('.questions').fadeIn(1000);
      $('.answers').hide();
      $('.answers').fadeIn(1000);
      $('.question-text').text(questions[currentQuestion].question);
      questionCounter();

      //displays the next choices
      currentChoices++;
      $('.option-1').text(questions[currentChoices].choices[0]);
      $('.option-2').text(questions[currentChoices].choices[1]);
      $('.option-3').text(questions[currentChoices].choices[2]);
      $('.option-4').text(questions[currentChoices].choices[3]);
      $('#submit-btn').attr('disabled', false)
      $('#next-btn').attr('disabled', true);
      $("input[type='radio']").attr('disabled', false);

      //increase progress bar
      progressBar();


      //displays results page if end of quiz
      if (currentQuestion === 10) {
        $('#results').fadeIn(1000);
        $('#quiz').hide();
      }
      if (currentScore === 10) {
        $('.user-result').text("You have reached Unagi! Congratulations! You're a master of Friends!");
        $('.user-result-img').html("<img src='img/unagi.gif' alt='Gif of Ross doing Unagi pose.'>")
      } else if ((currentScore >= 7) && (currentScore <= 9)) {
        $('.user-result').text("You watch this show often and are extremely knowledable. You are a regular at the Central Perk! But you haven't achieved Unagi yet.");
        $('.user-result-img').empty();
        $('.user-zero').empty();
        $('.score-zero').empty();
        $('.user-result-img').html("<img src='img/7-9.gif' alt='Chandler and Joey pointing enthusiastically.' class='img-responsive'>");
      } else if ((currentScore >= 4) && (currentScore <= 6)) {
        $('.user-result').text("You did a good job, but you could do much better. A few more and you'll be considered a regular at the Central Perk!");
        $('.user-result-img').empty();
        $('.user-result-img').html("<img src='img/4-6.gif' alt='Chandler and Joey clapping.'>");
        $('.user-zero').empty();
        $('.score-zero').empty();
      } else if ((currentScore >= 1) && (currentScore <= 3)) {
        $('.user-result').text('You got a few correct, but I think you need to go back and watch the show.');
        $('.user-result-img').empty();
        $('.user-zero').empty();
        $('.score-zero').empty();
        $('.user-result-img').html("<img src='img/1-3.gif' alt='Ross rejecting a high-five from Will (Brad Pitt).'>");
      } else {
        $('.score-zero').html("You scored a: 0/10");
        $('.user-zero').html("Could you <b>BE</b> any less knowledge about this show?");
        $('.user-result-img').html("<img src='img/0.gif' alt='Gif of Chandler leaving room in disgust.'>");
      }


    });

  };

  //Lets the user submit an answer and displays whether the user got the correct answer or not.
  //Adds to score if they got the correct answer.
  function handleSubmit() {
    $('.js-questions').submit(function(event) {
      event.preventDefault();
      let userInput = $("input[type='radio']:checked").val();
      let correctValue = questions[currentQuestion].correctAnswer;

      if (userInput == correctValue) {
        currentScore++;
        updateScore();
        showUserResults();
        $("input[type='radio']:checked").parent().addClass('alert alert-success');
        $("input[type='radio']").attr('disabled', true);
        $('#next-btn').removeAttr('disabled');
        $('#submit-btn').attr('disabled', true);
      } else {
        $("input[type='radio']:checked").parent().addClass('alert alert-danger');
        $("input[type='radio']").attr('disabled', true);
        $('#next-btn').removeAttr('disabled');
        $('#submit-btn').attr('disabled', true);
      }
    });
  };


  //Reset the quiz
  function resetQuiz() {
    $('#reset-btn').on('click', function() {
      currentScore = 0;
      questionCount = 0;
      currentQuestion = 0;
      currentChoices = 0;
      $('#start-btn').off();
      $('.js-questions').off();
      $('#next-btn').off();
      $('#start-page').show();
      $('#results').hide();
      location.reload(true);
    });
  };



  //A main function with all other functions
  function main() {
    startQuiz();
    shuffleQuestions();
    displayQuestions();
    handleSubmit();
    questionCounter();
    updateScore();
    resetQuiz();
  }

  main();
});
