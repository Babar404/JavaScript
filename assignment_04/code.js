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




///////////  ques 8  /////

function numToWords(num) {

    var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    var tens = ["", "", "twenty", "thirty", "forty","fifty", "sixty", "seventy", "eighty", "ninety"];

    if (num < 20) {
        return ones[num];
    }
    else if (num >= 20 && num < 100) {               //for two digits
        
        var sNum = num.toString();                  //convert to string
        var firstChar = sNum.charAt(0);             //separating first string
        var secondChar = sNum.charAt(1);            //separating second string

        var firstDigit = parseInt(firstChar);       //convert to number
        var secondDigit = parseInt(secondChar);     //convert to number

        return tens[firstDigit] + " " + ones[secondDigit];
    }
    else if (num >= 100 && num < 1000) {               //for three digits
        
        var sNum = num.toString();                  //convert to string
        var firstChar = sNum.charAt(0);             //separating first string
        var secondChar = sNum.charAt(1);            //separating second string
        var thirdChar = sNum.charAt(2);            //separating third string

        var firstDigit = parseInt(firstChar);       //convert to number
        var secondDigit = parseInt(secondChar);     //convert to number
        var thirdDigit = parseInt(thirdChar);     //convert to number

        return ones[firstDigit] + " " + "hundred" + " and " + tens[secondDigit] + " " + ones[thirdDigit];
    }
    else {
        document.write("Not Found");
    }

}


document.write(numToWords(999));


document.write("<br>" + "</br>"); //two new lines



////////// ques12 ///////

var rightNow = new Date();
var theDate = rightNow.getDate();

if (theDate < 16) {
    document.write("First fifteen days of the month");
}
else {
    document.write("Last days of the month");    
}



document.write("<br>" + "</br>"); //two new lines

/////////// ques13 //////

var rightNow = new Date();
var mSec = rightNow.getTime();
var min = mSec / (1000*60);

document.write("Current Time: " + rightNow);
document.write("<br>" + "Elapsed miliseconds since Jan 1, 1970: " + mSec);
document.write("<br>" + "Elapsed minutes since Jan 1, 1970: " + min);


document.write("<br>" + "</br>"); //two new lines

/////////// ques14 ////////

var d = new Date();
var currentHours = d.getHours();   //extracting hours
var d1 = new Date();
var resetHours = d1.setHours(currentHours - 1);  //setting new hours in the new date object "d1"

document.write("Current Date: " + d);
document.write("<br>" + "1 hour ago, it was " + d1);


































