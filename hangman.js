var pic = document.getElementById("vimage");

var xcoor, ycoor, textElements, textElementLength;

var letters = ['A','B','C','D','E','F','G','H','I',
               'J','K','L','M','N','O','P','Q','R',
               'S','T','U','V','W','X','Y','Z']

var words = ["AAAAAA", "SOFTWARE DEVELOPMENT", "HELLO"];

<<<<<<< HEAD
var states = ["Alabama"," Alaska","Arizona",,"Arkansas",,"California","Colorado", 
"Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana",
"Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
"Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
"New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma",
"Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee",
"Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming",
"Washington DC"];

var foods = ["asparagus", "apples", "avacado", "acorn", "almond", "bacon", "beans",
"bagels", "beer", "bread", "broccoli", "buritto", "cabbage", "cake", "carrots","celery",
"cheese", "chicken", "catfish", "chips", "chocolate", "chowder", "clams", "coffee",
"cookies", "corn", "cupcakes", "crab", "curry", "cereal", "dumplings", "donuts", "eggs",
"eggrolls", "muffins", "sushi", "fajita", "falafel", "fish", " French toast", "granola",
"grapes", "Guancamole", "Graham crackers", "ham", "hamburger", "honey", "hash browns",
"hot dogs", "hummus", "ice cream", "jelly" , "kiwi", "lobster", "Lamb", "Linguine",
"Lasagna", "Meatballs", "Milk", "Milkshake","Noodles","Pizza", "Peppers", "Pancakes",
"Quesadilla", "Spinach", "Spaghetti", "Tater tots", "Toast", "Waffles", "Wine", "Yogurt"];

var people = ["Aristotle", "Plato", "Jesus Christ", "Socrates", "Alexander the Great",
"Leonardo da Vinci", "Confucius", "Julius Caesar", "Homer", "Pythagoras", "Archimedes",
"Moses", "Muhammad", "Abraham", "Adolf Hitler", "Wolfgang Amadeus Mozart", "Charlemagne",
"William Shakespeare", "Michelangelo", "Augustus", "Napoleon Bonaparte", "Isaac Newton",
"Albert Einstein", "Christopher Columbus", "Johann Sebastian Bach",	
"Ludwig van Beethoven", "Gautama Buddha", "Cleopatra", "Martin Luther", "Galileo Galilei",
"Karl Marx", "Marco Polo", "Cicero", "Vincent van Gogh", "Genghis Khan"];	
var pic = document.getElementById("vimage");

=======
>>>>>>> 7a0431b8829fd79c66fd67b17717f629599b74d2
// window.onload = function(){
//
//
// }

//create buttons for play button and each letter
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

makeLetters();

/*
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
*/


//displays the letter on screen if the letter clicked matches the letters in the word
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

//when play is clicked, run this function
//chooses a random word from the list of words
//removes the previous words/spaces from the screen
//adds this word's spaces to the screen
function playFunc(){
	var catRand = Math.floor(Math.random() * 3);
	if (catRand == 0){
		currentCat = states;
	} else if (catRand == 1){
		currentCat = foods;
	} else {
		currentCat = people;
	}
	console.log(currentCat);
    currentWord = currentCat[Math.floor(Math.random() * currentCat.length)];
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




