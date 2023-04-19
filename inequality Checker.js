var npm = require('readline-sync')

var n1 = npm.question('Enter The First Number')
var n2 = npm.question('Enter The Second Number')

// conditions

if(n1 > n2){
    console.log(n1)
    console.log('Is >')
    console.log(n2)
}
if(n1 < n2){
    console.log(n1)
    console.log('Is <')
    console.log(n2)
}
if(n1 == n2){
    console.log(n1)
    console.log('Is = To')
    console.log(n2)
}