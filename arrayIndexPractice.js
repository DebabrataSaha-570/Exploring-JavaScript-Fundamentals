var color = ['lal', 'nill', 'beguni', 'komola', 'holud', 'badami']

var secondIndexColor = color[1]
console.log(secondIndexColor) //nill 

var thirdIndexColor = color[2]
console.log(thirdIndexColor) //beguni


var seventyIndexColor = color[75];
console.log(seventyIndexColor) //undefined


color[2] = 'golapi'
console.log(color) // [ 'lal', 'nill', 'golapi', 'komola', 'holud', 'badami' ]











// var lalPosition = color.indexOf('lal')
// console.log(lalPosition) // 0 

// var komolaPosition = color.indexOf('komola')
// console.log(komolaPosition) // 3

// var golapiColorPosition = color.indexOf('golapi')
// console.log(golapiColorPosition) // -1



// ............................. 

var numbers = [11, 23, 34, 534, 5345, 55]

// var positionOf11 = numbers.indexOf(11)
// console.log(positionOf11) //0

// var position34 = numbers.indexOf(34)
// console.log(position34) //2 

// var position1000 = numbers.indexOf(1000)
// console.log(position1000) // -1