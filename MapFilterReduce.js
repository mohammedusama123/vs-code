//maps the element and performs some action
let a=[1,2,3]
let a1=a.map((x)=>{
    return x*x
})
console.log(a1)
//filters the elements based on given condition
let b=[1,2,3,4,5]
let b1=b.filter((y)=>{
    return y>2
})
console.log(b1)

let c=[1,2,3,4,5,6]
let c1=c.reduce((z, z1)=>{
  return z+z1
})
console.log(c1)
/*
1+2=3
3+3=9
9+4=13...
*/
let d=[2,4,6,8]
let d1=d.reduce((p, q)=>{
    return p*q
})
console.log(d1)


