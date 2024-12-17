const add=require("./sum")
const mul=require("./mul")
const sub=require("./subtraction")
const div=require("./division")


let sumA=Number(process.argv[3])
let sumB=Number(process.argv[4])


console.log(add(sumA,sumB))
console.log(mul(sumA,sumB))
console.log(sub(sumA,sumB))
console.log(div(sumA,sumB))