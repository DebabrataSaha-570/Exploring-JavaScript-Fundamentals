var books = ['misir ali', 'himu', 'hablu', 'frog', 'friends']

var habluIndex = books.indexOf('hablu')
console.log(habluIndex) //2

var secondIndexBooks = books[2]
console.log(secondIndexBooks) //hablu 

var tenthIndexBooks = books[10]
console.log(tenthIndexBooks) // undefined
// .................................... 

var numbers = [45, 98, 65, 72, 52, 63]
var index72 = numbers.indexOf(72)
console.log(index72) // 3

index152 = numbers.indexOf(152)
console.log(index152) // -1

var tenIndexNumber = numbers[10]
console.log(tenIndexNumber) //undefined

// .......changing the numbers of array ........ 

numbers[0] = 96;
console.log(numbers) // [ 96, 98, 65, 72, 52, 63 ]