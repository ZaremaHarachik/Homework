//  створити функцію яка виводить масив
// let array = [1,2,3,4,5];
// function printArray(array){
//     console.log(array);
// }
// printArray(array);

// створити функцію яка заповнює масив рандомними числами та виводить його.
// let arr = [];
// function func(num){
//     for(i = 0; i < num; i++){
//         arr.push(Math.round(Math.random()*200));
//     }
//    return arr;
// }
// let result = (func(20));
// console.log(result);

// створити функцію яка приймає три числа та виводить та повертає найменьше.
// function func(num1, num2, num3){
//     return Math.min(num1, num2, num3);
// }
// console.log(func(3,6,9));

// створити функцію яка приймає три числа та виводить та повертає найбільше.
// function func(num1, num2, num3){
//     return Math.max(num1, num2, num3);
// }
// console.log(func(3,6,9));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function func(num1, num2, num3){
//    alert(Math.max(num1, num2, num3));
//     return Math.min(num1, num2, num3)
// }
// console.log(func(3,6,9))

// - створити функцію яка повертає найбільше число з масиву
// function maxOf(arr){
//     let max = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= max){
//             max = arr[i];
//         }
//     }
//     console.log("max:" + max);
//     return max;
// }
// maxOf([7,2,3,4,8,5,9,1]);

// - створити функцію яка повертає найбільше число з масиву
// let arr = [10,2,13,4,-3,6,7,8,15,]
// function showMessage1(array1) {
//     let max = array1[0]
//     for (const item of array1) {
//
//         if (item > max) { max = item }
//     }
//     console.log(`max`,max);
//     return max;
//
// }
// console.log(showMessage1(arr));

// - створити функцію яка повертає найменьше число з масиву
// let arr = [10,2,13,4,-3,6,7,8,15,]
//
// function showMessage(array) {
//     let min = array[0]
//
//     for (const item of array) {
//         if (item < min){ min = item }
//               }
//          console.log(`min`,min);
//         return min;
//
// }
// console.log(showMessage(arr));
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//        function sumarr(arr){
//     let sum = 0
//            for (let i = 0; i < arr.length; i++) {
//                sum += arr[i]
//            }
//            console.log(`result`,sum);
//            return sum;
//        }
//     console.log(sumarr([1, 2, 3, 4, 5, 8, 17, 55]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function midvalue(arr){
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]/arr.length
//     }
//     console.log(`result`,sum);
//     return sum;
// }
// console.log(midvalue([11, 22, 33, 44, 55, 66, 77, 88]));
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let arrobj = [{name:"Katya",age:5},{nik:"kokos"},{exp:15},{age:1,username:"Kisa"},{exp:2,skills:"java"}]
//     function anyarr(array){
//     let k = 0
//             for (const item of array) {
//             if (typeof item === `object`){
//                 k++;
//             }   }
//             return k;
//     }
//
// console.log(anyarr(arrobj));
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
//     let k = 0
//     for (const item of array) {
//         if (typeof item === `object`){
//             for (const key in item) {
//                 k++;
//             }
//
//         }   }
//     return k;
// }
//   console.log(anyarr(arrobj));
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let arr = [1,2,3,4,5]
// let rra = [5,4,3,2,1]
//
// function sumi(array,array1){
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] + array1[i])
//
//     }
//
//     return result;
// }
//
// console.log(sumi(arr, rra));
//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function func(array,i){
//     let arr = array[i];
//     array[i] = array[i+1]
//     array[i+1] = arr
//     return arr
// }
//
// console.log(func([1,2,3,4,5,6,7,8,9,0], 5));




//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.

// function func (arr) {
//     let arr3 = [];
//     for (let i = arr.length-1; i >= 0; i--)
//         if (arr[i] !== 0) {
//               arr3.unshift(arr[i])
//         }
//     else{
//         arr3.push(arr[i])
//         }
//     return arr3
// }
//
// console.log(func([77,1,3,4,0,5,0,6,0,7,0,8,9,0]));


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function func(tag , text) {
//     let div = document.createElement(tag);
//     div.innerHTML = text;
//     document.body.appendChild(div);
// }
// func('div' , 'Hello owu ');

// Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function func(tag , text) {
//     let div = document.createElement(arguments[0]);
//     div.innerHTML = arguments[1];
//     document.body.appendChild(div);
// }
// func('div' , 'Hello owu ');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let arr = [
//     {model: `S`,power:700,year:2015 ,color:`red`,driver:{name:`jordan`,age:30,experience:25}},
//     {model: `X`,power:750,year:2017 ,color:`pink`,driver:{name:`Michail`,age:20,experience:5}},
//     {model: `Y`,power:525,year:2025 ,color:`blue`,driver:{name:`vadim`,age:15,experience:16}},
//     {model: `3`,power:450,year:2015 ,color:`purpure`,driver:{name:`Metelkin`,age:32,experience:3}},
//     {model: `camry`,power:300,year:2015 ,color:`green`,driver:{name:`djusha`,age:39,experience:20}},
//     {model: `devil sixteen`,power:2000,year:2021,color:`white`,driver:{name:`I`,age:33,experience:27}},
//     {model: `gt2rs`,power:999,year:2019 ,color:`darkred`,driver:{name:`turbo`,age:26,experience:17}},
//     {model: `911 turbo s`,power:666,year:1970 ,color:`yellow`,driver:{name:`gena`,age:35,experience:15}},
//     {model: `gt4`,power:800,year:2016 ,color:`violet`,driver:{name:`stas`,age:27,experience:10}},
//     {model: `ff`,power:777,year:2010 ,color:`gold`,driver:{name:`nikita`,age:20,experience:5}},
// ];
//
//  function funk(idtag,arrcar){
//      let block = document.getElementById(idtag)
//      let ul = document.createElement(`ul`)
//      for (let i = 0; i < arrcar.length; i++) {
//          const car  = arrcar[i];
//         let li = document.createElement(`li`)
//         li.innerHTML = `model: ${car.model}`
//         ul.appendChild(li)
//      }
//     block.appendChild(ul)
//  }
//  funk(`carsblock` , arr)


//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// function func(array1,array2) {
//     let users = JSON.parse(JSON.stringify(array1));
//     let cities = JSON.parse(JSON.stringify(array2));
//
//     for (const user of users) {
//         for (const city of cities) {
//             if (city.user_id === user.id){
//                 user.address = city
//             }
//         }
//     }
//     return users
// }
//
// console.log(func(usersWithId, citiesWithId));


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];
// let elem = document.querySelector('#elem')
// function func(arr){
//         for(let elem1 of arr){
//         if(elem1.title){
//             let zag = document.createElement('h2');
//             zag.innerText = elem1.title;
//             elem.appendChild(zag);
//         } if(elem1.body){
//             let par = document.createElement('h4');
//             par.innerText = elem1.body;
//             elem.appendChild(par);
//         }
//     }
// }
// console.log(func(rules))