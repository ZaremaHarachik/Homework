//
// class Mercedes {
//     constructor(color,power,prise ) {
//         this.carcolor = color;
//         this.carpower = power;
//         this.carprise = prise
//     }
//     ride(){
//         console.log(`1/4 mile = 10s`)
//     }
// }
// let C200 = new Mercedes(`black`,200,300000)
//
// console.log(C200);
//
// C200.ride()
//
// class Html{
//     constructor(titleOfTag,action,attrs) {
//  this.titleOfTag = titleOfTag;
//  this.action = action;
//  this.attrs = attrs;
//
//     }
// }
//
// let title = `<a>`;
// let action = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.`;
// let attibytes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
//
// ];
//
// let a = new Html(title,action,attibytes)
// console.log(a)
//
// let title1 = `<div>`;
// let action1 = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`;
// let attibytes1= [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
//
// ];
//
// let div = new Html(title1,action1,attibytes1)
// console.log(div)
//
//
//
// let title2 = `<h1>`;
// let action2 = `HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.`;
// let attibytes2= [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
//
// ];
//
// let h1 = new Html(title2,action2,attibytes2)
// console.log(h1)


// Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car ={
//   model:`Land Cruiser`,
//   wyrobnyk:`Toyota`,
//   year:2015,
//   maxspeed:200,
//   engine: `diesel`,
//     drivers: ` `,
//     drive: function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     },
//     info: function (){
//         console.log(`
//   model: ${this.model},
//   wyrobnyk: ${this.wyrobnyk},
//   year: ${this.year},
//   maxspeed:${this.maxspeed},
//   engine:${this.engine}
//   drivers: ${this.drivers}
//   `)
//     },
//     increaseMaxSpeed: function (newSpeed){
//       this.maxspeed += newSpeed;
//     },
//     changeYear: function (newValue){
//         this.year = newValue;
//     },
//     addDriver : function (){
//       this.drivers = `name: John, age: 38, experience:20`
//       }
// };
//
// car.drive();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver()
// car.info();


//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model,wyrobnyk,year,maxspeed,engine,drivers ) {
//         this.model =model || `Land Cruiser`;
//         this.wyrobnyk = wyrobnyk || `Toyota`;
//         this.year = year || 2015;
//         this.maxspeed = maxspeed || 200;
//         this.engine = engine || `diesel`;
//         this.drivers = drivers || driver;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     info (){
//        console.log(`
//         model: ${this.model},
//         wyrobnyk: ${this.wyrobnyk},
//         year: ${this.year},
//         maxspeed:${this.maxspeed},
//         engine:${this.engine}
//         `)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxspeed += newSpeed;
//     }
//     changeYear (newValue){
//         this.year = newValue;
//     }
//     addDriver (driver){
//         this.drivers = driver
//     }
// }
//  let driver ={
//      name:`Jnoh`,
//     age: 38,
//      experience:20
//
//  }
// let car  = new Car(`Subaru`,`japan`, 2009, 150,2.0, driver);
// console.log(car);
// car.drive();
// car.increaseMaxSpeed(150);
// car.changeYear(2020);
// car.addDriver(`Peter`)
// car.info();
// console.log(car);


//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name,age,footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//    let  Amanda = new Cinderella(`Amanda`, 16, 34);
//        let Jessika = new Cinderella(`Jessika`, 17, 35);
//     let Katrin = new Cinderella(`Katrin`, 18, 36);
//     let Olivia = new Cinderella(`Olivia`, 19, 37);
//     let Monica = new Cinderella(`Monica`, 20, 38);
//
// let girls = [Amanda,Jessika,Katrin,Olivia,Monica];
//
// class Prince {
//     constructor(name, age, shoes) {
//         this.shoes = shoes;
//         this.name = name;
//         this.age = age;
//
//         this.findMyPrincess = (ladies) => {
//             for (const lady of ladies) {
//                 if (lady.footsize === this.shoes) {
//                     console.log(`${this.name} and ${lady.name} married`);
//                     break;
//                 }
//             }
//         }
//     }
// }
//
//   let Steven  = new Prince(`Steven`,17,35)
//   Steven.findMyPrincess(girls);


//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella(name,age,footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
// }
//    let  Amanda = new Cinderella(`Amanda`, 16, 34);
//    let Jessika = new Cinderella(`Jessika`, 17, 35);
//     let Katrin = new Cinderella(`Katrin`, 18, 36);
//     let Olivia = new Cinderella(`Olivia`, 19, 37);
//     let Monica = new Cinderella(`Monica`, 20, 38);
// let girls = [Amanda,Jessika,Katrin,Olivia,Monica];
// function Prince(name, age, shoes) {
//     this.shoes = shoes;
//     this.name = name;
//     this.age = age;
//     this.findMyPrincess = (ladies) => {
//         for (const lady of ladies) {
//             if (lady.footsize === this.shoes) {
//                 console.log(`${this.name} and ${lady.name} married`)
//                 break;
//                 }
//         }
//     }
// }
//
// let Steven = new Prince(`Steven`,17,35)
// Steven.findMyPrincess(girls);