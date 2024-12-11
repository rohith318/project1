function cleankitchen(){
    return new Promise((reslove,reject) =>{
        setTimeout(()=>{
            reslove("u clean the kitchen");
        },2000);
    })
}

function trashout(){
    return new Promise((reslove,reject ) =>{
        setTimeout(()=>{
            reslove("u trash out");
        },1000);
    })
}

trashout()
.then((value)=>{
    console.log(value)
    return cleankitchen();
})
.then((value)=>{
    console.log(value);
    
})


function cricket(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("play in ground");
        },2000);
    })
}

function gym(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("go to the gym");
        },4000);
    })
}

cricket()
.then((value)=>{
    console.log(value)
    return gym();
})
.then((value)=>{
    console.log(value);
})