// push
let arr = [1,2,2]
arr.push(4);
console.log(arr);
// pop 
arr.pop();
console.log(arr);
// shift 


//unshift
arr.unshift(9,7,8);
console.log(arr);
// length
let a = arr.length;
console.log(a);
//splice
let array1=[1,2,3,4,5,6];
array1.splice(2,4,9)
console.log(array1);
// slice 
let b = array1.slice(2,5);
console.log(b);
// concat combine one or more array 
let fruits = ["fruits","apple"];
let vegetables = ["onion","potato"];
let basket = fruits.concat(vegetables);
console.log(basket);
//indexof
console.log(fruits.indexOf("apple"));
// include
console.log(fruits.includes("apple"));
console.log(vegetables.includes("tomato"));
//map = based on the condition it changes all the values
let name = [45,66,78,99];
let a1 = name. map((b)=>{
    console.log(b);
    return b+1;
})
console.log(a1);
// filter = based on condition it filter on the array elements
let name2 = [10,62,67,89,90 ,5,6,7];
let a2 = name2.filter((value)=>{
    return value<10;
})
console.log(a2);
// reduce = reduce the array to a singke
let name3 = [2,4,6,8,10];
let a3 = name3.reduce((c,d)=>{
    return c+d
})
console.log(a3);

