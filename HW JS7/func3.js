// -- при помощи метода sort и колбека  отсортировать массив.
// let arr = [5,7,9,12,13,15,17,20,21,22,25,27,29,30,33,35,37,39,40,43 ];
//     let sort=arr.sort((a,b) => {
//         return a - b;
//     })
//     console.log(sort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let arr = [5,7,9,12,13,15,17,20,21,22,25,27,29,30,33,35,37,39,40,43 ];
// let sort=arr.sort ((a,b) => {
//     return b-a;
//     })
// console.log(sort);

// -- при помощи filter получить числа кратные 3
// let arr = [5,7,9,12,13,15,17,20,21,22,25,27,29,30,33,35,37,39,40,43 ];
// let filter = arr.filter(value => {
//    return value%3 === 0
// });
// console.log(filter);

// -- при помощи filter получить числа кратные 10
// let arr = [5,7,9,12,13,15,17,20,21,22,25,27,29,30,33,35,37,39,40,43 ];
// let filter = arr.filter(value => {
//    return value%10 === 0
// });
// console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
// let arr = [5,7,9,12,13,15,17,20,21,22,25,27,29,30,33,35,37,39,40,43 ];
// arr.forEach((value,index,array) => {
//   console.log(value)
// });
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let arr = [5,7,9,12,13,15,17,20,21,22,25,27,29,30,33,35,37,39,40,43 ];
// let map = arr.map((value,index) => {
//    return value*3
// })
// console.log(map);

// - создать массив со словами на 15-20 элементов.
// let arr = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen"];
// let sort = arr.sort()
// console.log(sort);

// -- отсортировать его по алфавиту в восходящем порядке.
// let arr = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen"];
// let sort = arr.sort((a,b) => {
//     return 1
// })
// console.log(sort);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let arr = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen"];
// let sort = arr.sort((a,b) =>{
//     return -1
// })
// console.log(sort);

// -- отфильтровать слова длиной менее 4х символов
// let arr = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen"];
// let filter = arr.filter((value,index,array) => {
//   return value.length <=4
// })
// console.log(filter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let arr = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen"];
// let map = arr.map((value, index) => {
//     return value + "!"
// })
// console.log(map);
// відсортувати його за  віком (зростання , а потім окремо спадання)
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// let sort = users.sort((a,b) =>{
//     return a.age-b.age
// })
// console.log(sort);

// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// let sort = users.sort((a,b) =>{
//     return b.age-a.age
// })
// console.log(sort);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// let sort = users.sort((a,b) => {
//     return a.name.length - b.name.length
// })
// console.log(sort);
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// let sort1 = users.sort((a,b) => {
//     return b.name.length - a.name.length;
// })
// console.log(sort1);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// let xxx = JSON.stringify(users);
// let abc = JSON.parse(xxx);
//
// let result = abc.map(function (value, index) {
//   value.id = (index+1);
//   return value;
// })
// console.log(result);

// - відсортувати його за індентифікатором



// let cars = [
//   {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//   {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//   {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//   {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//   {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//   {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//   {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//   {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//   {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//   {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//   {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//   {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//   {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//   ];

//   Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let filter = cars.filter(value => {
//     return value.volume >= 3
// })
// console.log(filter);

// двигун = 2л
// let filter = cars.filter(value => {
//     return value.volume === 2
// })
// console.log(filter);

// виробник мерс
// let filter = cars.filter(value => {
//     return value.producer === "mercedes"
// })
// console.log(filter);

// - двигун більше 3х літрів + виробник мерседес
// let filter = cars.filter(value => {
//     return value.producer === "mercedes" && value.volume >= 3
// })
// console.log(filter);

// - двигун більше 3х літрів + виробник субару
// let filter = cars.filter(value => {
//     return value.volume >= 3 && value.producer === "subaru"
// })
// console.log(filter);

// - сили більше ніж 300
// let filter = cars.filter(value => {
//     return value.power >= 300
// })
// console.log(filter);

// - сили більше ніж 300 + виробник субару
// let filter = cars.filter(value => {
//     return value.power >= 300 && value.producer === "subaru"
// })
// console.log(filter);

// - мотор серіі ej204x
// let filter = cars.filter(value => {
//     return value.engine === "ej204x"
// })
// console.log(filter);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter = cars.filter(value => {
//     return value.engine === "ej204x" && value.producer === "subaru" && value.power >300
// })
// console.log(filter);

// - двигун меньше 3х літрів + виробник мерседес
// let filter = cars.filter(value => {
//     return value.volume < 3 && value.producer === "mercedes"
// })
// console.log(filter);

// - двигун більше 2л + сили більше 250
// let filter = cars.filter(value => {
//     return value.volume > 2 && value.power >250
// })
// console.log(filter);

// - сили більше 250  + виробник бмв
// let filter = cars.filter(value => {
//     return value.power > 250 && value.producer === "bmw"
// })
// console.log(filter);

// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// let sort = usersWithAddress.sort((a,b) => {
//     return a.id - b.id
// })
// console.log(sort);

// -- отсортировать его по id пользователей в обратном опрядке
// let sort = usersWithAddress.sort((a,b) => {
//     return b.id - a.id
// })
// console.log(sort);

// -- отсортировать его по возрасту пользователей
// let sort = usersWithAddress.sort((a,b) => {
//     return a.age - b.age
// })
// console.log(sort);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sort = usersWithAddress.sort((a,b) => {
//     return b.age - a.age
// })
// console.log(sort);

// -- отсортировать его по имени пользователей
// let sort = usersWithAddress.sort((a,b) => {
//     return a.name - b.name
// })
// console.log(sort);

// -- отсортировать его по имени пользователей в обратном порядке
// let sort = usersWithAddress.sort((a,b) => {
//     return a.name - b.name
// })
// console.log(sort);

// -- отсортировать его по номеру дома по возрастанию
// let sort = usersWithAddress.sort((a,b) => {
//     return a.address.number - b.address.number
// })
// console.log(sort);

// -- отфильтровать (оставить) тех кто младше 30
// let filter = usersWithAddress.filter(value => {
//     return value.age < 30
// })
// console.log(filter);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filter = usersWithAddress.filter(value => {
//     return value.status === false
// })
// console.log(filter);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filter = usersWithAddress.filter(value => {
//     return value.status === false && value.age < 30
// })
// console.log(filter);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filter = usersWithAddress.filter(value => {
//     return value.address.number %2 === 0
// })
// console.log(filter);
