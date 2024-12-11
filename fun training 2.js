//

// condition
let num = 5
if(num>10){
    console,log("is grater");
}
else if(num==10){
    console.log("is eqaul");
}
else{
    console.log("samller");
}

// switch
let cricket = "playing";
switch(cricket){
    case "catch":
        {
            console.log("catch the ball");
        }
        break;

 case "pentaly" :
    {
        console,log("shot the goal");
    } 
    break;

    case "six":
        {
            console.log("hit the ball ");
        }
    }

// for
let pen = {
    brand : "nike",
    mfg : 27,
    exp : 1997,
}
for(let get in pen){
    console.log(get);
}

// for of
let number = [45,65,78,89];
for(let box of number){
    console.log(box);
}

// for
for(let b = 2;b<=10;b++){
    console.log(b);
}
    
// while
let b = 1
while(b<=10){
    console.log(`"number is"${b} `);
    b++;
}

// jump
for(let cricket = 1;cricket<=20;cricket++){
    if(cricket==15){
        continue;
    }
    console.log(cricket);

}


function download1(){
  return new Promise((reslove,reject) =>{
    console.log("file processing");
        setTimeout(()=>{
            reslove("file install");
        },3000);
    })
}

function download2(){
    return new Promise((reslove,reject ) =>{
        console.log("installed")
        setTimeout(()=>{
            reslove("completed ");
        },5000);
    })
}


function download3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("installing");
        },8000)
    })
}

function download4(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("installed");
        },10000)
    })

}


function download5(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("file saved");
        },12000)
    })
}



download1()
.then((value)=>{
    console.log(value)
    return download2();
})
.then((value)=>{
    console.log(value);
    
})

// for
for(let a = 5;a<=30;a++){
    console.log(a);
}

//while
let d = 6
while(d<=20){
    console.log(`"this is number" ${d}`)
    d++
}

// do while
let e = 2
do{
    console.log(e)
    e++
} while(e<10);


// task
// prime
num = 5;
if(num%0==num && num%num==1){
    console.log("prime number");
}
else{
    console.log("not a prime number");
}













