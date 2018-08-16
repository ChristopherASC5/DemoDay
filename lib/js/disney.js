(function() {
    const myQuestions = [
        {
            question:"1. Which Disney film centres around the character of a deformed bell ringer?",
            answers: {
                a:"Pocahontas",
                b:"The Hunchback of Notre Dame",
                c:"Aladdin",
                d:"Mulan"
            },
            correctAnswer: "b"
        },
        {
            question:"2. Which Disney film is loosely based on the Arabian folktale “One Thousand and One Nights”",
            answers: {
                a:"The Hunchback of Notre Dame",
                b:"Cinderella",
                c:"Aladdin",
                d:"Peter Pan"
            },
            correctAnswer: "c"
        },
        {
            question:"3. What is the name of the masculine hunter who seeks Belle’s affections in “Beauty and the Beast”?",
            answers: {
                a:"Gaston",
                b:"Baston",
                c:"Maston",
                d:"Caston"
            },
            correctAnswer: "a"
        },
        {
            question:"4. In what decade did Disney release Snow White and The Seven Dwarfs? ",
            answers: {
                a:"1960s",
                b:"1950s",
                c:"1920s",
                d:"1930s"
            },
            correctAnswer: "d"
        },
        {
            question:"5. In Toy Story, what was the name of the TV Show of which Woody was the star? ",
            answers: {
                a:`Woody’s Time`,
                b:`Woody’s Round Up`,
                c:`Woody’s Ranch`,
                d:`Woody’s Wild Ride`
            },
            correctAnswer: "b"
        },
        {
            question:"6. In Pinocchio the fairy tells Pinocchio that he can only become a real boy if he is “Brave, truthful and…”? ",
            answers: {
                a:`Sharing`,
                b:`Unselfish`,
                c:`Honest`,
                d:`Kind`
            },
            correctAnswer: "b"
        },
        {
          question:"7. In what year was the Company 'Walt Disney' founded? ",
          answers: {
              a:`October 9, 1922`,
              b:`November 23, 1920`,
              c:`October 16, 1923`,
              d:`Decmeber 25, 1934`
          },
          correctAnswer: "c"
      },
      {
        question:"8. What was the first Disney Animation created? ",
        answers: {
            a:`Snow White and the Seven Dwarfs`,
            b:`Mickey Mouse`,
            c:`Pinocchio`,
            d:`Fantasia`
        },
        correctAnswer: "a"
    },
    {
      question:"9. How many Disney Princess are currently in the Franchise as of August, 2018? ",
      answers: {
          a:`13`,
          b:`12`,
          c:`15`,
          d:`11`
      },
      correctAnswer: "d"
  },
  {
    question:"10. Which Disney Movie was originallly only a Pixar Film?",
    answers: {
        a:`Cars`,
        b:`The little Mermaid `,
        c:`Coco`,
        d:`Tangled`
    },
    correctAnswer: "a"
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
  