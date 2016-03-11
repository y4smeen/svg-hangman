var pic = document.getElementById("vimage");

var xcoor, ycoor, textElements, textElementLength;

var letters = ['A','B','C','D','E','F','G','H','I',
               'J','K','L','M','N','O','P','Q','R',
               'S','T','U','V','W','X','Y','Z']

var words = ["AAAAAA", "SOFTWARE DEVELOPMENT", "HELLO"];

var pic = document.getElementById("vimage");

// window.onload = function(){
//
//
// }

var makeLetters = function(){
    var html;
    buttons = document.getElementById('buttons');
    html = "<button id='play'>Play</button>";
    buttons.innerHTML=html;

    for (var i = 0; i < letters.length; i++){
	html += '<button onclick="typeLetter(\'' + letters[i] + '\');">'+letters[i] + '</button>';
	/*
	  newLetter = document.createElement('button');
	  newLetter.id = letters[i];
	  newLetter.innerHTML = letters[i];
	  buttons.appendChild(newLetter);
	*/
	buttons.innerHTML=html;
    }
}


var getButtons = function(){
    var buttons = document.getElementById("buttons"); 
    var letters2 = buttons.getElementsByTagName("button"); 
    for (var i = 1; i < letters2.length; i++) { 
	var letter = letters2[i].getAttribute("id"); 
	letters2[i].addEventListener("click", function(e){
	    var l = document.createElementNS("http://www.w3.org/2000/svg","text");
	    l.setAttribute("x","50");
	    l.setAttribute("y","50");
	    l.setAttribute("font-family","sans-serif");
	    l.setAttribute("font-size","20px");
	    l.textContent=letter;
	    pic.appendChild(l);
	}
				    );
    }
}

makeLetters();



function typeLetter(letter){
    for (var i = 0; i<currentWord.length; i++){
	if (currentWord[i] == letter){
	    var l = document.createElementNS("http://www.w3.org/2000/svg","text");
	    xcoor = 50 + 45*i + 5;
	    ycoor = 47;
	    l.setAttribute("x",xcoor.toString());
	    l.setAttribute("y",ycoor.toString());
	    l.setAttribute("font-family","sans-serif");
	    l.setAttribute("font-size","20px");
	    l.textContent=letter;
	    pic.appendChild(l);
	}
    }
}

var play = document.getElementById("play");
play.addEventListener("click",playFunc);

function playFunc(){
    currentWord = words[Math.floor(Math.random() * words.length)]
    console.log(currentWord);
    textElements = document.getElementsByTagName("text");
    textElementLength = textElements.length;
    for(var ii=0; ii<textElementLength; ii++){
	textElements[ii].textContent = "";
    }

    for (var i = 0; i < currentWord.length; i++){
	if(currentWord[i] != " "){
	    var l = document.createElementNS("http://www.w3.org/2000/svg","text");
	    xcoor = 50 + 45*i;
	    ycoor = 50;
	    l.setAttribute("x",xcoor.toString());
	    l.setAttribute("y",ycoor.toString());
	    l.setAttribute("font-family","sans-serif");
	    l.setAttribute("font-size","40px");
	    l.textContent="_"
	    pic.appendChild(l);
	}
    }
    
}




