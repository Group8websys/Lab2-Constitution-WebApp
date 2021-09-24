/*querySelector() returns the first Element within the document that matches the specified selector*/
const question = document.querySelector('#question');
/* querySelectorAll returns a NodeList which are our choices/answers*/
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion= {}
let acceptingAnswers= true
let score= 0
let questionCounter= 0
let availableQuestions= []

/*the multiple choice questions and choices...along with the correct answers*/
let questions = [
    {
        question:'What is the First Amendment?',
        choice1:'Right to bear arms',
        choice2:'Right to a civil trial',
        choice3:'Freedom of speech',
        choice4:'Right against searches and seizures', 
        answer: 3,
    },
    {
        question:'Which Amendment gives the right to a speedy & fair trial?',
        choice1:'Sixth Amendment',
        choice2:'Second Amendment',
        choice3:'Fourth Amendment',
        choice4:'Tenth Amendment',
        answer: 1,
    },
    {
        question:'When was the Constitution written?',
        choice1:'1744',
        choice2:'1787',
        choice3:'1778',
        choice4:'1763',
        answer: 2,
    },
    {
        question:'How many Amendments are in the Constitution?',
        choice1:'27',
        choice2:'26',
        choice3:'28',
        choice4:'29',
        answer: 1,
    },
    {
        question:'What is the Tenth Amendment?',
        choice1:'Freedom of speech',
        choice2:'Right to a civil trial',
        choice3:'Right to bear arms',
        choice4:'Reserved powers',
        answer: 4,
    } ,
    {
        question:'Article I discusses?',
        choice1:'Judicial Power',
        choice2:'Executive Power',
        choice3:'Legislative Power',
        choice4:'All of the above',
        answer: 3,
    },
    {
        question:'"The Executive Power shall be vested in..."?',
        choice1:'The President',
        choice2:'The House',
        choice3:'The Senate',
        choice4:'None',
        answer: 1,
    } ,
    {
        question:'The United States Congress consists of?',
        choice1:'The Senate',
        choice2:'The House of Representatives',
        choice3:'Both a and b',
        choice4:'I dont know',
        answer: 3,
    } ,
    {
        question:'Which Amandment is this, "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted"',
        choice1:'Ninth',
        choice2:'Eight',
        choice3:'Tenth',
        choice4:'Third',
        answer: 2,
    },
    {
        question:'FUN QUESTION: The US Constitution has ',
        choice1:'10,000 words',
        choice2:'3,500 words',
        choice3:'7,600 words',
        choice4:'4,400 words',
        answer: 4,
    } 
   
]

/*const is capitalized because we dont want the value to change*/
const SCORE_POINTS=1
const MAX_QUESTIONS=10


startGame=()=>{
    questionCounter=0
    score=0
    availableQuestions= [...questions]
    getNewQuestion()
}
/*if there are still more questions ie the question counter is less than Max questions , getNewQuestion 
and print the most recent score...once the user is done with the quiz, the browser will open a new "window" for
the end.html file where they will have the choice to retake or go back to homepage*/

getNewQuestion= () =>{
    if(availableQuestions.length===0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign('end.html')
    }

    /* calculate the score and keep track of which question the user is on using counter...ex Question 2 of 10*/
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`

    /*we are calculating the value of the question index also tells the program what question to extract/show to the user next */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion=availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    /*calling choices and setting each choice equal to a number to know which choice the user picked*/
    choices.forEach(choice=>{
        const number=choice.dataset['number']
        choice.innerText=currentQuestion['choice'+number]
    })
    availableQuestions.splice(questionsIndex,1)
    acceptingAnswers=true
}

/*checks if user clicked on the correct 'number' which is provided in the list question portion*/
choices.forEach(choice => {
    choice.addEventListener('click', e=>{
        if(!acceptingAnswers) return

        acceptingAnswers= false
        const selectedChoice= e.target
        const selectedAnswer= selectedChoice.dataset['number']

        /* if answer is correct, toggle the green css bar which is correct... if it's false, toggle the red css bar which is incorrect*/
        let classToApply= selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        /* if answer is correct, increment the score*/
        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(()=> {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        },1000)
})


})

/* this will increment the score we already have every time the user answers correctly*/
incrementScore = num => {
    score += num
    scoreText.innerText =score
}
/*call function to start the game*/
startGame()

