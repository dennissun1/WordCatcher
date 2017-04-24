window.addEventListener("keyup", dealWithKeyboard, false);
var hlitedCol = {name:"midCol", left:"leftCol", right:"rightCol"};
var s, total_num_sents, rng;
var score = 10;
var keypress = new Audio();
keypress = "click.mp3";

function dealWithKeyboard(e) {
    if(e.keyCode == 37) {//left arrowkey
 
        document.getElementById(hlitedCol.left).style="background-color:#7BAFD4";
        
        document.getElementById(hlitedCol.name).style="background-color:white";
        var temp = hlitedCol.name;
        hlitedCol.name=hlitedCol.left;
        hlitedCol.left=hlitedCol.right;
        hlitedCol.right=temp;
               
    }
    if(e.keyCode == 39) {//right arrowkey
        document.getElementById(hlitedCol.right).style="background-color:#7BAFD4";
        
        document.getElementById(hlitedCol.name).style="background-color:white";
        var temp = hlitedCol.name;
        hlitedCol.name=hlitedCol.right;
        hlitedCol.right=hlitedCol.left;
        hlitedCol.left=temp;
    }
    if(e.keyCode == 13) {//enter key
        if(hlitedCol.name == "leftCol") {
            if(s[rng].w1 == s[rng].correct) {
                alert("correct!");
                loadSentence(); 
            }
            else
                alert("try again")
        }
        if(hlitedCol.name == "midCol") {
            if(s[rng].w2 == s[rng].correct) {
                alert("correct!");
                loadSentence(); 
            }
            else
                alert("try again")
        }
        if(hlitedCol.name == "rightCol") {
            if(s[rng].w3 == s[rng].correct) {
                alert("correct!");
                //score+=10;
                alert("hi");
                document.getElementById("foot").innerHTML = "<h1>Score: "+score+"</h1>";
                loadSentence(); 
            }
            else
                alert("try again")
        }
    }
}

function init(num, s) {//initializes total_num_sents on the first run
    total_num_sents = num;
    this.s = s;
    loadSentence();
}

function loadSentence() {//updates webpage with new sentence
    rng = Math.floor((Math.random() * total_num_sents)); //random int from 0 to # of sentences-1
    document.getElementById("gameHeader").innerHTML = "<h1>"+s[rng].part1+"_____"+s[rng].part2+"</h1>";
    document.getElementById("myTable").rows[0].innerHTML = "<th>"+s[rng].w1+"</th><th>"+s[rng].w2+"</th><th>"+s[rng].w3+"</th>";
}

