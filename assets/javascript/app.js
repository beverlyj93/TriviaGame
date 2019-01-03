var heartbeat;
var counter = 30;
var answer = [];

$(document).ready(function () {
    heartbeat = setInterval(heartBeat, 1000);
})

function timedOut() {
    for(let i = 1; i < 5; i++) {
        $('.answer-' + i).each(function() {
            if($(this).attr('selected')) answer[i - 1] = $(this).text();
        })
        if(answer[i - 1] == 'undefined' || answer[i - 1] == null) answer[i - 1] = "Nothing";
    }

    $('.time-remaining').html("Game over! The answers have been posted below.");
    $('#questions-1').html('<span style="font-size: 25px; font-weight: bold;">You chose: ' + answer[0] + '<br>Answer: Red</span>');
    $('#questions-2').html('<span style="font-size: 25px; font-weight: bold;">You chose: ' + answer[1] + '<br>Answer: Boston, MA</span>');
    $('#questions-3').html('<span style="font-size: 25px; font-weight: bold;">You chose: ' + answer[2] + '<br>Answer: Serbia</span>');
    $('#questions-4').html('<span style="font-size: 25px; font-weight: bold;">You chose: ' + answer[3] + '<br>Answer: China</span>');
    $('ol').css('width', '25%');
    $('footer').css('margin', '140px 0px');
    clearInterval(heartbeat);
}

function heartBeat() {
    let time = $('#time-value');
    let selectedCount = 0;

    if (counter >= 0) {
        counter--;
        time.html(counter);

        if(counter >= 20) time.css('color', 'green');
        else if(counter <= 19 && counter >= 10) time.css('color', 'orange');
        else if(counter <= 9 && counter >= 0) time.css('color', 'red');
        else if(counter < 0) timedOut();
    }

    for (let i = 1; i <= 4; i++) {
        if ($('#questions-' + i).attr('selected')) selectedCount++;
    }
    if (selectedCount == 4) timedOut();
}

for(let i = 1; i <= 4; i++) {
    $('.answer-' + i).click(function() {
        if(!$('#questions-' + i).attr('selected')) {
            $(this).css('border', '1px solid black');
            $(this).attr('selected', true);
            $('#questions-' + i).attr('selected', true);
        }
    })
}