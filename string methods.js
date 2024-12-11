// length 
let word = "javascript";
console.log(word.length);
// uppercase
let a = "java"
console.log(a.toUpperCase());
// lowercase
let b  = "ROHITH"
console.log(b.toLowerCase());
//charAT
let c = "hello world"
console.log(c.charAt(8));
//indexof
let e = "hiii";
console.log(e.indexOf("i"));
//lastindexof
let d = "raj";
console.log(d.lastIndexOf("j"));
// slice = extracts a part of a string,and gives extracted string as new string
// . slice (includes,excludes)
let str = "welcome to javascript";
let str1 = str.slice(11,21);
console.log(str1);
//substring = its act same like slice but the when value is less then 0 it treated as 0
let a1 = "hello this is java"
let a2 = a.substring(5,-6);
console.log(a2);
// replace = replace a specificied value with another value
let b1 = "java is easy java is more comfortable";
console.log(b1.replace("java","javascript"));
// replaceAll = replace a specified value with another value (every value)
console.log(b1.replaceAll("java","javascript"));
// split = splits a string into a array on subssting based on the delimiter
let c1 = "hello world"
console.log(c1.split(""));
//trim remove the  white space from the both sides
let c2 = "  hello world "
console.log(c2.trim());
//startswith = checks if the string is started with the specifief value
let d3 = "rohith";
console.log(d3.startsWith("r"));
// endswith = cheecks if the string is ended with specifief value
let d4 = "rohith"
console.log(d4.endsWith("h"));
//includes = checks if the string contains a specified value
let d5 = "rohith"
console.log(d5.includes("i"));
//concat = its add true or more string ,the added string stored in a string
let firstname = "ajay";
let lastname = "kumar";
let fullname = firstname.concat(' ', lastname);
console.log(fullname);
// repeat = gives the copy of the string 
let fruit = "apple"
console.log(fruit.repeat(3));
// match = search the specified value in the string if its it used the ttotal info about the specified value in 
// array format
    console.log(fruit.match('p'));
    // search = search the specified value in the string if its it give the index value of it
    console.log(fruit.search("p"));









