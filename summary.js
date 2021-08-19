var tableLength = 12;
var tourDestinations = ['coxsbazar', 'nepal', 'vutan', 'paris']

tourDestinations.indexOf('vutan')

var fourthDestination = tourDestinations[3]

tourDestinations[1] = 'srilanka'

tourDestinations.push('London')
tourDestinations.pop()

if (tourDestinations[1] == 'nepal') {
    console.log('pahare ahare ahare')
}
else if (tourDestinations[1] == 'china') {
    console.log('china tor kache jamu na')
}
else if (tourDestinations.length == 4) {
    console.log('aro taka ase aro besi ghurum')
}
else {
    console.log('kotaho jamu na basay jamu mosa marmu')
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('ami dim khamu')
}
if (eggPrice >= myBudget) {
    console.log('lebu diye vhat khabo')
}

