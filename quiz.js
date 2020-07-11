var questions= [
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In any programming language, what is the most common way to iterate through an array?",
      "correct_answer": "&#039;For&#039; loops",
      "incorrect_answers": [
        "&#039;If&#039; Statements",
        "&#039;Do-while&#039; loops",
        "&#039;While&#039; loops"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What does GHz stand for?",
      "correct_answer": "Gigahertz",
      "incorrect_answers": [
        "Gigahotz",
        "Gigahetz",
        "Gigahatz"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What amount of bits commonly equals one byte?",
      "correct_answer": "8",
      "incorrect_answers": [
        "1",
        "2",
        "64"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which computer hardware device provides an interface for all other connected devices to communicate?",
      "correct_answer": "Motherboard",
      "incorrect_answers": [
        "Central Processing Unit",
        "Hard Disk Drive",
        "Random Access Memory"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      "correct_answer": "Final",
      "incorrect_answers": [
        "Static",
        "Private",
        "Public"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the most preferred image format used for logos in the Wikimedia database?",
      "correct_answer": ".svg",
      "incorrect_answers": [
        ".png",
        ".jpeg",
        ".gif"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the code name for the mobile operating system Android 7.0?",
      "correct_answer": "Nougat",
      "incorrect_answers": [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What does LTS stand for in the software market?",
      "correct_answer": "Long Term Support",
      "incorrect_answers": [
        "Long Taco Service",
        "Ludicrous Transfer Speed",
        "Ludicrous Turbo Speed"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The numbering system with a radix of 16 is more commonly referred to as ",
      "correct_answer": "Hexidecimal",
      "incorrect_answers": [
        "Binary",
        "Duodecimal",
        "Octal"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In computing, what does MIDI stand for?",
      "correct_answer": "Musical Instrument Digital Interface",
      "incorrect_answers": [
        "Musical Interface of Digital Instruments",
        "Modular Interface of Digital Instruments",
        "Musical Instrument Data Interface"
      ]
    }
  ]

generateQuiz()

function generateQuiz() {
  var questionsElement = document.getElementById('questions')
  for (var i = 0; i < questions.length; i++) {
    console.log('each question -->', questions[i])

    var questionItem = document.createElement('LI')
    var title = document.createElement('H3')
    title.innerHTML = questions[i].question
    //li -> h3
    questionItem.appendChild(title)

    var options = questions[i].incorrect_answers
    options.push(questions[i].correct_answer)

    for(var j = 0; j < options.length; j++) {
      var radio = document.createElement('INPUT')
      radio.setAttribute('type', 'radio')
      radio.setAttribute('name', i)
      radio.value = options[j]
      questionItem.appendChild(radio)

      var valueItem = document.createElement('SPAN')
      valueItem.innerHTML = options[j]
      questionItem.appendChild(valueItem)

      var breaker = document.createElement('BR')
      questionItem.appendChild(breaker)
    }

    //ul -> li
    questionsElement.appendChild(questionItem)
  }
}

function onSubmit() {
  var sum = 0;
  for (var j = 0; j < 10; j++) {
    var a = document.getElementsByName(j);

    for (var i = 0; i < 4; i++) {
      if (a[i].checked == true) {
        // console.log(a[i].value);
        if (a[i].value == questions[j].correct_answer) {
          alert(a[i].value + " right answer");
          sum++;
        } else {
          alert(a[i].value + " wrong answer");
        }
      }
    }
  }
  var percent = document.getElementById("percent");
  questions.innerHTML ="total correct answer are " +sum +" and your percentage is " +(sum * 100) / 10;
  
}
function back(){
  window.location.replace("index.html")
  alert("Are you Sure Remove This Quiz")
}