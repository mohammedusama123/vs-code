console.log("hello world this is my first javaScript code")
let a = 10
console.log(a)
a = "usama"
console.log(a)//values can be changed during runtime.. so it is known as 
//dynamically typed language
var b = 12
var b = 13//var scope is global whereas let and const scope is local
console.log(b)//var can be re-declared but let can't be re-declared
b = 'a'
console.log(b)//the difference between variables is its scope
// let c=15
// let c=13 cannot be re-declared but can be re initialized
// console.log(c)
// const d=20
// const d=23
// d=22 const can neither be re declared nor be re initialized

{
  let x=10
  console.log(x)
}
//console.log(x)//x cannot be visible outside the block
let y 
y=16
console.log(y)
//data types in javaScript
//7 types
let a1=10
let b1=true
let c=null
let d=BigInt("100")+BigInt("100")
let e=Symbol("hello")
let f=undefined
console.log(d)
console.log(typeof e)//symbol
//objects in javaScript
let item={
  "usama":1,
  "mohammed":2,
  "md usama":3
}
console.log(item["md usama"])