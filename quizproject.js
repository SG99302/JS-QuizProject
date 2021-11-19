let currentQuestion = 0; // the question the user is on
let score = 0; // number of correct answers

let numHintsLeft = 3; // allows user to see 2 hints

let questions = [
   {
	"question": "Which capital city does this country match with?",
	"a": "Paris",
	"b": "New Delhi",
	"c": "Buenos Aires",
	"d": "Seoul",
	"image":"quizimages/india.jpg",
	"answer": "b",
	"hint": "It is the capital city of India."
   },
   {
	"question": "Which capital city does this country match with?",
	"a": "Cape Town",
	"b": "Stockholm",
	"c": "Kuala Lampur",
	"d": "Accra",
	"image":"quizimages/southafrica.jpg",
	"answer": "a",
	"hint": "It is the capital city of South Africa."
   },
   {
	"question": "Which capital city does this country match with?",
	"a": "Ottawa",
	"b": "Rio de Janeiro",
	"c": "Moscow",
	"d": "Canberra",
	"image":"quizimages/australia.jpg",
	"answer": "d",
	"hint": "It is the capital city of Australia."
   },
   {
	"question": "Which capital city does this country match with?",
	"a": "Mexico City",
	"b": "Berlin",
	"c": "Islamabad",
	"d": "Washington D.C.",
	"image":"quizimages/pakistan.jpg",
	"answer": "c",
	"hint": "It is the capital city of Pakistan."
   },
   {
	"question": "Which capital city does this country match with?",
	"a": "London",
	"b": "Sofia",
	"c": "Copenhagen",
	"d": "Lima",
	"image":"quizimages/england.jpg",
	"answer": "a",
	"hint": "It is the capital city of England."
   },
   {
	"question": "Which capital city does this country match with?",
	"a": "Ankara",
	"b": "Santiago",
	"c": "Jerusalem",
	"d": "Wellington",
	"image":"quizimages/newzealand.jpg",
	"answer": "d",
	"hint": "It is the capital city of New Zealand."
   },
   {
	"question": "Which capital city does this country match with?",
	"a": "Quito",
	"b": "Lisbon",
	"c": "Colombo",
	"d": "Lagos",
	"image":"quizimages/srilanka.jpg",
	"answer": "c",
	"hint": "It is the capital city of Sri Lanka."
   },
   {
	"question": "Which capital city does this country match with?",
	"a": "Abu Dhabi",
	"b": "Kabul",
	"c": "Kathmandu",
	"d": "Beijing",
	"image":"quizimages/afghanistan.jpg",
	"answer": "b",
	"hint": "It is the capital city of Afghanistan."
   },
   {
	"question": "Which capital city does this country match with?",
	"a": "Ulaan Bataar",
	"b": "Dhaka",
	"c": "Tokyo",
	"d": "Riyadh",
	"image":"quizimages/bangladesh.jpg",
	"answer": "b",
	"hint": "It is the capital city of Bangladesh."
   },
   {
	"question": "Which capital city does this country match with?",
	"a": "Edinburgh",
	"b": "Madrid",
	"c": "Hanoi",
	"d": "Warsaw",
	"image":"quizimages/scotland.jpg",
	"answer": "a",
	"hint": "It is the capital city of Scotland."
   },
 ];
 
// loads Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vw";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	
	if (currentQuestion == 0) {
		document.getElementById("special").style.backgroundColor = "orange";
		document.getElementById("special2").style.backgroundColor = "navy";
		document.getElementById("special5").style.backgroundColor = "navy";
		document.getElementById("special6").style.backgroundColor = "navy";
		document.getElementById("special3").style.backgroundColor = "#006600";
		document.getElementById("special4").style.backgroundColor = "#006600";
		document.getElementById("special3").style.color = "white";
		document.getElementById("score").style.color = "white";
		document.getElementById("score2").style.color = "white";
		document.getElementById("countdown").style.color = "white";
		document.getElementById("question").style.color = "white";
	}
	else if (currentQuestion == 1) {
		document.getElementById("special").style.backgroundColor = "#cc0000";
		document.getElementById("special3").style.backgroundColor = "#006600";
		document.getElementById("special2").style.backgroundColor = "#24248f";
		document.getElementById("special5").style.backgroundColor = "#24248f";
		document.getElementById("special6").style.backgroundColor = "#24248f";
		document.getElementById("score").style.color = "gold";
		document.getElementById("score2").style.color = "gold";
		document.getElementById("question").style.color = "gold";
	}
	else if (currentQuestion == 2) {
		document.getElementById("special").style.backgroundColor = "#0000cc";
		document.getElementById("special3").style.backgroundColor = "red";
		document.getElementById("special3").style.color = "white";
		document.getElementById("special4").style.backgroundColor = "red";
		document.getElementById("score").style.color = "white";
		document.getElementById("score2").style.color = "white";
		document.getElementById("question").style.color = "white";
	}
	else if (currentQuestion == 3) {
		document.getElementById("special").style.backgroundColor = "#006600";
		document.getElementById("special2").style.backgroundColor = "#00cc00";
		document.getElementById("special3").style.backgroundColor = "#339933";
		document.getElementById("special4").style.backgroundColor = "#339933";
		document.getElementById("special5").style.backgroundColor = "#00cc00";
		document.getElementById("special6").style.backgroundColor = "#00cc00";
	}
	else if (currentQuestion == 4) {
		document.getElementById("special").style.backgroundColor = "#cc3300";
		document.getElementById("special2").style.backgroundColor = "#cc0000";
		document.getElementById("special3").style.backgroundColor = "#cc3300";
		document.getElementById("special4").style.backgroundColor = "#cc3300";
		document.getElementById("special5").style.backgroundColor = "#cc0000";
		document.getElementById("special6").style.backgroundColor = "#cc0000";
	}
	else if (currentQuestion == 5) {
		document.getElementById("special").style.backgroundColor = "#0000cc";
		document.getElementById("special2").style.backgroundColor = "navy";
		document.getElementById("special3").style.backgroundColor = "red";
		document.getElementById("special4").style.backgroundColor = "red";
		document.getElementById("question").style.color = "red";
		document.getElementById("countdown").style.color = "white";
		document.getElementById("score").style.color = "red";
		document.getElementById("score2").style.color = "red";
		document.getElementById("special5").style.backgroundColor = "navy";
		document.getElementById("special6").style.backgroundColor = "navy";
	}
	else if (currentQuestion == 6) {
		document.getElementById("special").style.backgroundColor = "#990033";
		document.getElementById("special2").style.backgroundColor = "#009933";
		document.getElementById("special3").style.backgroundColor = "#ff9933";
		document.getElementById("special4").style.backgroundColor = "#ff9933";
		document.getElementById("special5").style.backgroundColor = "#009933";
		document.getElementById("special6").style.backgroundColor = "#009933";
		document.getElementById("question").style.color = "yellow";
		document.getElementById("score").style.color = "yellow";
		document.getElementById("score2").style.color = "yellow";
		document.getElementById("countdown").style.color = "yellow";
	}
	else if (currentQuestion == 7) {
		document.getElementById("special").style.backgroundColor = "black";
		document.getElementById("special2").style.backgroundColor = "red";
		document.getElementById("special3").style.backgroundColor = "green";
		document.getElementById("special4").style.backgroundColor = "green";
		document.getElementById("special5").style.backgroundColor = "red";
		document.getElementById("special6").style.backgroundColor = "red";
		document.getElementById("question").style.color = "white";
		document.getElementById("countdown").style.color = "white";
		document.getElementById("score").style.color = "white";
		document.getElementById("score2").style.color = "white";
	}
	else if (currentQuestion == 8) {
		document.getElementById("special").style.backgroundColor = "green";
		document.getElementById("special2").style.backgroundColor = "#009900";
		document.getElementById("special3").style.backgroundColor = "red";
		document.getElementById("special4").style.backgroundColor = "red";
		document.getElementById("special5").style.backgroundColor = "#009900";
		document.getElementById("special6").style.backgroundColor = "#009900";
	}
	else if (currentQuestion == 9) {
		document.getElementById("special").style.backgroundColor = "#0000cc";
		document.getElementById("special2").style.backgroundColor = "#3399ff";
		document.getElementById("special3").style.backgroundColor = "#66ccff";
		document.getElementById("special4").style.backgroundColor = "#66ccff";
		document.getElementById("special5").style.backgroundColor = "#3399ff";
		document.getElementById("special6").style.backgroundColor = "#3399ff";
	}
 } // loadQuestion
 
 
 function markIt(ans) {
    
	if(timeleft>=-1 )
	{
		if(currentQuestion < 10)
		{
	
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
	   document.getElementById("lightbox").style.display = "block";
	   document.getElementById("message").style.backgroundColor = "green";
	   document.getElementById("message").innerHTML = message;
	   
    } else {
       message = "Incorrect! Your score is " + score + " / " + questions.length;
	   document.getElementById("lightbox").style.display = "block";
	   document.getElementById("message").style.backgroundColor = "red";
	   document.getElementById("message").innerHTML = message;
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "Congrats! The quiz is over!" + "<br>" + "You scored " + score + " / " + questions.length;
    } else {
       loadQuestion();
    }
	}
	}
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox

function showHint() {
	let message = "";
	
	if(numHintsLeft > 0 && currentQuestion < 10) {
	
	// get hint from currentQuestion
	
		message = questions[currentQuestion].hint;
		numHintsLeft--;
		
	}
	else {
		message = "Sorry, all of your hints have been used up.";
	}
	// unhide lightbox displaying hint
	
	document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
	document.getElementById("message").style.backgroundColor = "orange";
	
}; // show hint

  let timeleft = 60;
  let downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = "<strong>" + timeleft + " seconds remaining" + "</strong>";
  timeleft -= 1;
  if(timeleft <= -1){
	  
    clearInterval(downloadTimer);
	document.getElementById("countdown").innerHTML = "<strong>" + "Finished" + "</strong>"
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").style.backgroundColor = "blue";
	document.getElementById("message").innerHTML = "Time is up. Click anywhere to continue with the quiz";
  }
	if(currentQuestion >= 10){
	clearInterval(downloadTimer);
	document.getElementById("countdown").innerHTML = "<strong>" + "Finished" + "</strong>"	
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").style.backgroundColor = "green";
	document.getElementById("message").innerHTML = "Congrats! The quiz is over!" + "<br>" + "You scored " + score + " / " + questions.length;
  }
}, 1000);

 
 
 
 
   
