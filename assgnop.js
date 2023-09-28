// assignment operators and comparison operators
// var x = 10
// var y = 20
// x = + y // meaning x = x+y//
// console.log(x); //used to print//
//
// console.log(x =+ y);
// console.log(x < y);
// console.log(x === y); // compares thhem down to their data type//
// console.log(x == y); // compares them normally//
// console.log(x==20 && y==20); //and(both of them need to be true)//
// console.log(x==20 || y==20); //one of them needs to be true//
// console.log(!(x==20 || y==20)); // not prints the opposite//
/////conditional constructs: the if statement://
// if(x<y){
//     console.log('x is less than y');
// }else{
//     console.log('x is not less than y');
// }
// const time = new Date().getHours();
// let greeting;
// if (time < 10){
//     greeting = 'good morning'
// }else if (time<20){
//     greeting = 'good day'
// }else{
//     greeting = 'good evening'
// }
// console.log(greeting);
// document.getElementById('demo').innerHTML = greeting; //another way for printing//
// var day = prompt('enter a number');
// switch (day) {
//     case "1":
//         alert('day is monday')
//         break;
//     case "2":
//         alert('day is tuesday')
//         break;
//     case "3":
//         alert('day is wednesday')
//         break;
//     case "4":
//         alert('day is thursday')
//         break;
//     case "5":
//         alert('day is friday')
//         break;
//         case "6":
//             alert('day is saturday')
//             break;
//             case "7":
//                 alert('day is sunday')
//                 break;
//                 default :
//                     alert('not a valid number')
//                     break;
// }


// do{
//     text += '<br> the number is ' + i;
//     i++
// }
// document.getElementById('demo').innerHTML = text;



// while (i< 10){
//     text += '<br> the number is ' + i;
//     i++
// }
// document.getElementById('demo').innerHTML = text;


// for(let i = 0; i<5; i++){
//     text += '<br> the number is ' + i + "<br>"; 
// }
// document.getElementById('demo').innerHTML = text;


// const cars =["bmw","volvo","saab","ford","fiat","audi"];

// let text ="";
// for (let i= 0; i< cars.length; i++){
//     text += cars[i] + '<br>'
// }
// document.getElementById('demo').innerHTML = text;

console.log(isNaN(1223))
console.log(parseInt("welcome 1234 50 and"))
console.log(parseInt(" and welcome 1234 50 and"))
const a= 40
const b = 30
console.log(eval(a*b))
console.log(confirm("areyou sure u want to check ur jamb result"))


function areaofrect(length, breath){
    area = length* breath
    return area
}
alert("area of rectangle is"+ areaofrect(13,122))
console.log(areaofrect(13,12))
// or
const arearect = (L , B) => {
    const area = L * B
    return area
}
console.log('area of rectangle: ' + arearect(12,21))










