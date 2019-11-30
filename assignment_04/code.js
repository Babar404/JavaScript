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

var string = 'The quick brown fox jumps over the lazy dog';
var count = (temp.match(/the/g) || []).length;
console.log('word the occurs ' + count + ' times')


///////////// ques 09 //////////


var html = "<p><strong><em>Only print this</p></strong></em>";
var clean_text = html.text();
console.log(clean_text)


//// ques 10 //////

var decimal_numbers = 1.08899;
console.log(decimal_numbers.toFixed(2))


///// ques 11 ///////
var number = 444;
console.log(math.mean(number))


//////// ques 15 //////

var age = prompt("Enter your age ");
var current_date = new Date()
var birthday = console.log("your birth year is " current_date.getFullYear() - age )


































