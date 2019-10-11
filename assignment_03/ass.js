/////////////////// question 1 /////////

var pakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil" , "PhD"];

for ( var i = 0; i < pakistan.length; i++){
    document.write((i+1) + ")" + pakistan[i] + "<br>");


}



/// question 02 /////////


var students = ["Ahmed", "Babar" , "Johnny"];

var scores = [169 , 398 , 255];

for (var i = 0; i < students.length; i++){
    document.write("<p>" + "The score of "+ students[i] + " is " + scores[i] + " Percentage is " + (scores[i]/5) + "<br>");
}


////////// question 03 /////////

var colors = ['red ', 'green ', 'blue ', 'orange ', 'yellow '];

var name_of_first_color = window.prompt("Enter the color of your choice ");

colors.unshift(name_of_first_color); //start me add

document.write("<p>" + colors.join(', ') + "<br>");


var name_of_second_color = window.prompt("Enter the color of your choice ");

colors.push(name_of_second_color); //end pe b add

document.write("<p>" + colors.join(', ') + "<br>");

colors.push("black" , "white"); 

colors.shift(); //sab se pehla remove

colors.pop(); // last remove krta hai

var col = prompt("what color ? ");

var index = parseInt(prompt("which index ? "));

//var x = colors.splice(index,0,col);

//document.write("<p>" + "the new array is " + x );


/// question no 4 /////////

var cities = ["karachi" , 'lahore' , 'islamabad' , 'quetta' , 'peshawar'];

var new_cities = cities.slice(1,3);

document.write("<p>" + new_cities);


// question no 5 ///////


var arr1  =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

for (var i = 0; i < arr1.length; i++){
    if (arr1[i] == ) {
        
    } else {
        
    }
}

/// ques 6 ///


var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];

var o = ["th","st","nd","rd"];

for (i=0; i < aCities.length-1; i++ ) {
    document.write( "<p>" + (i+1) + o[i+1] + " choice is " + aCities[i]);
}


///// ques 7 /////

var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var c = [];

for (var i = 0; i < b.length; i++) {

    if (a[i] != b[i]) {

        var d = a.slice(i, i+1);
        var e = b.slice(i, i+1);

        //c[i] = a[i] + b[i];
       // c[i] = b[i];
    }
   // else if (b[i] != a[i]) {
      //  c[i] = b[i];
   // }
}

document.write("<p>" + a);
//document.write("<p>" + b);
//document.write("<p>" + c);
//document.write("<p>" + d);
document.write("<p>" + e);




//////// ques 8 //////

for (var i = 1; i <= 15; i++) {
    document.write(i + " ,"); 
} 

document.write("<br>");

for (var i = 10; i >= 1; i--) {
    document.write( i + " ,");
}

document.write("<br>");

for (var i = 0; i <= 20; i+=2) {
    document.write( i + " ,");
}

document.write("<br>");

for (var i = 1; i <= 20; i+=2) {
    document.write( i + " ,");
}

document.write("<br>");

for (var i = 2; i <= 20; i+=2) {
    document.write( i + "k" + " ,");
}




///////////// ques 9 //////////////

var A = [24, 53, 78, 91, 12];
for (var i = 0; i < A.length; i++) {

    if (A[i] > A[i+1]) {
        alert("is greater");
    }
}














































