////////// ques 01 ///////



var str = prompt("Please write any character ");
var n = str.charCodeAt(0);
if(n >= 48 && n <= 57){
  alert("you have entered numeric");
}else if(n >=65 && n <= 90){
  alert("you have entered upper case characters");
}else if(n >=97 && n <= 122){
  alert("you have entered lower case characters");
}



////// ques 02 //////////



var str1 = prompt("Please enter 1st number ");
var str2 = prompt("Please enter 2nd number ");


var my_array = [];

my_array.push(str1 , str2);

alert (my_array.sort().slice(0));



////// ques 03 /////////



var str1 = prompt("Please enter any number ");
if(str1 < 0){
  alert("You have entered a negative number");
}else if(str1 > 0){
  alert("You have entered a positive number")
}else if(str1 == 0){
  alert("You have entered zero")
}
  



///// ques 04 /////



var str1 = prompt("Please enter vowel ");
var n = str1.charCodeAt(0);

if(n == 65 || n == 69 || n == 73 || n == 79 || n == 85 || n == 97 || n == 101 || n == 105 || n == 111 || n == 117){alert("True");
}else{
  alert("incorrect entry");
}
  



// ques 05 ///

var pword = "ABC123"
var userEntry = prompt("Please enter your password ");
var n = userEntry.charCodeAt(0);

if(n == 0){alert("Please enter password");
}else if(pword === userEntry){
  alert("Correct! The password you entered matches the original password.");
}else {alert("please try again");};
  

////// ques 06 ///


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else{
greeting = "Good evening";
};




//// ques 07 /////


var time = prompt("Please enter time in 24hrs format e.g 1900 = 7 pm", );
if(time >= 0 && time < 1200){
    alert("good morning");
}else if (time >=1200 && time < 1700){
    alert("good afternoon");
}else if (time >=1700 && time < 2100){
    alert("good evening");
}else if(time >= 2100 && time <=2359){
    alert("good night");
}











