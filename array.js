let array=[1, "usama", 2, true]
console.log(array)
console.log(array.toString())//returns string with comma separated
console.log(array.join("_"))//returns array with _ seperated
let n=array.shift()//removes first element from array and returns it whereas unshift adds element at first
console.log(n)
console.log(array)
let array2=[2,3,4]
let array3=array2.concat(array)
console.log(array3)