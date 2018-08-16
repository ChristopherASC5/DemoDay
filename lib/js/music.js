(function() {
    const myQuestions = [
        {
            question:"1. Which is the correct title of a 2011 Lil Wayne hit? ",
            answers: {
                a:"7 Foot 8 Foot",
                b:" 5 Foot 6 Foot",
                c:"6 Foot 7 Foot",
                d:" 4 Foot 5 Foot"
            },
            correctAnswer: "c"
        },
        {
            question:"2. Presented on February of 2017, who won the Grammy Award for Best New Artist? ",
            answers: {
                a:"The Chainsmokers",
                b:"Drake",
                c:"Chance the Rapper",
                d:"Zedd"
            },
            correctAnswer: "c"
        },
        {
            question:"3. When did Travis Scott drop his Album, 'Astroworld'?",
            answers: {
                a:"August 3, 2018",
                b:"August 5, 2018",
                c:"August 7, 2018",
                d:"Never Dropped an Album"
            },
            correctAnswer: "a"
        },
        {
            question:"4. Which American rapper had Billboard hits with the songs 'Congratulations', 'Rockstar' and 'I Fall Apart' in 2017?",
            answers: {
                a:"Travis Scott",
                b:"Post Malone",
                c:"Ozuna",
                d:"J Cole"
            },
            correctAnswer: "b"
        },
        {
            question:"5. What was the fastest Music Video to reach 1 billion views on Youtube?  ",
            answers: {
                a:`"Despacito" by Luis Fonsi`,
                b:`"Shape of You" by Ed Sheeran`,
                c:`"Hello" by Adelle`,
                d:`"Gangnam Style" by PSY`
            },
            correctAnswer: "c"
        },
        {
            question:`6. What artist was quoted with saying, " I was born to make mistakes, not to fake perfection"?`,
            answers: {
                a:`Micheal Jackson`,
                b:`Beyonce`,
                c:`Jay Z`,
                d:`Drake`
            },
            correctAnswer: "d"
        },
        {
            question:`7. Who is the Richest Musician as of August 2018?`,
            answers: {
                a:`Mariah Carey`,
                b:`Dr. Dre`,
                c:`Jay Z`,
                d:`Andrew Lloyd Webber`
            },
            correctAnswer: "d"
        },
        {
            question:`8. Which artist shook the World with his hit, 'Despacito'?`,
            answers: {
                a:`Chino & Nacho`,
                b:`Don Omar`,
                c:`Luis Fonsi`,
                d:`Drake`
            },
            correctAnswer: "c"
        },
        {
            question:`9. Who is the proud owner of the Company 'Beats by dre'`,
            answers: {
                a:`Apple`,
                b:`Dr.Dre`,
                c:`Microsoft`,
                d:`Jay Z`
            },
            correctAnswer: "a"
        },
        {
            question:`10. The very first Music streaming service was ____`,
            answers: {
                a:`Pandora`,
                b:`Internet Underground Music Archive (IUMA)`,
                c:`Spotify`,
                d:`last.fm`
            },
            correctAnswer: "b"
        },
];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
    //   if (currentSlide === 0) {
    //     previousButton.style.display = "none";
    //   } else {
    //     previousButton.style.display = "inline-block";
    //   }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    // const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    // previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  