// let s = "usama"
// let a = 10
// console.log(s + 10)//it will concatenate both the data
// let n = prompt("ENTER THE VALUE")
// let sum = 0
// for (let i = 1; i <= n; i++) {
//   sum += i
// }
// console.log(sum)
let list = {
    "a": 1,
    "b": 2,
    "c": 3
  }
  for (let a in list) {//for iterating key values 
    console.log(a)
  }
  let s1="usama"
  for(let b of s1){//for iterating strings and arrays
    console.log(b)
  }
  let n=prompt("enter the value")
  n=Number.parseInt(n)
  let i=0
  while(i<n){
    console.log(i)
    i++
  }