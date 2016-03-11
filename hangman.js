var pic = document.getElementById("vimage");

var xcoor, ycoor, textElements, textElementLength;
var score = 0;

var letters = ['A','B','C','D','E','F','G','H','I',
               'J','K','L','M','N','O','P','Q','R',
               'S','T','U','V','W','X','Y','Z'];

var points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 
	      8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 
	      1, 1, 4, 4, 8, 4, 10];

var chosenLetters = [];

var words = ["AAAAAA", "SOFTWARE DEVELOPMENT", "HELLO"];

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

var people = ["Aristotle", "Plato", "Jesus Christ", "Socrates", 
	      "Leonardo da Vinci", "Confucius", "Julius Caesar", "Homer", "Pythagoras", "Archimedes",
	      "Moses", "Muhammad", "Abraham", "Adolf Hitler", "Charlemagne",
	      "Michelangelo", "Augustus", "Napoleon Bonaparte", "Isaac Newton", "Gautama Buddha", "Cleopatra", "Martin Luther",
	      "Karl Marx", "Marco Polo", "Cicero", "Genghis Khan"];

var animals = ["alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah", 
	       "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin", "duck", "eagle",
	       "elephant", "fish", "fly", "fox", "frog", "giraffe", "goat", "goldfish", "hamster",
	       "hippopotamus", "horse", "kangaroo", "kitten", "lion", "lobster", "monkey", "octopus",
	       "owl", "panda", "pig", "puppy", "rabbit", "rat", "scorpion", "seal", "shark", "sheep",
	       "snail", "snake", "spider", "squirrel", "tiger", "turtle", "wolf", "zebra"];

var pic = document.getElementById("vimage");
var scoreText = document.createElementNS("http://www.w3.org/2000/svg","text");
scoreText.setAttribute("x",50);
scoreText.setAttribute("y",20);
scoreText.setAttribute("font-family","sans-serif");
scoreText.setAttribute("font-size","20px");
scoreText.textContent="Score:" + score;
pic.appendChild(scoreText);




//create buttons for play button and each letter
var makeLetters = function(){
    var html;
    buttons = document.getElementById('buttons');
    html = "<center><button id='play'>Play</button><br><br></center>";
    buttons.innerHTML=html;

    for (var i = 0; i < letters.length; i++){
	html += '<button onclick="typeLetter(\'' + letters[i] + '\');">'+letters[i] + '</button>';
	buttons.innerHTML=html;
    }
};

makeLetters();



//displays the letter on screen if the letter clicked matches the letters in the word
function typeLetter(letter){
    chosenLetters.push(letter);
	console.log(chosenLetters);
    for (var i = 0; i<currentWord.length; i++){
		if (currentWord[i].toUpperCase() == letter){
			calcScore(letter);
			var l = document.createElementNS("http://www.w3.org/2000/svg","text");
			xcoor = 50 + 45*i + 5;
			ycoor = 50;
			l.setAttribute("x",xcoor.toString());
			l.setAttribute("y",ycoor.toString());
			l.setAttribute("font-family","sans-serif");
			l.setAttribute("font-size","20px");
			l.textContent=letter;
			pic.appendChild(l);
		}
    }
    var complete = true;
    for (var x = 0; x < currentWord.length; x++){
		if(chosenLetters.indexOf(currentWord[x].toUpperCase()) < 0){
			complete = false;
			//console.log(currentWord[x].toUpperCase() + chosenLetters.indexOf(currentWord[x].toUpperCase()));
		}
    }
    console.log(complete);
    if (complete === true){
		//console.log(score);			
		win();
    }
}

function win(){
	//console.log(score);
	score += 100;
	console.log(score);
	var r = window.confirm("Congrats Your Guessed Correctly! Your score is " + score + "!\n\nPlay Another One?");
	if (r === true) {
		console.log(5);
		playFunc();
	}
}

function calcScore(letter){
    var p = 0;
    var i = letters.indexOf(letter);
    p = points[i];
    score += p;
    //console.log(score);
}

var play = document.getElementById("play");
play.addEventListener("click",playFunc);

//when play is clicked, run this function
//chooses a random word from the list of words
//removes the previous words/spaces from the screen
//adds this word's spaces to the screen
function playFunc(){
	chosenLetters = [];
	var catRand = Math.floor(Math.random() * 4);
	if (catRand == 0){
		currentCat = states;
		category = "US States";
	} else if (catRand == 1){
		currentCat = foods;
		category = "Foods and Drinks";
	} else if (catRand == 2){
		currentCat = people;
		category = "Historical Figures";
	} else {
		currentCat = animals;
		category = "Animals";
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
		ycoor = 53;
		l.setAttribute("x",xcoor.toString());
		l.setAttribute("y",ycoor.toString());
		l.setAttribute("font-family","sans-serif");
		l.setAttribute("font-size","40px");
		l.textContent="_";
		pic.appendChild(l);
		}
    }
    var c = document.createElementNS("http://www.w3.org/2000/svg", "text");
    xcor = 50;
    ycor = 100;
    c.setAttribute("x",xcor.toString());
    c.setAttribute("y",ycor.toString());
    c.setAttribute("font-family","sans-serif");
    c.setAttribute("font-size","20px");
    var text = "Category: ";
    text = text.concat(category);
    c.textContent = text;
    pic.appendChild(c);


    scoreText.textContent="Score:" + score;
    pic.appendChild(scoreText);
}






