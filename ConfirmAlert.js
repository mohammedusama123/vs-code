alert("hello world")
console.time("a")
for(let i=0;i<5;i++){
  console.log(i)
}
console.timeEnd("a")

console.time("b")
let i=0;
while(i<5){
  console.log(i)
  i++
}
console.timeEnd("b")


let n=prompt("enter the value ",500)
n=Number.parseInt(n)
alert("type of n is: "+typeof(n))
let write = confirm("do you want to write it on a page")
if(write){
  document.write(n)
}
else{
  document.write("allow me to write on page")
}