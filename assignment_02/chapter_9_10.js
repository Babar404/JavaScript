////////////////// question 01 //////////

var city = prompt("Enter the name of your city ");

if (city == "karachi") {
    alert("Welcome to the city of lights ")
    
} else {
    alert("Wrong input")
    
}


///////// question 02 /////

var gender = prompt("Enter the name of your city ");

if (gender == "male") {
    alert("Welcome Sir ");
    
} 
else (gender == "female"); {
    alert("Wrong input");
    
}


/////////// ques 03 /////


var color = prompt("Enter the color of the signal light ");

if (color == "red") {
    alert("MUST STOP")
    
} else if (color == "yellow") {
    alert("READY TO MOVE")
}
else (color == "green"); {
    alert("MOVE NOW")
}


/////////// QUES 04 ////


var fuel = prompt("how much is your fuel ? ");


if (fuel < 0.25) {
    alert("Please refill your fuel")
    
}

////////////// ques 05 /////////


var a = 4; 

if (++a === 5){ 
    console.log("given condition for variable a is true");
}

///////// ques 06 //////


var maths = prompt("Enter marks of maths ");
var english = prompt("Enter marks of maths ");
var biology = prompt("Enter marks of maths ");
var total_marks = prompt("Enter total marks ");

var per = ((maths + english + biology)/total_marks)*100;



if (per >= 50 && per <= 60) {
    alert("You have a C grade")
    
}
else if (per >=60 && per < 70) {
    alert ("You have a B grade")
}
else if(per >=70 && per < 100){
    alert("You have a A grade")
}
else {
    alert("You are fail")
}


////// ques 07 //////

var secretNumber = 125;
var Guess= prompt("Please select your secret number");

if(Guess == secretNumber){
   document.write("<p1>Bingo! you got it</p1><br/>");   
}else if(Guess == ++secretNumber){
   document.write("<p1>You are very close enough</p1><br/>");
}else {
  document.write("<p1>Try again</p1><br/>");
};


//////////// ques 08 ////////



var Given= prompt("Please select your number");
var reminder = Number(Given) % 3;
if(reminder === 0){
   document.write("<p1>Your number is divisible by 3</p1><br/>");   
}else {
  document.write("<p1>Try again</p1><br/>");
};

/////////// ques 09 ///////


var Given= prompt("Please select your number");
var reminder = Number(Given) % 2;
if(reminder === 0){
   document.write("<p1>You have entered an even number</p1><br/>");   
}else {
  document.write("<p1>You have entered an odd numebr</p1><br/>");
};




////////// ques 10 //////

var T= prompt("Please enter today's temperature");





if(T > 40){
   document.write("<p1>It is too hot outside </p1><br/>");   
}else if(T > 30 && T <= 40){
   document.write("<p1>The weather today is normal</p1><br/>");
}else if(T > 20 && T <= 30){
  document.write("<p1>Todaty's weather is cool</p1><br/>");
}else if(T > 10 && T <= 20){
  document.write("<p1>OMG! Today's weather is so cool</p1><br/>");
};




////////// ques 11 //////

var FirstNumber = prompt("Please enter First number");
var SecondNumber = prompt("Please enter Second number");
var Operator = prompt("What function you want to perform - please enter sign only e.g +,-,*,/,&");
var num1 = Number(FirstNumber);
var num2 = Number(SecondNumber);


if(Operator === "+"){
   document.write(num1+num2);   
}else if(Operator === "-") {
  document.write(num1 - num2);
}else if(Operator === "*") {
  document.write(num1 * num2);
}else if(Operator === "/") {
  document.write(num1 / num2);
}else if(Operator === "%") {
  document.write(num1 % num2);
};



































































