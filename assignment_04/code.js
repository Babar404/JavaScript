/////////// question 01 ////////

var city = 'Hyderabad';
var new_city = city.slice(0,5);
var final_city = city.replace(new_city, "Islam");
document.write(final_city + "<br>");



////// ques 02 //////


var string = "427";
document.write(parseInt(string) + "<br>");


/////// ques 03 /////////



var pw = window.prompt("Enter your password and remember \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 8 characters long")

if (isNaN(pw.slice(0)) && pw.length() == 8 ) {
    document.write("okay" + "<br>")
    
} else {
    document.write("wrong" + "<br>")
}


//////////////// ques 04 /////////

var email = window.prompt("Enter your email address ");

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


///// question 05 ///////

var number = window.prompt("Enter the positive integer");
document.write(number + "<br>")
document.write(Math.round(number) + "<br>")
document.write(Math.floor(number) + "<br>")
document.write(Math.ceil(number) + "<br>")


/////// ques 06 ///////////

document.write(Math.floor(Math.random()) + "<br>")



///////// ques 07 //////////




























