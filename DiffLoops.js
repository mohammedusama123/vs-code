let array=[1,2,3]
for(let i=0;i<array.length;i++){
    console.log(array[i])
}
//for each loop
array.forEach((element)=>
console.log(element*element))
 
//for of loop
console.log("printing elements using for of loop")
for(let i of array){
    console.log(i)
}
//using Array.from to convert string to array of characters
let s="hello"
let arr=Array.from(s)
console.log(arr)