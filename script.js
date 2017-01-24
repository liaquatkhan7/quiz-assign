	// var question1 = "Which star is at the center of our Solar System";
	// var question2 = "How many stars are in the Milky Way";
	// var question3 = "How much time does sun rays take to reach earth";
	// var question4 = "Which planet isnearest tothe earth";
	// var question5 = "What is the diameter of EARTH?";
	// var question6 = "Which is the largest planet in our solar system";
	// var question7 = "What is the distance between sun and earth";
	// var question8 = "What is the Average distance of Moon from Earth";
	// var question9 = "Who was the first person to set foot on the Moon";
	// var question10 ="When was the Earth formed?";

	var quizQuestions = ["Which star is at the center of our Solar System","How many stars are in the Milky Way","How much time does sun rays take to reach earth","Which planet is nearest to the earth","What is the diameter of EARTH?","Which is the largest planet in our solar system","What is the distance between sun and earth","What is the Average distance of Moon from Earth","Who was the first person to set foot on the Moon","When was the Earth formed?",]

	// var quiz1question = [
	// {question0: "Which star is at the center of our Solar System", choices: ["sun","moon","mars","satrun"], rightChoise: "sun",}
	// ]

var quiz = {
	question1: "Which star is at the center of our Solar System",
	answer1: "sun",
	question2: "How many stars are in the Milky Way",
	answer2: "more than 100 billion",
	question3: "How much time does sun rays take to reach earth",
	answer3:"8 minutes",
	question4: "Which planet is nearest to the earth",
	answer4: "mercury",
	question5: "What is the diameter of EARTH?",
	answer5: "7,918 miles (12,742 km)",
	question6: "Which is the largest planet in our solar system",
	answer6: "jupiter",
	question7: "What is the distance between sun and earth",
	answer7: "238,855 miles (384,400 km)",
	question8: "What is the Average distance of Moon from Earth",
	answer8: "92,960,000 miles (149,600,000 km)",
	question9: "Who was the first person to set foot on the Moon",
	answer9: "Neil Armstrong",
	question10: "When was the Earth formed?",
	answer10: "approximately 4.54 billion years ago"
}

var allUsers = [];
function signUp() {
	var name = document.getElementById("name").value;
	var pass = document.getElementById("pass").value;
		if(name == ""){
			alert("Please Enter NAME");
		}
		
		else if (pass == ""){
			alert("Please Enter PASSWORD");
		}
		
		else{
			var nameAndPass = {
					name: name,
					passW: pass
			}
			allUsers.push(nameAndPass)
			console.log(JSON.stringify(allUsers));
			localStorage.setItem("userData",JSON.stringify(allUsers));
			window.location.href = "firstpage.html"; 
			
	}
}
var clock = document.getElementById("clock");
var sec = 0;
var mint = 0;
clock.innerHTML = mint+" : "+sec;
function clc(){
	sec++;
	if(sec <= 30){
            if( sec === 30 ){
                sec = 0;
				mint++;
                    if( mint === 60){
						window.location.href = "result.html"
                    }
            }
    }
    else {
        sec = 0;
    }
	clock.innerHTML = mint+" : "+sec;
}
var hereistimeer = setInterval (clc, 1000);
var count = 0;
var number = 1;
var answers = [];
var olnods = document.getElementById("orderLi");
var saveDivAdd = document.getElementById("q");
var but = document.getElementById("butt");
var saveHeading = document.getElementById("headingForQuestions");
var l1 = document.getElementById("rad1");
var l2 = document.getElementById("rad2");
var l3 = document.getElementById("rad3");
var l4 = document.getElementById("rad4");
function onSub (){
	var radios = document.getElementsByName('question1');
	if( number == 1){
		number++;
		var a = document.querySelector('input[name="question1"]:checked').value;
		if( a == "sun"){
			count += 1;
			saveHeading.innerHTML = quiz.question2;	

			l1.innerHTML = quiz.answer2 + " ";
			l2.innerHTML = "more than 1000 billion ";
			l3.innerHTML =  "more than 20000 billion ";
			l4.innerHTML = "more than 30 billion ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","100");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","200");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","300");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","100");
			l4.appendChild(i4);
			
			
			
		}
		else{
			
			saveHeading.innerHTML = quiz.question2;	
			l1.innerHTML = quiz.answer2 + " ";
			l2.innerHTML = "more than 1000 billion ";
			l3.innerHTML =  "more than 20000 billion ";
			l4.innerHTML = "more than 30 billion ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","100");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","200");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","300");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","100");
			l4.appendChild(i4);
			}
	}
	else if ( number == 2){
		number++;
		var a = document.querySelector('input[name="question1"]:checked').value;
		if ( a == "100"){
			count += 1;
			saveHeading.innerHTML = quiz.question3;	
			l1.innerHTML = quiz.answer3 + " ";
			l2.innerHTML = "10 minutes ";
			l3.innerHTML =  "5 minutes ";
			l4.innerHTML = "3 minutes ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","8");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","10");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","5");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","3");
			l4.appendChild(i4);
			answers.push("2")
		}
		else{
			saveHeading.innerHTML = quiz.question3;	
			l1.innerHTML = quiz.answer3 + " ";
			l2.innerHTML = "10 minutes ";
			l3.innerHTML =  "5 minutes ";
			l4.innerHTML = "3 minutes ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","8");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","10");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","5");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","3");
			l4.appendChild(i4);
		}
	}
	else if(number == 3){
		number++;
		var a = document.querySelector('input[name="question1"]:checked').value;
		if(a == 8){
			count += 1;
			saveHeading.innerHTML = quiz.question4;	
			l1.innerHTML = quiz.answer4 + " ";
			l2.innerHTML = "venus ";
			l3.innerHTML = "mars ";
			l4.innerHTML = "sun ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","mercury");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","venus");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","mars");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","sun");
			l4.appendChild(i4);
			answers.push("3");			
		}
		else{
			saveHeading.innerHTML = quiz.question4;	
			l1.innerHTML = quiz.answer4 + " ";
			l2.innerHTML = "venus ";
			l3.innerHTML = "mars ";
			l4.innerHTML = "sun ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","mercury");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","venus");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","mars");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","sun");
			l4.appendChild(i4);
		}
	}
	else if(number == 4){
		number++;
		var a = document.querySelector('input[name="question1"]:checked').value;
		if(a == "mercury"){
			count += 1;
			saveHeading.innerHTML = quiz.question5;	
			l1.innerHTML = quiz.answer5 + " ";
			l2.innerHTML = "6,000 miles (1,742 km) ";
			l3.innerHTML = "3,918 miles (3,72 km) ";
			l4.innerHTML = "100 miles (11,2 km) ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","7");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","6");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","3");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","1");
			l4.appendChild(i4);
			answers.push("4");
		}
		else{
			saveHeading.innerHTML = quiz.question5;	
			l1.innerHTML = quiz.answer5 + " ";
			l2.innerHTML = "6,000 miles (1,742 km) ";
			l3.innerHTML = "3,918 miles (3,72 km) ";
			l4.innerHTML = "100 miles (11,2 km) ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","7");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","6");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","3");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","1");
			l4.appendChild(i4);
		}
	}
	else if(number == 5){
		number++;
		var a = document.querySelector('input[name="question1"]:checked').value;
		if(a == "7"){
			count += 1;
			saveHeading.innerHTML = quiz.question6;	
			l1.innerHTML = quiz.answer6 + " ";
			l2.innerHTML = "Saturn ";
			l3.innerHTML = "Uranus ";
			l4.innerHTML = "Earth ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","jupiter");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","satrun");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","uranus");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","earth");
			l4.appendChild(i4);
			answers.push("5");
		}
		else{
			saveHeading.innerHTML = quiz.question6;	
			l1.innerHTML = quiz.answer6 + " ";
			l2.innerHTML = "Saturn ";
			l3.innerHTML = "Uranus ";
			l4.innerHTML = "Earth ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","jupiter");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","satrun");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","uranus");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","earth");
			l4.appendChild(i4);
		}
	}
	else if(number == 6){
		number++;
		var a = document.querySelector('input[name="question1"]:checked').value;
		if(a == "jupiter"){
			count += 1;
			saveHeading.innerHTML = quiz.question7 ;	
			l1.innerHTML = quiz.answer7 + " ";
			l2.innerHTML = "738,85 miles (84,00 km) ";
			l3.innerHTML = "538,845 miles (34,40 km) ";
			l4.innerHTML = "438,835 miles (784,480 km) ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","238");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","1");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","2");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","6");
			l4.appendChild(i4);
			answers.push("6")			
		}
		else{
			saveHeading.innerHTML = quiz.question7;	
			l1.innerHTML = quiz.answer7 + " ";
			l2.innerHTML = "738,85 miles (84,00 km) ";
			l3.innerHTML = "538,845 miles (34,40 km) ";
			l4.innerHTML = "438,835 miles (784,480 km) ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","238");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","1");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","2");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","6");
			l4.appendChild(i4);
		}
	}
	else if(number == 7){
		number++;
		var a = document.querySelector('input[name="question1"]:checked').value;
		if(a == "238"){
			count += 1;
			saveHeading.innerHTML = quiz.question8;	
			l1.innerHTML = quiz.answer8 + " ";
			l2.innerHTML = "10,960,000 miles (49,0,000 km) ";
			l3.innerHTML = "9,960,000 miles (19,00,000 km) ";
			l4.innerHTML = "2,960,000 miles (14,600,00 km) ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","92");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","1");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","2");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","6");
			l4.appendChild(i4);
			answers.push("7");
		}
		else{
			saveHeading.innerHTML = quiz.question8;	
			l1.innerHTML = quiz.answer8 + " ";
			l2.innerHTML = "10,960,000 miles (49,0,000 km) ";
			l3.innerHTML = "9,960,000 miles (19,00,000 km) ";
			l4.innerHTML = "2,960,000 miles (14,600,00 km) ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","92");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","1");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","2");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","6");
			l4.appendChild(i4);
		}
	}
	else if(number == 8){
		number++;
		var a = document.querySelector('input[name="question1"]:checked').value;
		if(a == "92"){
			count += 1;
			saveHeading.innerHTML = quiz.question9;	
			l1.innerHTML = quiz.answer9 + " ";
			l2.innerHTML = "Edwin ";
			l3.innerHTML = "Alan Shapered ";
			l4.innerHTML = "John Mathew ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","neil");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","edwin");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","alan");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","john");
			l4.appendChild(i4);	
			answers.push("8");
		}
		else{
			saveHeading.innerHTML = quiz.question9;	
			l1.innerHTML = quiz.answer9 + " ";
			l2.innerHTML = "Edwin ";
			l3.innerHTML = "Alan Shapered ";
			l4.innerHTML = "John Mathew ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","neil");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","edwin");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","alan");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","john");
			l4.appendChild(i4);		
		}
	}
	else if(number == 9){
		number++;
		var a = document.querySelector('input[name="question1"]:checked').value;
		if(a == "neil"){
			count += 1;
			saveHeading.innerHTML = quiz.question10;	
			l1.innerHTML = quiz.answer10 + " ";
			l2.innerHTML = "approximately 5.34 billion years ago ";
			l3.innerHTML = "approximately 6.43 billion years ago ";
			l4.innerHTML = "approximately 7.53 billion years ago ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","4");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","5");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","6");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","7");
			l4.appendChild(i4);
			answers.push("9");
			
		}
		else{
			saveHeading.innerHTML = quiz.question10;	
			l1.innerHTML = quiz.answer10 + " ";
			l2.innerHTML = "approximately 5.34 billion years ago ";
			l3.innerHTML = "approximately 6.43 billion years ago ";
			l4.innerHTML = "approximately 7.53 billion years ago ";
			
			i1 = document.createElement("input");
			i1.setAttribute("type","radio");
			i1.setAttribute("name","question1");
			i1.setAttribute("value","4");
			l1.appendChild(i1);
			
			i2 = document.createElement("input");
			i2.setAttribute("type","radio");
			i2.setAttribute("name","question1");
			i2.setAttribute("value","5");
			l2.appendChild(i2);
			
			i3 = document.createElement("input");
			i3.setAttribute("type","radio");
			i3.setAttribute("name","question1");
			i3.setAttribute("value","6");
			l3.appendChild(i3);
			
			i4 = document.createElement("input");
			i4.setAttribute("type","radio");
			i4.setAttribute("name","question1");
			i4.setAttribute("value","7");
			l4.appendChild(i4);
		}
	}
	else{
		// var olnods = document.getElementById("orderLi");
		// olnods.removeChild(l1);
		// console.log(olnods);
		// l1.removeChild(i1);
		// l2.removeChild(i2);
		// l3.removeChild(i3);
		// l4.removeChild(i4);
		olnods.removeChild(l1);
		olnods.removeChild(l2);
		olnods.removeChild(l3);
		olnods.removeChild(l4);
		saveDivAdd.removeChild(but)
		
		var percentage = (count * 100) / quizQuestions.length;
		saveHeading.innerHTML = "Total Coreect answers are <br> " + count + "<br> percentage is <br>" + percentage + "%" ;
		
	}
}

// console.log(refromfunction);
// console.log(number + " 1");
// console.log(count+" 2");
// console.log(answers);
// function res (){
	// console.log(refromfunction);
	// totalNumbers = answers.length;
	// console.log(number + "1")
	// console.log(totalNumbers + "2");
	// var percentage = count;
	// document.getElementById("result").innerHTML = percentage;
// }



// }
//finding the input radio value checked 
// for (var i = 0; i < radios.length; i++) {
		// if (radios[i].checked) {
			// alert(radios[i].value);
			// break;
    // }
// }
// function creatingRadio (){
	// var input1 =  document.createElement("input");
	// input1.setAttribute("type", "radio");
	// input1.setAttribute("value", "sun");
	// input1.setAttribute("name", "ques1")
	// saveDivAdd.appendChild(input1);
	// var input2 =  document.createElement("input");
	// input2.setAttribute("type", "radio");
	// input2.setAttribute("value", "mars");
	// input2.setAttribute("name", "ques1")
	// saveDivAdd.appendChild(input2);
	// var input3 =  document.createElement("input");
	// input3.setAttribute("type", "radio");
	// input3.setAttribute("value", "vanus");
	// input3.setAttribute("name", "ques1")
	// saveDivAdd.appendChild(input3);
	// var input4 =  document.createElement("input");
	// input4.setAttribute("type", "radio");
	// input4.setAttribute("value", "satrun");
	// input4.setAttribute("name", "ques1")
	// saveDivAdd.appendChild(input4);
// }
// for (i=0; i<quiz1question.length; i++){
	
	// var heading = document.getElementById("headingForQuestions").innerHTML = quiz1question[i].question0; 
// }

