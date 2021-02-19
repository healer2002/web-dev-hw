/* HEALTHY BMI is between 18.5 to 24.9!
You are trying to compare your BMI (Body Mass Index) with your friend's BMI.
BMI is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).

1. Store you and your friend's mass and height in variables using prompts
2. Calculate both BMIs and store them in separate variables
3. Display you and your friends mass, height, and BMI on the screen
4. Using if else statements, write if you and your friend have a healthy BMI
5. Also write if you or your friend have a higher BMI
6. Using the chart below, write you and your friend's weight status

BMI	              Weight Status
Below 18.5	      Underweight
18.5—24.9	        Normal
25.0—29.9	        Overweight
Over 30.0    	    Obese

GOOD LUCK ‍💪
*/

var myMass = prompt("Enter your mass: (Kg)", "")
var myHeight = prompt("Enter your height: (Meter)", "")
var friendMass = prompt("Enter your friend's mass: (Kg)", "")
var friendHeight = prompt("Enter your friend's height: (Meter)", "")
var myBMI = myMass/(myHeight*myHeight)
var friendBMI = friendMass/(friendHeight*friendHeight)

document.write(`My Mass: ${myMass}`)
document.write("<br><br>")
document.write(`My Height:${myHeight}`)
document.write("<br><br>")
document.write(`My BMI: ${myBMI}`)
document.write("<br><br>")
document.write("<br><br>")
document.write(`My friend's Mass: ${friendMass}`)
document.write("<br><br>")
document.write(`My friend's Height: ${friendHeight}`)
document.write("<br><br>")
document.write(`My friend's BMI: ${friendBMI}`)
document.write("<br><br>")
document.write("<br><br>")

if(myBMI < 18.5){
    document.write(`My weight status is underweight.`)
}else if (myBMI < 24.9){
    document.write(`My weight status is normal.`)
}else if(myBMI < 29.9){
    document.write(`My weight status is overweight.`)
}else{
    document.write(`My weight status is obese.`)
}
document.write("<br><br>")
if(friendBMI < 18.5){
    document.write(`My friend's weight status is underweight.`)
}else if (friendBMI < 24.9){
    document.write(`My friend's weight status is normal.`)
}else if(friendBMI < 29.9){
    document.write(`My friend's weight status is overweight.`)
}else{
    document.write(`My friend's weight status is obese.`)
}

document.write("<br><br>")
document.write("<br><br>")
if(myBMI > friendBMI){
    document.write(`My BMI is higher than my friend's BMI.`)
}else if(myBMI < friendBMI){
    document.write(`My friend's BMI is higher than my BMI.`)
}else{
    document.write(`We have the same BMI.`)
}

