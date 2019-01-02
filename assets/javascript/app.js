var heartbeat;
var counter = 20;

var qa = {
    question1: {
        question: "question",
        correctAnswer: 'answer1',
        answers: {
            answer1: "answer1",
            answer2: "answer2",
            answer3: "answer3",
            answer4: "answer4"
        }
    },
    question2: {
        question: "question",
        correctAnswer: 'answer1',
        answers: {
            answer1: "answer1",
            answer2: "answer2",
            answer3: "answer3",
            answer4: "answer4"
        }
    },
    question3: {
        question: "question",
        correctAnswer: 'answer1',
        answers: {
            answer1: "answer1",
            answer2: "answer2",
            answer3: "answer3",
            answer4: "answer4"
        }
    },
    question4: {
        question: "question",
        correctAnswer: 'answer1',
        answers: {
            answer1: "answer1",
            answer2: "answer2",
            answer3: "answer3",
            answer4: "answer4"
        }
    }
};

$(document).ready(function () {
    heartbeat = setInterval(heartBeat, 1000);

    $('.question').html(qa.question1.question);
    $.each(qa.question1.answers, function(key, value) {
        let answer = $('<p>' + value + '</p>');
        $(answer).appendTo('.answers');
        $(answer).attr('key', key);
    })

    for(var question in qa) {
        
    }
})

function timedOut() {

}

function heartBeat() {
    if(counter > 0) {
        counter--;
        $('#time-value').html(counter);
    }
    else if(counter === 0) timedOut();
}

