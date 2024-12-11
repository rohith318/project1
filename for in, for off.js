// for in = it iterates over key proprty name an object
let obj = {
    name : "vijay",
    age : 26,
    mobile : 896756443
    
};
for(let get in obj){
    console.log(get);
};

// for of = it iterates over a value of array or string
let fruit = ['apple',"banan","mango"];
for(let box of fruit){
    console.log(box);
}
// for each designed for array
let name4  = ["ajay","arun","vikram",];
name4.forEach((x,y,z)=>{
    console.log(x,y,z);
});


