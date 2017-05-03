window.addEventListener("keyup", dealWithKeyboard, false);
var hlitedCol = {name:"midCol", left:"leftCol", right:"rightCol"};
var s, total_num_sents, rng;
var score = 0, iter=-1;
var background = new Audio("background.mp3");
background.volume = 0.7;
var keypress = new Audio("click.mp3");
var correct = new Audio("correct.mp3");
var wrong = new Audio("wrong.mp3");
var loadedSents = "";//really long string of wrong sentences - string array won't work well in localStorage

function dealWithKeyboard(e) {
    if(e.keyCode == 37) {//left arrowkey
 
        document.getElementById(hlitedCol.left).style="background-color:#7BAFD4";
        
        document.getElementById(hlitedCol.name).style="background-color:white";
        var temp = hlitedCol.name;
        hlitedCol.name=hlitedCol.left;
        hlitedCol.left=hlitedCol.right;
        hlitedCol.right=temp;

        var keypress = new Audio("click.mp3");
        keypress.play();
        
        if(hlitedCol.name == "leftCol") {
            textToSpeech(JSON.stringify(s[rng].w1));
        } else if (hlitedCol.name == "rightCol") {
            textToSpeech(JSON.stringify(s[rng].w3));
        } else {
            textToSpeech(JSON.stringify(s[rng].w2));
        }
    }
    if(e.keyCode == 39) {//right arrowkey
        document.getElementById(hlitedCol.right).style="background-color:#7BAFD4";
        
        document.getElementById(hlitedCol.name).style="background-color:white";
        var temp = hlitedCol.name;
        hlitedCol.name=hlitedCol.right;
        hlitedCol.right=hlitedCol.left;
        hlitedCol.left=temp;
        var keypress = new Audio("click.mp3");
        keypress.play();
        
        if(hlitedCol.name == "leftCol") {
            textToSpeech(JSON.stringify(s[rng].w1));
        } else if (hlitedCol.name == "rightCol") {
            textToSpeech(JSON.stringify(s[rng].w3));
        } else {
            textToSpeech(JSON.stringify(s[rng].w2));
        }
    }
    if(e.keyCode == 13) {//enter key
        if(hlitedCol.name == "leftCol") {
            if(s[rng].w1 == s[rng].correct) {
                var correct = new Audio("correct.mp3");
                correct.play();

                score+=10;
                document.getElementById("foot").innerHTML = "<h1>Score: "+score+"</h1>";
                
                loadSentence(); 
            }
            else {
                var wrong = new Audio("wrong.mp3");
                wrong.play();
                
                loadedSents += s[rng].part1 + "_____" + s[rng].part2 + "<br/>a) " + s[rng].w1 + "   b) " + s[rng].w2 +         "   c) " + s[rng].w3 + ".<br/>" + s[rng].explanation + "<br/><br/>";
                loadSentence();
                
            }
        }
        if(hlitedCol.name == "midCol") {
            if(s[rng].w2 == s[rng].correct) {
                var correct = new Audio("correct.mp3");
                correct.play();

                score+=10;
                document.getElementById("foot").innerHTML = "<h1>Score: "+score+"</h1>";
                
                loadSentence(); 
            }
            else {
                var wrong = new Audio("wrong.mp3");
                wrong.play();
                
                loadedSents += s[rng].part1 + "_____" + s[rng].part2 + "<br/>a) " + s[rng].w1 + "   b) " + s[rng].w2 +
                    "   c) " + s[rng].w3 + ".<br/>" + s[rng].explanation + "<br/><br/>";
                loadSentence();
            }
        }
        if(hlitedCol.name == "rightCol") {
            if(s[rng].w3 == s[rng].correct) {
                var correct = new Audio("correct.mp3");
                correct.play();


                score+=10;

                document.getElementById("foot").innerHTML = "<h1>Score: "+score+"</h1>";
                
                loadSentence(); 
            }
            else {
                var wrong = new Audio("wrong.mp3");
                wrong.play();
                
                loadedSents += s[rng].part1 + "_____" + s[rng].part2 + "<br/>a) " + s[rng].w1 + "   b) " + s[rng].w2 +
                    "   c) " + s[rng].w3 + ".<br/> " + s[rng].explanation + "<br/><br/>";
                loadSentence();
            }
        }
    }
}

function init(num, s) {//initializes total_num_sents on the first run
    total_num_sents = num;
    this.s = s;
    loadSentence();
    background.play();
}

function loadSentence() {//updates webpage with new sentence
    iter++;
    if(iter == 10) {
        localStorage.setItem("score", score);
        localStorage.setItem("loadedSents", loadedSents);
        window.location.href = "scoreScreen.html";
    }
    
    rng = Math.floor((Math.random() * total_num_sents)); //random int from 0 to # of sentences-1
    
    document.getElementById("gameHeader").innerHTML = "<h1>"+s[rng].part1+"_____"+s[rng].part2+"</h1>";
    var t = s[rng].part1+" blank "+s[rng].part2;
    document.getElementById("myTable").rows[0].innerHTML = "<th>"+s[rng].w1+"</th><th>"+s[rng].w2+"</th><th>"+s[rng].w3+"</th>";

    var tt = JSON.stringify(t);

    textToSpeech(tt);
     if(hlitedCol.name == "leftCol") {
            textToSpeech(JSON.stringify(s[rng].w1));
        } else if (hlitedCol.name == "rightCol") {
            textToSpeech(JSON.stringify(s[rng].w3));
        } else {
            textToSpeech(JSON.stringify(s[rng].w2));
        }
}

function textToSpeech(s)
{
    var msg = new SpeechSynthesisUtterance();
     msg.text = s;
     msg.lang = 'en-US';
     msg.rate = 1.0;
    
     speechSynthesis.speak(msg);
}

