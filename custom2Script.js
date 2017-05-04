//browser compatibility for animation 
//code from Paul Irish, www.paulirish.com
window.requestAnimFrame = (function(){ 
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
})();


window.addEventListener("keyup", dealWithKeyboardUp, false);
window.addEventListener("keydown", dealWithKeyboardDown, false);
var hlitedCol = {name:"midCol", left:"leftCol", right:"rightCol"};
var s, total_num_sents, rng, iter=-1;
var score = 0;
var catcher, words, w1, w2, w3;
var x=45, y=12, dx=0;
var speed = Number(localStorage.getItem("speed"));
var loadedSents = "";//really long string of wrong sentences - string array won't work well in localStorage


var background = new Audio("background2.mp3");
background.volume = 0.4;

var correct = new Audio("correct.mp3");
var wrong = new Audio("wrong.mp3");



function dealWithKeyboardUp(e) {
    if(e.keyCode == 37) {//left arrowkey
        dx=0;
    }
    if(e.keyCode == 39) {//right arrowkey
        dx=0;
    }
}

function dealWithKeyboardDown(e) {
    if(e.keyCode == 37) {//left arrowkey
        dx=.5;
    }
    if(e.keyCode == 39) {//right arrowkey
        dx=-.5;
    }
}

function init() {//initializes total_num_sents on the first run
    background.play();
    s = JSON.parse( localStorage.getItem("customSents") );
    total_num_sents = s.length;
    catcher = document.getElementById("catcher");
    words = document.getElementById("words");
    w1 = document.getElementById("w1");
    w2 = document.getElementById("w2");
    w3 = document.getElementById("w3");
    w1.style.top = "12%";
    w2.style.top = "12%";
    w3.style.top = "12%";
    w1.style.left = "30%";
    w2.style.left = "50%";
    w3.style.left = "70%";
    catcher.style.top = "75%";
    loadSentence();
    animate();
}

function animate() {
    if(y>=81){
        checkCorrect();
        y=12;
    }
    x+=dx;
    y+=speed;
    catcher.style.right = x+"%";
    w1.style.top = y+"%";
    w2.style.top = y+"%";
    w3.style.top = y+"%";
    requestAnimFrame(animate);
}
function changeSpeed(s){
    
    speed = localStorage.setItem("speed", s);
}    

function checkCorrect() {
    if(x<=67 && x>=64-w1.clientWidth/screen.availWidth*100) {
        if(s[rng].w1 == s[rng].correct) {

              
                correct.play();

                score+=10;
                document.getElementById("foot").innerHTML = "<h1>Score: "+score+"</h1>";
                loadSentence(); 
            }
        else {
            wrong.play();
        
            loadedSents += s[rng].part1 + "_____" + s[rng].part2 + "<br/>a) " + s[rng].w1 + "   b) " + s[rng].w2 +
                  "   c) " + s[rng].w3 + "<br/>" + s[rng].explanation + "<br/><br/>";
            loadSentence();   
        }
    }
    if(x<=47 && x>=44-w2.clientWidth/screen.availWidth*100) {
        if(s[rng].w2 == s[rng].correct) {
                
                correct.play();

                score+=10;
                document.getElementById("foot").innerHTML = "<h1>Score: "+score+"</h1>";
            
                loadSentence(); 
            }
        else {
            wrong.play();
        
            loadedSents += s[rng].part1 + "_____" + s[rng].part2 + "<br/>a) " + s[rng].w1 + "   b) " + s[rng].w2 +
                  "   c) " + s[rng].w3 + "<br/>" + s[rng].explanation + "<br/><br/>";
            loadSentence();   
        }
                
    }
    if(x<=27 && x>=24-w3.clientWidth/screen.availWidth*100) {
        if(s[rng].w3 == s[rng].correct) {
               
                correct.play();

                score+=10;
                document.getElementById("foot").innerHTML = "<h1>Score: "+score+"</h1>";
                loadSentence(); 
            }
    }
    wrong.play();
        
    loadedSents += s[rng].part1 + "_____" + s[rng].part2 + "<br/>a) " + s[rng].w1 + "   b) " + s[rng].w2 +
        "   c) " + s[rng].w3 + "<br/>" + s[rng].explanation + "<br/><br/>";
    loadSentence();   
        
}


function loadSentence() {//updates webpage with new sentence
    iter++;
    if(iter == 10) {//11th iteration
        localStorage.setItem("score", score);
        localStorage.setItem("loadedSents", loadedSents);
        window.location.href = "scoreScreen.html";
    }
    rng = Math.floor((Math.random() * total_num_sents)); //random int from 0 to # of sentences-1
    document.getElementById("gameHeader").innerHTML = "<h1>"+s[rng].part1+"_____"+s[rng].part2+"</h1>";
    w1.innerHTML = "<h1>"+s[rng].w1+"</h1>";
    w2.innerHTML = "<h1>"+s[rng].w2+"</h1>";
    w3.innerHTML = "<h1>"+s[rng].w3+"</h1>";
    
    textToSpeech(JSON.stringify(s[rng].part1+" blank "+s[rng].part2));
}

function textToSpeech(s)
{
    var msg = new SpeechSynthesisUtterance();
     msg.text = s;
     msg.lang = 'en-US';
     msg.rate = 1.0;
    
     speechSynthesis.speak(msg);
}
