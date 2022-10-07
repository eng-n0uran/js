document.querySelector("h1").style.color='red';
document.querySelector("h2").style.color='green';

//alert('hello');   
//document.write("<h1>first page</h1>","ya halla");
//console.log("hello from js");
// لتعريف متغير
/*const x="hady";
let age= 20  ;
var con="  sa   ";

document.write(`${x } ${age}
 ${2*2}`);
document.write(con);
document.write("om\n web \n nour");*/

// تاسك 2
/* Asks the user for this name in a dialog
 Outputs a welcome message with this name in another dialog*/
var n = prompt("2What's your name: ");
alert("Welcome!: " + n);
// تاسك 3
/* Asks the user for a number in a dialog
 Outputs the square of that number in another dialog*/
var number = parseInt(prompt("3Please enter a number: "));
alert(number**2);
//تاسك 4
/* Asks the user for two numbers in a dialog
 Outputs the average of these two numbers in another dialog*/
var num1 = parseInt(prompt("4Enter first number: "));
var num2 = parseInt(prompt(" 4Enter second number: "));
alert((num1+num2)/2)
//تاسك 5
/*Asks the user for a number (N) in a dialog  
عدد المرات اللي هتظهرله نافذة تقوله يدخل رقم 
 Asks the user for others numbers N times in a dialog
 الارقام اللي هندخلها علي حسب عدد المرات اللي دخلناه فوق
 Outputs the N numbers in another dialog*/
var numberN = parseInt(prompt(" 5Enter N number: "));
var result=0;
while (numberN>0){
    var num = parseInt(prompt(" 5Enter a number: "));
    numberN--;
    result += num;
}
alert(result);
//تاسك 6
/* Asks the user for a number (C) in a dialog
 Outputs the corresponding value of this number in fahrenheit in another dialog
 To convert number to fahrenheit = number*1.8+32.*/
var num_C = parseInt(prompt("6Enter a(C) number: "));
alert((num_C*1.8)+32);
//تاسك 7
/* Asks the user for a string in a dialog
Outputs the upper case of this string in another dialog*/
var Str = prompt("7Enter a string: ");
alert(Str.toUpperCase());
//تاسك 8
/* Asks the user for a string in a dialog
 hint: small characters start with 97 in ASCII 
 Outputs the sum of the string character's ranks in the alphabtical order in another dialog*/
 var str = prompt("8Enter a string: ");
 var result = 0;
var strLength = str.length-1; 
while (strLength>=0){
    result += str.toLowerCase().charCodeAt(strLength)-96;
    strLength--;
}
alert(result)










