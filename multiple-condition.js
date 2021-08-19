var gotJob = false;
var savedMoney = 150000;
var hasFlat = false;
var hasHouse = true;

if (gotJob == true && savedMoney > 200000) {
    console.log('cholo biya kore feli!!')
}
else {
    console.log('top kopale biya nai!!')
}
// output: 'tor kopale biya nai' 

if (gotJob == true && savedMoney > 200000 && hasFlat == true) {
    console.log('colo biya kore feli')
}
else {
    console.log('tor kopale biya nai!!')
}
//output: 'tor kopale biya nai '

if (gotJob == true || savedMoney > 20000) {
    console.log('cholo biya kore feli')
}
else {
    console.log('tor kopale biya nai')
}

//output: 'cholo biya kore feli '

if ((gotJob == true && savedMoney > 20000) || hasHouse == true) {
    console.log('cholo biya kore feli')
}
else {
    console.log('tor kopale biya nai')
}

//output:  cholo biya kore feli 


