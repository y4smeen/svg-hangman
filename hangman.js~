var pic = document.getElementById("vimage");

var letters = ['a','b','c','d','e','f','g','h','i',
               'j','k','l','m','n','o','p','q','r',
               's','t','u','v','w','x','y','z']

var words = ["hello", "bye", "Software Development"];

var pic = document.getElementById("vimage");

// window.onload = function(){
//
//
// }

var makeLetters = function(){
    buttons = document.getElementById('buttons');

    for (var i = 0; i < letters.length; i++){
	newLetter = document.createElement('button');
	newLetter.id = letters[i];
	newLetter.innerHTML = letters[i];
	buttons.appendChild(newLetter);
    }
    getButtons();
}
var getButtons = function(){
    var buttons = document.getElementById("buttons"); 
    var letters2 = buttons.getElementsByTagName("button"); 
    for (var i = 1; i < letters2.length; i++) { 
	var letter = letters2[i].getAttribute("id"); 
	letters2[i].addEventListener("click", function(){
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
//Fix this plz

//makeLetters();
//getButtons();


/*
  function getElement(){
  for (var i = 0; i < letters.length; i++){
  hello = document.getElementById(letters[i]);
  hello.addEventListener("click",function(hello){
  console.log(hello);
  console.log(hello.innerHTML);
  }
  )

  }
  }

  getElement();

var getA = document.getElementById("a");
var getB = document.getElementById("b");
var getC = document.getElementById("c");
var getD = document.getElementById("d");
var getE = document.getElementById("e");
var getF = document.getElementById("f");
var getG = document.getElementById("g");
var getH = document.getElementById("h");
var getI = document.getElementById("i");
var getJ = document.getElementById("j");
var getK = document.getElementById("k");
var getL = document.getElementById("l");
var getM = document.getElementById("m");
var getN = document.getElementById("n");
var getO = document.getElementById("o");
var getP = document.getElementById("p");
var getQ = document.getElementById("q");
var getR = document.getElementById("r");
var getS = document.getElementById("s");
var getT = document.getElementById("t");
var getU = document.getElementById("u");
var getW = document.getElementById("w");
var getX = document.getElementById("x");
var getY = document.getElementById("y");
var getZ = document.getElementById("z");

getA.addEventListener("click",typeA);

function typeA(e){
    typeLetter(e);
}

*/
function typeLetter(letter){
    var l = document.createElementNS("http://www.w3.org/2000/svg","text");
    l.setAttribute("x","50");
    l.setAttribute("y","50");
    l.setAttribute("font-family","sans-serif");
    l.setAttribute("font-size","20px");
    l.textContent=letter;
    pic.appendChild(l);

}

var play = document.getElementById("play");
play.addEventListener("click",playFunc);

function playFunc(){
    currentWord = words[Math.floor(Math.random() * words.length)]
    console.log(currentWord);
    for (var i = 0; i < currentWord.length; i++){
	if(currentWord[i] != " "){
	    var l = document.createElementNS("http://www.w3.org/2000/svg","text");
	    var xcoor = 50 + 45*i;
	    var ycoor = 50;
	    l.setAttribute("x",xcoor.toString());
	    l.setAttribute("y",ycoor.toString());
	    l.setAttribute("font-family","sans-serif");
	    l.setAttribute("font-size","40px");
	    l.textContent="_"
	    pic.appendChild(l);
	}
    }
    makeLetters();
}




