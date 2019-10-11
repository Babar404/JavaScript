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

for (i=0; i <aCities.length; i++ )
document.write(o[i+1] + " choice is " + aCities[0]         );














































