//object destructuning = in javascript allows you to extract multiple properties from an object and assign 
// them to variable in a concise amd readable wat enaching code redability and reducing repetition..

const student = {
    name:"vijay",
    age :14,
    std : "IX",
    blood_group : "o+ve"
};
const{name,age,std} = student;
console.log(age);

// aaray destructing
const empoleye = ["arun","bharath","chandru","dinesh"];
const[a,b,c,d]=empoleye;
console.log(b);


