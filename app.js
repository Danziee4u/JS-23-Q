// var userName= prompt("Enter Username","Danziee");

// if(userName==="Danziee")
// {
//     console.log("Success");
// }
// else
// {
//     console.log("Not Found");
// }

// var userName = prompt("Enter Username : ", "User");
// var mail = prompt("Enter Mail : " , "dani@gmail.com");

// if(userName==="User"||mail==="dani@gmail.com")
// {

// var grade= +prompt("Enter Grade","90");
// var result;

// if(grade >= 80 && grade <= 100  )
// {
//     result="A";
// }

// else if(grade >= 70 && grade <= 79  ){
//     result="B";
// }


// else if(grade >= 60 && grade < 69){
//     result="C";
// }


// else if(grade < 60){
//     result="Fail";
// }

// else
// {
//     console.log("Invalid Input");
// }

// console.log(result);
// }
// else{
//     console.log("User Not Found");    
// }


// Question 1
alert("Question 1");
var userName= prompt("Please Enter Your Name","Danziee");
alert("Hi " + userName);

// Question 2
alert("Question 2");
var table= +prompt("Enter Table Number","5");

console.log(table + " x 1 = " + table*1);
console.log(table + " x 2 = " + table*2);
console.log(table + " x 3 = " + table*3);
console.log(table + " x 4 = " + table*4);
console.log(table + " x 5 = " + table*5);
console.log(table + " x 6 = " + table*6);
console.log(table + " x 7 = " + table*7);
console.log(table + " x 8 = " + table*8);
console.log(table + " x 9 = " + table*9);
console.log(table + " x 10 = " + table*10);

// Question 3
alert("Question 3");
var city = prompt("Please Enter Your City" , "Karachi");

if(city==="Karachi")
{
    alert("Welcome To The City Of Light");
}
else{
    alert("Invalid Input");
}

// Question 4
alert("Question 4");
var gender= prompt("Enter Your Gender","Male");

if(gender==="Male"){
    console.log("Good Morning Sir");
}
else if(gender==="Female")
{
    console.log("Good Morning Ma'am");
}
else
{
    console.log("Invalid Input");
}

// Question 5
alert("Question 5");
var signal= prompt("Enter Signal Color","Red");

if(signal==="Red")
{
    console.log("Vehicles Must Stop")
}
else if (signal==="Yellow"){
    console.log("Vehicles Should Get Ready To Move");

}

else if (signal==="Green"){
    console.log("Vehicles Can Move Now");

}
else{
    console.log("Invalid Signal Color");
}

// Question 6
alert("Question 6");
var maxAge=60;
var currentAge= +prompt("Enter Your Age " , "30");

if(currentAge<=60){
    console.log("You Are Welcome");
}
else{
    console.log("Sorry ! You Are Over Age");
}

//Question 7
alert("Question 7");
var minLitre=0.25;
var litre=+prompt("Enter Remaining Fuel In Car " , "0.42");

if(litre<minLitre)
{
    console.log("Please Refill The Fuel In Your Car");
}
else{
    console.log("Your Current Fuel Is " + litre);
}

//Question 8
alert("Question 8");
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


if (true){
alert("True");
}
if (false){
alert("False");
}


if("car" < "cat"){
alert("car is smaller than cat");
}

// Question 9
alert("Question 9");
var totalMarks = 300;
var HTML5Marks = +prompt("HTML5 Marks");
var Css3Marks = +prompt("Css Marks");
var JSMarks = +prompt("Javascript Marks");

var obtMarks = HTML5Marks + Css3Marks + JSMarks;

var percentage = (obtMarks*100)/totalMarks;

var remarks;
var grade;

if(percentage>=80){
    
    remarks = "Excellent";
    grade = "A-One"; 
}
else if(percentage>=70){
    
    remarks = "Good";
    grade = "A";
}


else if(percentage>=60){
    remarks = "You Need To Improve";
    grade = "B";
}

else if(percentage<60){

    remarks = "Sorry";
    grade = "Fail";
}


else{
    console.log("Invalid Input");
}

console.log("Total Marks : " + totalMarks);
console.log("Obtained Marks : " + obtMarks);
console.log("Percentage : " + percentage);
console.log("Grade : " + grade);
console.log("Remarks : " + remarks);





// Question 10
alert("Question 10");

var item1 = prompt("Enter Item1");
var priceItem1 = +prompt("Enter Price Of " + item1);
var qntItem1 = +prompt("Quantity Of " + item1);
var item2 = prompt("Enter Item2");
var priceItem2 = +prompt("Enter Price Of " + item2);
var qntItem2 = +prompt("Quantity Of " + item2);



var totalPriceItem1 = priceItem1*qntItem1;
var totalPriceItem2 = priceItem2*qntItem2;

var totalCost = totalPriceItem1 + totalPriceItem2 ;

var shipCh=120;
var discount;

console.log("Price Of " + item1 + " Is " + priceItem1 + " PKR");
console.log("Quantity Of " + item1 + " Is " + qntItem1);
console.log("Total Price Of " + item1 + " Is " + totalPriceItem1 + " PKR");
console.log("Price Of " + item2 + " Is " + priceItem2 + " PKR");
console.log("Quantity Of " + item2 + " Is " + qntItem2);
console.log("Total Price Of " + item2 + " Is " + totalPriceItem2 + " PKR");

console.log("Shipping Charges " + shipCh);
console.log("Total Cost Of Your Order Is " + totalCost  + " PKR");

if(totalCost >= 2000)
{
    discount=(totalCost*10)/100;
}

console.log("Discounted Price Is " + discount + "PKR");


//Question 11
alert("Question 11");
var actualNum = 5;
var guess = +prompt("Guess The Number");

if (guess === actualNum){
    console.log("Bingo!");
}
else if(guess === --actualNum || guess === 6) {
    console.log("Close Enough To The Correct Answer");
}
else {
    console.log("Try Again");
}


//Question 12
alert("Question 12");
var checkNum = +prompt("Enter Number To Check Whether It Is Divisible Of 3 Or Not");

if (checkNum%3===0) {
    console.log("Yes " + checkNum + " It Is Divisible By 3");
}
else{
    console.log("No !! " + checkNum + " It Is Not Divisible By 3");
}

//Question 13 
alert("Question 13");
var team1 = prompt("Enter Team1 Name ");
var scoreTeam1 = +prompt("Enter Score Of Team " + team1 );
var team2 = prompt("Enter Team2 Name ");
var scoreTeam2 = +prompt("Enter Score Of Team " + team2 );

if (scoreTeam1 > scoreTeam2)
{
    alert(team1 + " Has Won The Match");
}

else if ( scoreTeam1 < scoreTeam2 )
{
    alert(team2 + " Has Won The Match");
}
else if ( scoreTeam1 === scoreTeam2)
{
    alert("Match Has Been Tied Between " + team1 + " And " + team2);
}

//Question 14
alert("Question 14");
 var chString = "Pakistan"
 var chNumber = 15;
 var chBoolean = true;

 alert("TypeOf Pakistan Is " +  typeof chString);
 alert("TypeOf 15 Is " +  typeof chNumber);
 alert("TypeOf true Is " +  typeof chBoolean);

//Question 15 
alert("Question 15");
var chckNum = +prompt("Enter Number To Check Whether It Is Even Or Odd");

if (chckNum%2==0) {
    alert(chckNum+" Is Even");
}
else{
    alert(chckNum+" Is Odd");
}


//Question 16
alert("Question 16");
var T = +prompt("Enter Karachi's Temperature");

if (T>=40) {
    alert("It Is Too Hot Outside");
}
else if (T>=30 && T<40)
{
    alert("The Weather Today Is Normal");
}

else if (T>=20 && T<30)
{
    alert("Today's Weather Is So Cool");
}

else if (T>=10 && T<20)
{
    alert("OMG !!! Today's Weather Is So Cool");
}


//Question 17
alert("Question 17");
var firstNumber = +prompt("Enter First Number");
var secondNumber = +prompt("Enter Second Number");
var operation = prompt("Enter Operation i.e + , - , * , / , %");
var resultt;
if (operation==="+"){
    resultt= firstNumber+secondNumber;
    alert(firstNumber + " + " + secondNumber + " = " + resultt  );
}
else if(operation==="-"){
    resultt= firstNumber-secondNumber;
    alert(firstNumber + " - " + secondNumber + " = " + resultt  );
}
else if(operation==="*"){
    resultt= firstNumber*secondNumber;
    alert(firstNumber + " x " + secondNumber + " = " + resultt  );
}
else if(operation==="/"){
    resultt= firstNumber-secondNumber;
    alert(firstNumber + " / " + secondNumber + " = " + resultt  );
}
else if(operation==="%"){
    resultt= (firstNumber*secondNumber)/100;
    alert(firstNumber + " % " + secondNumber + " = " + resultt  );
}
else{
    alert("Invalid Input");
}

//Question 18
alert("Question 18");
var days = prompt("Enter Day Name");

if (days === "Monday" || days === "Tuesday" || days === "Wednesday" || days === "Thrusday" || days === "Friday") {
    alert("It's A Week Day");
}
else if (days === "Saturday") {
    alert("It's Weekend");
}
else if (days === "Sunday") {
    alert("Yay! It's Holiday");
}
else{
    alert("Invalid Input");
}

//Question 19 
alert("Question 19");
var userScore = +prompt("Enter User's Score");

if (userScore>=50 && userScore < 100) {
    alert("You Are Passed");
}
else if(userScore>100){
    alert("Enter Between 1 to 100");
}
else {
    alert("Try Again");
}

//Question 20 
alert("Question 20");
var compNum1 = +prompt("Enter First Number To Compare");
var compNum2 = +prompt("Enter Second Number To Compare");

if (compNum1>compNum2) {
    alert(" Ther Greater Of " + compNum1 + " And " + compNum2 + " Is " + compNum1);
}
else if (compNum1<compNum2) {
    alert(" Ther Greater Of " + compNum1 + " And " + compNum2 + " Is " + compNum2);
}
else if (compNum1 === compNum2) {
    alert(compNum1 + " Is Equal To " + compNum2);
}

//Question 21 
alert("Question 21");
var lang = prompt("Enter Language Code i.e en , ur , fr . To print HELLO WORLD in the desired language");

if (lang === "en") {
    alert("Hello World");
}
else if (lang === "ur") {
    alert("ہیلو دنیا");
}
else if (lang === "fr") {
    alert("Bonjour le monde");
}
else{
    alert("Invalid Input");
}

//Question 22
alert("Question 22");
var chNum = +prompt("Enter Number (Positive Or Negative)");

if (chNum<0) {
    alert(chNum +" Is Negative");
}
else if (chNum>=0)
{
    alert(chNum +" Is Positive");
}

//Question 23
alert("Question 23");
var noun = prompt("Enter Noun");
var nounNumber = +prompt("Enter Noun's Quantity/Number");

if (nounNumber===1) {
    alert(nounNumber +" " +noun);
}
else if (nounNumber > 1) {
    alert(nounNumber + " " + noun + "s")
}
else
{
    alert("Invalid Input");
}