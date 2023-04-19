var npm = require('readline-sync')

var num1 = npm.question('Enter The First Number')
var num2 = npm.question('Enter The Second Number')
var opp = npm.question('Enter The Operator Symbol')
 // conditions
  if(opp == "+"){
    sum = num1 + num2
    console.log(sum)
  }
  if(opp == "-"){
    sum = num1 - num2
    console.log(sum)
  }
  if(opp == "*"){
    sum = num1 * num2
    console.log(sum)
  }
  if(opp == "/"){
    sum = num1 / num2
    console.log(sum)
  }
