const add=require("./sum")
const mul=require("./mul")

let sumA=Number(process.argv[3])
let sumB=Number(process.argv[4])
console.log(add(sumA,sumB))