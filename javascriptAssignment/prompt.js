
var amount = prompt("enter the amount")
var rate = prompt("enter the rate")
var  year = prompt("enter the year")

amount = parseInt(amount);
rate = parseInt(rate);
year = parseInt(year);
var simpleinterst = (amount*rate*year)/100;

document.write(simpleinterst);

