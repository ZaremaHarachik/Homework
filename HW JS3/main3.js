// Task 2

//создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let user1={
//  name: "Karina",
//  age: 26,
//  hasHusband: true,
// };
// let user2={
//   surname: "Duda",
//   position: "president",
//   country: "Poland",
// };
// let user3={
//   account: true,
//     nik: "fox",
//     status: "active",
// };
// let user4={
//     hasJob: true,
//     experience: 10,
//     hasCar: false,
// };
// let user5={
//     skills: "football",
//     team: "Dynamo",
//     number: 5,
// };
//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let man = { username: "kokos", skills: ["java","js"] , wife: { name: "cherry" } };
// let woman = { surname: "Petrova", experience : ["economist"] ,husband: { nik: "pupsik"} };
// let car = { producer: "Toyota", model: ["Yaris"], engine: {fuel: "gasoline"} };
// let river = { name: "Thames",country: ["Great Britain"], flows: { town: "London"} };


//- При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let key in user1) {
//     console.log([key]);
// }
// for (let key2 in user2) {
//     console.log([key2]);
// }
// for (let key3 in user3) {
//     console.log([key3]);
// }
// for (let key4 in user4) {
//     console.log([key4]);
// }
// for (let key5 in user4) {
//     console.log([key5]);
// }
//
//
// for (let key6 in man) {
//     console.log([key6]);
// }
// for (let key7 in woman) {
//     console.log([key7]);
// }
// for (let key8 in car) {
//     console.log([key8]);
// }
// for (let key9 in river) {
//     console.log([key9]);
// }

// console.log(Object.keys(user1));
// console.log(Object.keys(user2));
// console.log(Object.keys(user3));
// console.log(Object.keys(user4));
// console.log(Object.keys(user5));
// console.log(Object.keys(man));
// console.log(Object.keys(woman));
// console.log(Object.keys(car));
// console.log(Object.keys(river));

// Создать массив из 5 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (while,for,for of)
// let cars = [
//     {
//         name: 'mersedes',
//         old: 7,
//         model: 'C-class',
//         color: 'black',
//         comfortable: true,
//     },
//     {
//         name: 'BMW',
//         old: 4,
//         model: 'X6',
//         color: 'white',
//         comfortable: true,
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//     },
//     {
//         name: 'Toyota',
//         old: 5,
//         model: 'Yaris',
//         color: 'white',
//         comfortable: false,
//     },
//     {
//         name: 'Opel',
//         old: 13,
//         model: 'Vectra',
//         color: 'green',
//         comfortable: false,
//     },
// ]
//  let i = 0;
// while( i<cars.length){
//     console.log(cars[i]);
//     i++;
// }
// for (let i=0; i<cars.length;i++){
//     console.log(cars[i]);
// }
// for(let z of cars){
//     console.log(z);
// }
// Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (while,for,for of)

// let cities = [
//     {
//         name: 'Lviv',
//         people: 900000,
//         country: 'Ukraine',
//         comfortable: true
//     },
//     {
//         name: 'Rome',
//         people: 2000000,
//         country: 'Italy',
//         comfortable: true
//     },
//     {
//         name: 'California',
//         people: 3000000,
//         country: 'USA',
//         comfortable: true
//     },
//     {
//         name: 'Koln',
//         people: 2500000,
//         country: 'Germany',
//         comfortable: true
//     },
//     {
//         name: 'Madrid',
//         people: 1800000,
//         country: 'Spain',
//         comfortable: true
//     },
// ]
//  let i = 0;
// while( i<cities.length){
//     console.log(cities[i]);
//     i++;
// }
// for (let i=0; i<cities.length;i++){
//     console.log(cities[i]);
// }
// for(let z of cities){
//     console.log(z);
// }

// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//  let cars = [
//      {
//         name: 'mersedes',
//         old: 7,
//         model: 'C-class',
//         color: 'black',
//         comfortable: true,
//             driver: {
//             name: 'John',
//             old: 20,
//             sex: 'man',
//             experience: '2 years',
//             }
//     },
//     {
//         name: 'BMW',
//         old: 4,
//         model: 'X6',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'Anjelina',
//             old: 34,
//             sex: 'woman',
//             experience: '8 years',
//         }
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//         driver: {
//             name: 'Antony',
//             old: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Toyota',
//         old: 5,
//         model: 'Yaris',
//         color: 'white',
//         comfortable: false,
//         driver: {
//             name: 'Kelly',
//             old: 28,
//             sex: 'woman',
//             experience: '2 years',
//         }
//     },
//     {
//         name: 'Opel',
//         old: 13,
//         model: 'Vectra',
//         color: 'green',
//         comfortable: false,
//         driver: {
//             name: 'Peter',
//             old: 48,
//             sex: 'man',
//             experience: '18 years',
//         }
//     },
// ]
//  let i = 0;
// while( i<cars.length){
//     console.log(cars[i]);
//     i++;
// }
// for (let i=0; i<cars.length;i++){
//     console.log(cars[i]);
// }
// for(let z of cars){
//     console.log(z);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.
// let user1={
//  name: "Karina",
//  age: 26,
//  hasHusband: true,
// };
// let user2={
//   surname: "Duda",
//   position: "president",
//   country: "Poland",
// };
// let user3={
//   account: true,
//     nik: "fox",
//     status: "active",
// };
// let user4={
//     hasJob: true,
//     experience: 10,
//     hasCar: false,
// };
// let user5={
//     skills: "football",
//     team: "Dynamo",
//     number: 5,
// };
// let s = JSON.stringify(user1);
// console.log(s);
// let clonedUser1 = JSON.parse(s);
// console.log(clonedUser1);
// let p = JSON.stringify(user2);
// console.log(p);
// let clonedUser2 = JSON.parse(p);
// console.log(clonedUser2);
// let m = JSON.stringify(user3);
// console.log(m);
// let clonedUser3 = JSON.parse(m);
// console.log(clonedUser3);
// let n = JSON.stringify(user4);
// console.log(n);
// let clonedUser4 = JSON.parse(n);
// console.log(clonedUser4);
// let r = JSON.stringify(user5);
// console.log(r);
// let clonedUser5 = JSON.parse(r);
// console.log(clonedUser5);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let cars = [
//     {
//         name: 'mersedes',
//         old: 7,
//         model: 'C-class',
//         color: 'black',
//         comfortable: true,
//     },
//     {
//         name: 'BMW',
//         old: 4,
//         model: 'X6',
//         color: 'white',
//         comfortable: true,
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//     },
//     {
//         name: 'Toyota',
//         old: 5,
//         model: 'Yaris',
//         color: 'white',
//         comfortable: false,
//     },
//     {
//         name: 'Opel',
//         old: 13,
//         model: 'Vectra',
//         color: 'green',
//         comfortable: false,
//     },
// ]
// for(let i=0; i<cars.length; i++){
//     let s=JSON.stringify(cars[i]);
//     console.log(s);
// }
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let cities = [
//     {
//         name: 'Lviv',
//         people: 900000,
//         country: 'Ukraine',
//         comfortable: true
//     },
//     {
//         name: 'Rome',
//         people: 2000000,
//         country: 'Italy',
//         comfortable: true
//     },
//     {
//         name: 'California',
//         people: 3000000,
//         country: 'USA',
//         comfortable: true
//     },
//     {
//         name: 'Koln',
//         people: 2500000,
//         country: 'Germany',
//         comfortable: true
//     },
//     {
//         name: 'Madrid',
//         people: 1800000,
//         country: 'Spain',
//         comfortable: true
//     },
// ]
// for(let i=0;i<cities.length; i++) {
//     let p = JSON.stringify(cities[i]);
//     console.log(p);
// }
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
//  let cars = [
//      {
//         name: 'mersedes',
//         old: 7,
//         model: 'C-class',
//         color: 'black',
//         comfortable: true,
//             driver: {
//             name: 'John',
//             old: 20,
//             sex: 'man',
//             experience: '2 years',
//             }
//     },
//     {
//         name: 'BMW',
//         old: 4,
//         model: 'X6',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'Anjelina',
//             old: 34,
//             sex: 'woman',
//             experience: '8 years',
//         }
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//         driver: {
//             name: 'Antony',
//             old: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Toyota',
//         old: 5,
//         model: 'Yaris',
//         color: 'white',
//         comfortable: false,
//         driver: {
//             name: 'Kelly',
//             old: 28,
//             sex: 'woman',
//             experience: '2 years',
//         }
//     },
//     {
//         name: 'Opel',
//         old: 13,
//         model: 'Vectra',
//         color: 'green',
//         comfortable: false,
//         driver: {
//             name: 'Peter',
//             old: 48,
//             sex: 'man',
//             experience: '18 years',
//         }
//     },
// ]
// for(let i=0; i<cars.length;i++){
//  let s = JSON.stringify(cars);
//  let cars1 = [];
//  cars1.push(s);
//  console.log(cars1);
// }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [
//     {
//         name: "Ira",
//         age: 16,
//         skills: ["java","javascript"],
//     },
//     {
//         name: "Katya",
//         age: 35,
//         skills: ["ruby","php"],
//     },
//     {
//         name: "Ivan",
//         age: 48,
//         skills: ["c++"],
//     },
// ];
// let arr = [];
// for(let user of users){
//     arr.push(user['skills']);
// }
// console.log(arr);

// За допомогою 2х циклів проітерувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//     ];
// for (let z of users){
//     console.log(z);
// }
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let arr = [];
// for(let user of users){
//     arr.push(user["address"]);
// }
// console.log(arr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let i = 0; i<users.length; i++){
//     const user = users[i];
//     const div = document.createElement("div");
//     let address = ` `;
//     for (const address1 in user.address) {
//         address = address + ` ` + user.address[address1]
//     }
//     div.innerText = `${user.name}  ${user.age} ${user.status} ${address} `;
//     document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (let i = 0; i<users.length; i++){
//     let user = users[i];
//     let div = document.createElement("div");
//     let h2 = document.createElement("h2");
//     let p1 = document.createElement("p");
//     let p2 = document.createElement("p");
//     let p3 = document.createElement("p3");
//     let address = ` `;
//     for (let address1 in user.address) {
//         address = address + ` ` + user.address[address1]
//     }
//     h2.innerText = user.name;
//     p1.innerText = user.age;
//     p3.innerText = user.status;
//     p2.innerText = address;
//
//     div.appendChild(h2);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);
//     document.body.appendChild(div);
// }

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i<users.length; i++){
//     let user = users[i];
//     let div = document.createElement("div");
//     let name = document.createElement("h2");
//     let age = document.createElement("p");
//     let status = document.createElement("p");
//     let address = document.createElement("div");
//
//     for (let address1 in user.address ) {
//        let temp = document.createElement("div");
//        temp.innerHTML = user.address[address1];
//         address.appendChild(temp);
//     }
//
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//     document.body.appendChild(div);
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {}},
//      {id: 4, name: 'olya', age: 28, status: false, address: {}},
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
//     ];
//
//  for(const user of usersWithId ){
//      for(const city of citiesWithId){
//          if (user.id === city.user_id){
//              user.adress = city;
//          }
//      }
// }
// console.log(usersWithId);
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let elem = document.querySelector('#divka');
// console.log(elem);
// let elem = document.querySelector('.divka');
// console.log(elem);

// ******************************************************

// - змінити цей текст використовуючи селектори id, class,  tag

// let elem = document.querySelector('#divka');
// elem.innerHTML = 'hello!'
// console.log(elem);
// let elem = document.querySelector('.divka');
// elem.innerHTML = 'hello World';
// console.log(elem);


// *********************************************
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elem = document.getElementById('divka')
// elem.style.width = '300px';
// elem.style.height = '150px';
// console.log(elem);

// *************************************

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let main = document.createElement('div');
// main.style.width = '300px';
// main.style.height = '150px';
// main.style.backgroundColor = '#000000';

// let body = document.querySelector('body');
// body.appendChild(main);



// for(i = 0; i < 3; i++){
//     let divka = document.createElement('div');
//     divka.style.width = '100px';
//     divka.style.height = '150px';
//     divka.style.border = '1px solid white';
//     main.appendChild(divka);
//     divka.style.display = 'inline-block';
// }

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// const table = document.createElement("table");
// const tr = document.createElement("tr");
// const td = document.createElement("td");
// const td2 = document.createElement("td");
// const td3 = document.createElement("td");
// tr.appendChild(td);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table.appendChild(tr);
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 3 ячейками всередені

// const table = document.createElement("table");
// for (let i=0;i<10;i++) {
//     const tr = document.createElement("tr");
//     for (let i = 0; i < 3; i++) {
//         const td = document.createElement("td");
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

// за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = +prompt('Введіть рядки');
// let m = +prompt('Введіть стовпці');
// let table = document.querySelector('#emptyTable');

// for (let i = 0; i < n; i++) {
// let tr = document.createElement('tr');

// for (let j = 0; j < m; j++) {
// let td = document.createElement('td');
// td.style.border = '1px solid black';
// td.style.width = '200px';
// td.style.height = '50px';
// td.classList.add('forTd')
// tr.appendChild(td);
// }
// table.appendChild(tr);
// }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// <body>
//     <div id="content"></div>
//     <h1>Правила бойцовского клуба</h1>
//     <div id="wrap">
//         <div class="rules rule1">
//             <h2>Первое правило Бойцовского клуба.</h2>
//             <p>Никому не рассказывать о Бойцовском клубе.</p>
//         </div>
//         <div class="rules rule2">
//             <h2>Второе правило Бойцовского клуба.</h2>
//             <p>Никогда никому не рассказывать о Бойцовском клубе.</p>
//         </div>
//         <div class="rules rule3">
//             <h2>Третье правило Бойцовского клуба.</h2>
//             <p>В схватке участвуют только двое.</p>
//         </div>
//         <div class="rules rule4">
//             <h2>Четвертое правило Бойцовского клуба.</h2>
//             <p>Не более одного поединка за один раз.</p>
//         </div>
//
//         <div class="rules rule5">
//             <h2>Пятое правило Бойцовского клуба.</h2>
//             <p>Бойцы сражаются без обуви и голые по пояс.</p>
//         </div>
//         <div class="rules rule6">
//             <h2>Шестое правило Бойцовского клуба.</h2>
//             <p>Поединок продолжается столько, сколько потребуется.</p>
//         </div>
//         <div class="rules rule7">
//             <h2>Седьмое правило Бойцовского клуба.</h2>
//             <p>Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок
//                 окончен.</p>
//         </div>
//         <div class="rules rule8">
//             <h2>Восьмое и последнее правило Бойцовского клуба.</h2>
//             <p>Новичок обязан принять бой.</p>
//         </div>
//     </div>
// </body
// let elementsByTagName=document.getElementsByTagName("h2");
// let elementById=document.getElementById("content");
// let ul=document.createElement("ul");
// for(let item of elementsByTagName){
//     let li=document.createElement("li");
//     li.innerText=item.innerText
//     ul.appendChild(li)
// }
// elementById.appendChild(ul)

// створити об'єкт
// let dog={
//     name: "Graf",
//     age: 3,
//     breed: "bulldog",
//     color: "black",
//     skills: "gav-gav,"
// };
// let person={
//     name: "ivan",
//     age: 30,
//     skills: "java",
//     exp: "5 years",
// };
// let car= {
//     model: "audi",
//     year: "2015",
//     color: "white",
//     engine: "diesel",
//     comfort: true,
// };
// let flat={
//     area: 80,
//     comfort: true,
//     town: "Lviv",
// }
// console.log(dog);
// console.log(person);
// console.log(car);
// console.log(flat);

// Створити масив та вивести його в консоль:
// let dogs= ["bulldog","terrier","alabay"];
// let people=["Katya","Ira","Olya"];
// let cars=["mercedes","Audi","Toyota"];
// console.log(dogs);
// console.log(people);
// console.log(cars);

// створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом

// let driver = { name: "John",age:48, skills: ["driving"] ,exp:"20 years", wife: { name: "Amanda" } };
// let house = { country: "Ukraine", city : ["Lviv"] ,feature: {name:"smart hause"},area:"120 m2" };
// let toy = { producer: "holly toy", name: ["Taddy"], made: {material: "cotton"} };
// let bag = { producer: "Michael Cors",country: ["USA"], made: { material: "leather"} };
// console.log(driver);
// console.log(house);
// console.log(toy);
// console.log(bag);

// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// console.log(users[0].name);
// console.log(users[7].status);
// console.log(users[10].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[9].age);
// console.log(users[4].name)