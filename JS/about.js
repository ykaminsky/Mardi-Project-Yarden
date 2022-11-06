const questions = [
    {
        question: "Were does Mardi Gras take place ?",
        optionA: "SHOHAM",
        optionB: "CHICAGO",
        optionC: "NEW YORK",
        optionD: "NEW ORLEANS",
        correctOption: "optionD"
    },

    {
        question: "Mardi Gras translates directly to ?",
        optionA: "Fat Cat",
        optionB: "Fat Tuesday",
        optionC: "Dead Cat",
        optionD: "12 players",
        correctOption: "optionB"
    },

    {
        question: "What are the official colors of Mardi Gras ?",
        optionA: "Lime and gold",
        optionB: "Black and white",
        optionC: "Red, blue and pink",
        optionD: "Purple, gold, and green.",
        correctOption: "optionD"
    },

    {
        question: " New Orleans became a Mardi Gras hotspot in ? ",
        optionA: "2001",
        optionB: "1953",
        optionC: "1857",
        optionD: "1782",
        correctOption: "optionC"
    },

    {
        question: "The color green signifies ?",
        optionA: "loyalty",
        optionB: "war",
        optionC: "sleep",
        optionD: "faith",
        correctOption: "optionD"
    },

    {
        question: "On average (and, you know, not during a global pandemic), how many revelers visit New Orleans for Mardi Gras each year. ?",
        optionA: "1.4 million",
        optionB: "4 million",
        optionC: "10.4 million",
        optionD: "3.4 million",
        correctOption: "optionA"
    },

    {
        question: "Gold represents ?",
        optionA: "shame",
        optionB: "pride",
        optionC: "power",
        optionD: "North America",
        correctOption: "optionC"
    },

    {
        question: "By law, masks must be removed by what time on Mardi Gras?",
        optionA: "10 p.m.",
        optionB: "5 p.m.",
        optionC: "6 a.m.",
        optionD: "6 p.m",
        correctOption: "optionD"
    },

    {
        question: "Each New Orleans parade is organized by groups called ?",
        optionA: "Eminem",
        optionB: "Fanatics",
        optionC: "Americans",
        optionD: "krewes",
        correctOption: "optionD"
    },

    {
        question: "One of the most popular New Orleans Mardi Gras parades is from ?",
        optionA: "Shooting star",
        optionB: "Krewe of Bacchus",
        optionC: "Knifes of Bacchus",
        optionD: "Krewe of Bahli",
        correctOption: "optionB"
    },

    {
        question: "Bead-throwing was popularized in Mardi Gras celebrations in the ?",
        optionA: "1990s",
        optionB: "1600s",
        optionC: "1790s",
        optionD: "1880s",
        correctOption: "optionD"
    },

    {
        question: "Mardi Gras beads used to be made of ?",
        optionA: "glass",
        optionB: "metal",
        optionC: "meat",
        optionD: "wood",
        correctOption: "optionA"
    },

    {
        question: "How many carnival parades in New Orleans in a single season. ?",
        optionA: "24",
        optionB: "30",
        optionC: "70",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "The most popular Mardi Gras dessert is ?",
        optionA: "king cake.",
        optionB: "water",
        optionC: "apple pie",
        optionD: "lolypop",
        correctOption: "optionA"
    },

    {
        question: "Every year, about 500,000 king cakes are sold during carnival season.?",
        optionA: "about 500",
        optionB: "about 500,000,000",
        optionC: "about 500,000",
        optionD: "about 75,000",
        correctOption: "optionC"
    },

    {
        question: "The earliest known carnival celebrations have been traced to ?",
        optionA: "1582 in Georgia,usa",
        optionB: "1992 in Missouri,usa",
        optionC: "1894 in Tel aviv, Isral",
        optionD: "1294 in Nice, France",
        correctOption: "optionD"
    },

    {
        question: "Fat Tuesday was declared a Louisiana state holiday in ?",
        optionA: "1745",
        optionB: "1875",
        optionC: "1972",
        optionD: "1666",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "The Monday before Mardi Gras is called ?",
        optionA: "mama Gras",
        optionB: "papa Gras",
        optionC: "Lundi Gras",
        optionD: "hacker u Gras",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
            //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}
//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}