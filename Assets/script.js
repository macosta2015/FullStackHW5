const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const countingWins = document.getElementById('coutning-wins')
const countingLoops = document.getElementById('coutning-loops')

let number = 0

// For the timer 
let timeSecond = 60;
const timeH = document.querySelector("h1");


// For the arrays
// var  = ["A","B","C","D"];
var myArr = [];


//Running pushData
function pushData(nameScore)
{
    // get value from the input text
    // var inputText = document.getElementById('inputText').value;
    inputText = nameScore

    // append data to the array
    myArr.push(inputText);
    
    var pval = "";
    
    for(i = 0; i < myArr.length; i++)
    {
        pval = pval + myArr[i] + "<br/>";
    }
    
    // display array data
    document.getElementById('pText').innerHTML = pval;
}


//Running timer function
function RunTimer(){
    displayTime(timeSecond);
    const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
        endCount();
        clearInterval(countDown);
        // console.log(timeSecond)
    }
    testingVariable = timeSecond
    console.log('testingVariable: '+ testingVariable)
    return(testingVariable)
    }, 1000);

    function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
    ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
    `;
    }

    function endCount() {
    timeH.innerHTML = "Time out";
    }
// End code for the timer 
}


let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
//Replaced the event listener by adding a function
// startButton.addEventListener('click', RunTimer)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

    //CODE DOES NOT RUN AS WE NEVER GET TO 5
    // if (currentQuestionIndex == 5){
    //     //Code for getting the users input
    //     var nameScore = window.prompt("What is your name and scores?")
    //     pushData(nameScore)
    //     console.log("The nameScore is: " + nameScore)
    // }
})

function startGame(){

    //Running the RunTimer function that begings the clock
    var timedScore =  RunTimer()
    // console.log('This is the timedScore: ' + timedScore)

    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    // console.log('ONE')
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex]) 

    currentQuestion = (currentQuestionIndex+1)
    console.log("YOU ARE ON QUESTION: " + currentQuestionIndex)
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button') 
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

//DO a while loop here to stop the function 
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    console.log('BEFORE IF STATEMENT')
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
        console.log('LOOPING INSIDE THE QUESTIONS: ' + currentQuestionIndex)
        countingLoops.innerHTML = "Questions answered: " + (currentQuestionIndex+1);
    }

    else{
        
        for (let i = 0; i < 1; i++) {
            console.log('INSIDE FOR LOOP AFTER ELSE')
            startButton.innerText = ('Restart') 
            startButton.classList.remove('hide')
            console.log('AFTER DONE WITH QUESTION')
          }
        // //CODE FOR GETTING THE USERS INPUT
        // nameScore = window.prompt("What is your name and scores?")
        // pushData(nameScore)
        // console.log("The nameScore is: " + nameScore)
        userInput()
    }
    console.log('PRINT AFTER IF AND ELSE')
}


//Function to get the users Inpute
function userInput(){
    //CODE FOR GETTING THE USERS INPUT
        nameScore = window.prompt("What is your name and time?")
        pushData(nameScore)
        console.log("The nameScore is: " + nameScore)
  
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        // console.log('CORRECTYES')
        number = number+1
        // console.log(number)
        countingWins.innerHTML = "Counting the wins: " + (number);
    
        //function that checks the scores
        var scoreFunction =  checkScore(number)
        console.log("FINAL SCORE IS +1: " + scoreFunction)

    }else {
    element.classList.add('wrong')
        // console.log('INSIDE THE RED COLOR')
    }
}


function checkScore(number){    
    switch(number){
        case 5:
            // console.log('Value: ' + number)
            return number
            break;
        case 6:
            // console.log('Value: ' + number)
            return number
            break;
        case 7:
            // console.log('Value: ' + number)
            return number
            break;
        case 8:
            // console.log('Value: ' + number)
            return number
            break;
        case 9:
            // console.log('Value: ' + number)

            break;

    }

    return((number+1))
}


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'Commonly used data types DO NOT include:', 
        answers: [
            { text: 'strings', wrong: false },
            { text: 'boolenas', wrong: false},
            { text: 'alerts', correct: true},
            { text: 'numbers', wrong: false}
        ]

    },
    {
        question: 'The condition in an if/else statement is enclosed with:  ', 
        answers: [
            { text: 'quotes', wrong: false },
            { text: 'curly brackets', wrong: false},
            { text: 'parenthesis', correct: true},
            { text: 'square bracker', wrong: false},
        ]
    }
    ,
    {
        question: 'Arrays in JavaScript can be used to store', 
        answers: [
            { text: 'numbers and strings', wrong: false },
            { text: 'other arrays', wrong: false},
            { text: 'boolenas', wrong: false},
            { text: 'all of the above', correct: true}
        ]
    }
    ,
    {
        question: 'String values must be enclosed within .... when being assigned to variables', 
        answers: [
            { text: 'commas', wrong: false },
            { text: 'curly brackets', wrong: false},
            { text: 'quotes', wrong: false},
            { text: 'sqaure brackets', correct: true}
        ]
    }
    ,
    {
        question: 'A very useful tool used during developmet and debugging for printing content to the debugger is:', 
        answers: [
            { text: 'JavaScript', wrong: false },
            { text: 'terminal/ bash', wrong: false},
            { text: 'for loops', wrong: false},
            { text: 'console.log', correct: true}
        ]
    }
]