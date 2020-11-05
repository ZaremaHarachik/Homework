// Задание 1

// let num=[7,15,30,35,90];
// console.log(num);
// let str=["ua","com","main","just","ok"];
// console.log(str);
// let xxx=["Ira",true,17,"always","22"];
// console.log(xxx);
// let yyy=["love",false,19,"ever",48];
// console.log(yyy[0]);


// for (let start=0;start<10;start++) {
//     document.write("<div>Hello,World!</div>");
// }


// for (let start=0;start<10;start++) {
//     document.write(`<div>Hello,World! ${start}</div>`);
// }


// let start=0;
// while (start<20){
//     document.write(`<h1>Good luck!</h1>`);
//     start ++
// }


// let start=0;
// while (start<20){
//     document.write(`<h1>Good luck! ${start}</h1>`);
//     start ++
// }


// let numbers=[11,22,33,44,55,66,77,88,99,100];
// console.log(numbers);


// let str=["Hi","yes","no","oh","why","what","when","go","to","home"];
// console.log(str);



 // let any=[34,"today",35,"tomorrow",100,true,"hello","my","friend",11];
 // console.log(any);


// let any=[34,"today",35,"tomorrow",100,true,"hello","my","friend",11];
// console.log(any);




// let x=[34,"today",35,"tomorrow",100,true,"hello","my","friend",11];
// for (let i = 0 ; i <x.length ; i++){
//     if (typeof x[i] === "boolean"){
// console.log(x[i]);
//     }
// }

// let x=[34,"today",35,"tomorrow",100,true,"hello","my","friend",11];
// for (let i = 0 ; i <x.length ; i++){
//     if (typeof x[i] === "string"){
//console.log(x[i]);
//     }
// }

// let x=[34,"today",35,"tomorrow",100,true,"hello","my","friend",11];
// for (let i = 0 ; i <x.length ; i++){
//     if (typeof x[i] === "number"){
//         console.log(x[i]);
//     }
// }

// let str=["Hi","yes","no","ho","why","what","when","go","to","home"];
// {
//     console.log(str[0]);
//     console.log(str[1]);
//     console.log(str[2]);
//     console.log(str[3]);
//     console.log(str[4]);
//     console.log(str[5]);
//     console.log(str[6]);
//     console.log(str[7]);
//     console.log(str[8]);
//     console.log(str[9]);
// }


// for (let i=0;i<10;i++){
//     console.log(`${i}`);
//     document.write(`${i}`)
// }



// for (let i=0;i<100;i++){
//     console.log(`${i}`);
//     document.write(`${i}`)
// }


// for (let i=0;i<100;i+=2){
//     console.log(`${i}`);
//     document.write(`${i}`)
// }


// for (let i=0;i<100;i+=2){
//     console.log(i);
// }

// for (let i=0;i<100;i+=3){
//     console.log(i);
// }

// for (let m=0;m<2;m++) {
//     for (let s = 0; s < 60; s++) {
//         console.log(m, s);
//     }
// }

// for (let h=0; h<2; h++) {
//     for (let m = 0; m < 20; m++) {
//         for (let s = 0; s < 60; s++) {
//             console.log(h,m, s);
//         }
//     }
// }

   // Додатково

// let str=[ 'a', 'b', 'c'];
// for (let i=0;i<str.length;i++){
//  console.log(str[i]);
//  document.write(str[i]);
// }

// let str=[ 'a', 'b', 'c'];
// let i=0;
// while (i<str.length){
//     document.write(str[i]);
//     i++
// }

// let str=[ 'a', 'b', 'c'];
// for (let i of str){
//     document.write(i);
//     console.log(i);
// }
// =================
// =================
// =================
// =================

// let num=['a', 'b', 'c'];
// num.unshift(1,2,3);
// console.log(num);

// let num=[1, 2, 3];
// num.reverse(3,2,1);
// console.log(num);

// let num=[1, 2, 3];
// num.push(4, 5, 6);
// console.log(num);

// let num=[1, 2, 3];
// num.unshift(4, 5, 6);
// console.log(num);


// let num = [1, 2, 3, 4, 5];
// let slicedArray = num.slice(3,5);
// console.log(slicedArray);

// let num = [1, 2, 3, 4, 5];
// let slicedArray = num.slice(0,2);
// console.log(slicedArray);


// let num = [1, 2, 3, 4, 5];
// num.splice(1,23,4,5);
// console.log(num);


// let num = [1, 2, 3, 4, 5];
// num.splice(2,3,3,"a","b","c",4,5);
// console.log(num);



// let num = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i <num.length; i++)
// { if ((num[i]%2)===0){
//     console.log(num[i])}};



// 1. перебрати його циклом while

// let num = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < num.length){
//     console.log(num[i]);
//     i = i + 2;
// }

// 2.  перебрати його циклом for

// let num = [2,17,13,6,22,31,45,66,100,-18];
// for(i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let num = [2,17,13,6,22,31,45,66,100,-18];
// let i = 1;
// while (i < num.length){
//     console.log(num[i]);
//     i = i + 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let num = [2,17,13,6,22,31,45,66,100,-18];
// for(i = 1; i < num.length; i = i + 2){
//     console.log(num[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення.

// let num = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < num.length){
//     console.log(num[i]);
//     i = i + 2;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let num = [2,17,13,6,22,31,45,66,100,-18];
// for(i = 0; i < num.length; i = i + 2){
//     console.log(num[i]);
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let num = [2,17,13,6,22,31,45,66,100,-18];
// for(i = 0; i < num.length; i++){
//     if(num[i] % 3 === 0){
//         num[i] = 'okten';
//     }
// }
// console.log(num);

// 8. вивести масив в зворотньому порядку.

// let num = [2,17,13,6,22,31,45,66,100,-18];
// let result = [];

// for (let i = num.length-1; i >= 0; i--) {
//     result.push(num[i]);
// }
// console.log(result);

// 9. ???

// 10.1 Заповнити масив непарними 50 числами

// let num = [];
// for(let i = 1; i < 100; i = i + 2){
//     num.push(i);
// }
// console.log(num);

// 10.2 Зповнити масив парними 50 числами

// let num = [];
// for(let i = 2; i <= 100; i = i + 2){
//     num.push(i);
// }
// console.log(num);




// let num = ['a', 'b', 'c']
// num.push(1,2,3)
// console.log(num);
// let num = ['js', 'css', 'jq']
// num.shift()
// console.log(num);


// let num = [];
//
// for (let i=0;i<=100;i=i+2) {
//     num[i] = i;
//     //console.log(num[i]);
// }
//
// for (let j=1;j<100;j=j+2) {
//     num[j] = j;
//     //console.log(num[j]);
// }
// console.log(num)

//
// let num = [];
// for ( let i=0; i<100;i++ ){
//     num[i] = parseInt(Math.random()*(732 - 8)+8);
//     if (i%3 === 0){
//         if (num[i]%2 === 0){
//             let num1 = num[i];
//             console.log(num1);
//         }
//
//     }
// }



// let num = [];
// for ( let i=0; i<100;i++ ){
//     num[i] = parseInt(Math.random()*(732 - 8)+8);
//     document.write(num[i] + `_`)
//     if (num[i]%2 === 0){
//         console.log(num[i-1]);
//
//     }
// }

//
// let num = [100,250,50,168,120,345,188];
// let sum=0;
// for(let i=0;i<num.length;i++){
//     sum = (  sum + (num[i])/num.length   );
//
// }
// console.log((sum));
