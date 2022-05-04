//Question bank
var questionBank= [
    {
        question : 'Can  DEBS Concierge help plan my entire vacation?',
        choice : ['Yes, we can. All information is on our website','No','Depends on the situation','None of the above'],
        answer : 'Yes, we can. All information is on our website'
    },
    {
        question : 'Do you have yearly charges or they are monthly?',
        choice : ['Based on the situation','We charge per month and yearly too, even daily','No','Daily charges only'],
        answer : 'We charge per month and yearly too, even daily'
    },
    {
        question : 'How can I easily locate DEBS Concierge?',
        choice : ['Information about it is on our website','Call a friend','No location','None of the above'],
        answer : 'Information about it is on our website'
    },
    {
        question : 'What are some of the offers you give after helping with hotel reservations?',
        choice : ['Keep you safe, bring your room orders and help make your room clean','Only help with hotel reservations','Clients cannot ask for any other','None of the above'],
        answer : 'Keep you safe, bring your room orders and help make your room clean'
    },
    {
        question : 'What are the types of massage you deal with?',
        choice : ['hatha, mediation','Relaxing, sweedish and deep tissue massage','Offer only yoga','Do not have massage staffs'],
        answer : 'Relaxing, sweedish and deep tissue massage'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var choice0= document.getElementById('choice0');
var choice1= document.getElementById('choice1');
var choice2= document.getElementById('choice2');
var choice3= document.getElementById('choice3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    choice0.innerHTML= questionBank[i].choice[0];
    choice1.innerHTML= questionBank[i].choice[1];
    choice2.innerHTML= questionBank[i].choice[2];
    choice3.innerHTML= questionBank[i].choice[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'lightgreen';
    }
    else{
        document.getElementById(e.id).style.background= 'lightblue';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();