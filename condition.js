// if = it executes a true block
// if else = it executes false block

// if 
let num = 10;
if(num>10){
    console.log("num is greater then 10")
}
else{
    console.log("num is lesser then 10")
}

// else if 
let num1 = 2;
if(num1>10){
    console.log("num is equal to 10")
}
else if (num1==10){
    console.log("num is equal to 10")
}
else{
    console.log("num is lesser then 10")
}

function leap(year){
    if(year%4==0){
        console.log("is leaper")
    }
    else{
        console.log("is not a leaper")
    }
}
leap(2009);

// switch
let climate = "rainy";
switch(climate){
    case "summer":
        {
            console.log("its too hot");
        }
        break;

        case "rainy":
            {
                console.log("its too rainy");
            }
            break;

            case "winter":
                {
                    console.log("its too cold");
                }
                break;
                deafult:
                {
                    console.log("enter correct answer");
                }

}
    

    
