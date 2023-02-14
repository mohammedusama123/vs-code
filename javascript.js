// let btn=document.querySelector(".btn-primary")
// btn.style.color="white"
// btn.style.background="#0d6efd"
// console.log(btn)
// let names=document.querySelectorAll(".card-title")
// names[0].style.color="red"
// names[1].style.color="blue"
// names[2].style.color="purple"

// let tags=document.getElementsByTagName("a")
// console.log(tags)

let elem1=document.getElementById("div1")
console.log(elem1)
console.log(elem1.matches(".elem"))//return true if element matches the given css selector otherwise false

console.log(sp3.closest(".elem"))//takes css selector as input and returns the nearest ancestor(parent elem) of given element that matches given css selector
let div=document.getElementById("div3")
console.log(div)
console.log(div.contains(sp3))//takes an element as input

