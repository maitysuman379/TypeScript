// var sym = Symbol();
// var sym1 = Symbol();

// console.log(sym)
// console.log(sym1)
// console.log(sym == sym1)


// var sym2 = Symbol("abc");
// var sym3 = Symbol("abc");


// console.log(sym2)
// console.log(sym3)
// console.log(sym2 == sym3)


const dId = Symbol('id');
const obj = {
    [dId] : 100,
    name : 'Suman Maity'
}

console.log(obj)