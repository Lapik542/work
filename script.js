// function checkStorage(available, ordered) {
//   if (available > ordered) {
//     return "Not enough goods in stock!";
//   } else {
//       return "Order is processed, our manager will contact you";
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// function toggleModalVisibility(isVisible) {
//   if (!isVisible === true) {
//     console.log(true);
//   } else if (isVisible === true) {
//     console.log(false);
//   }
//   return isVisible
// }
// toggleModalVisibility(true)
// toggleModalVisibility(false)


// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// function getSubstring(string, length) {
//   // Перевіряємо, чи довжина не більше за довжину рядка
//   if (length <= string.length) {
//       // Використовуємо метод `slice`, щоб витягнути частину рядка
//       return string.slice(0, length);
//   } else {
//       // Якщо довжина більше за розмір рядка, повертаємо весь рядок
//       return string;
//   }
// }
// console.log(getSubstring("Hello world", 3));  // "Hel"
// console.log(getSubstring("Hello world", 5));  // "Hello"
// console.log(getSubstring("Hello world", 8));  // "Hello wo"
// console.log(getSubstring("Hello world", 11)); // "Hello world"
// console.log(getSubstring("Hello world", 0));  // ""


// function normalizeInput(input, to) {
//   if (input = input.toLowerCase()) {
//     console.log(input.toUpperCase());
//   } else {
//     console.log(input.toLowerCase());
//   }
// }
// normalizeInput("This ISN'T SpaM", "lower") // "this isn't spam"
// normalizeInput("This ISN'T SpaM", "upper") // "THIS ISN'T SPAM"
// normalizeInput("Big SALE", "lower") // "big sale"
// normalizeInput("Big SALE", "upper") // "BIG SALE"
// normalizeInput("Stay Awhile and Listen", "lower") // "stay awhile and listen"
// normalizeInput("Stay Awhile and Listen", "upper") // "STAY AWHILE AND LISTEN"


// function normalizeInput(input, to) {
//   input ? input.toLowerCase : input.toUpperCase;
// }
// normalizeInput("This ISN'T SpaM", "lower")
// normalizeInput("This ISN'T SpaM", "upper")
// normalizeInput("Big SALE", "lower")
// normalizeInput("Big SALE", "upper")
// normalizeInput("Stay Awhile and Listen", "lower")
// normalizeInput("Stay Awhile and Listen", "upper")

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[12];
// console.log(lastElement);


// function getOrderQuantity(order) {
//     console.log(order.length);
//   }
// getOrderQuantity(["apple", "peach", "pear", "banana"])
// getOrderQuantity(["apple", "banana"])
// getOrderQuantity(["apple", "banana", "pear"])
// getOrderQuantity([])
  
// function getLastElementMeta(array) {
//   return  [array.length - 1, array[array.length - 1]];
// }
// getLastElementMeta(["apple", "peach", "pear", "banana"]) // [3, "banana"]
// getLastElementMeta(["apple", "peach", "pear"]) // [2, "pear"]
// getLastElementMeta(["apple", "peach"]) // [1, "peach"]
// getLastElementMeta(["apple"]) // [0, "apple"]

// let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Присвоєння за значенням, у пам'яті буде створено ще
// // одну ячейку, в яку буде скопійовано значення 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія


// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) { // Перевіряємо, чи число парне
//       total += i; // Додаємо парне число до суми
//     }
//   }
//   return total;
// }
// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));


// const userLength = 60;

// for (let i = 1; i <= userLength; i++) {
//   console.log('User' + ' ' + i);
// }
// console.log('Length User Num');


// function num(number) {
//   let sum = 0
//   for (let i = 0; i <= number; i += 1) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// const start = 6;
// const end = 17;
// let number;
// for (let i = 0; i <= start; i += 1) {
//   if (i % 5 === 0) {
//     sum += i
//   }
// }


// const start = 6;
// const end = 17;
// let number;
// for (number = start; number <= end; number += 1) {
//   if (number % 5 === 0) {
//     break;
//   }
// }

// function findNumberFromFive(max, target) {
// 	console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumberFromFive(10, 6);
// console.log("Log after exiting function");

// function findNumber(start, end, divisor) {
//   for (let number = start; number <= end; number++) {
//     if (number % divisor === 0) {
//       return number;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

// let res = 0;
// for (let i = 0; i < 10; i += 1) {
//     if (i % 2 === 0) {
//       continue;
//     } else if (i > 8) {
//       break;
//     }
//     res += i;
// }
// console.log(res);

// const n = 100;
// for (let i = 1; i <= n; i += 1) {
//   console.log(i);
// }

// const n = 0;
// for (let i = 100; i > n; i -= 1) {
//   console.log(i);
// }

// const n = 100;
// for (let i = 0; i <= n; i += 2) {
//   console.log(i);
// }

// const a = 0;
// const b = 20;

// let res = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//     res += i;
//   }
// }
// console.log(res);

// const min = 0;
// const max = 5;
// let sum = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(sum);


// function findNumber(start, end, divisor) {

//   for (let i = start; start <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
  
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));



// function calculateDeposit(amount, percent, period) {
//   let sum = amount;

//   for (let i = 0; i < period; i++) {
//     sum += sum * (percent / 100);
//   }
//   return Math.round(sum * 100) / 100;
// }
// const deposit = calculateDeposit(1000000, 8, 3)

// console.log(deposit);













// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     return {
//     id: (this.transactions.length + 1).toString(),
//     amount,
//     type,
//     };
//   },

//   deposit(amount) {
//     this.balance += amount;

//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);

//     this.transactions.push(newTransaction);
//   },

//   withdraw(amount) {
//     if(amount > this.balance) {
//       console.error('You dont have enough money');
//       return
//     }
//     this.balance -= amount;

//     const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);

//     this.transactions.push(newTransaction);
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if(transaction.id === id) return transaction
//     }

//     console.warn('You dont have transaction with id:' + id);
//   },

//   getTransactionTotal(type) {
//     let totalAmount = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) totalAmount += transaction.amount;
//     }
//   }
// }


// account.deposit(5000);

// console.log(account.getBalance);

// account.withdraw(1500);

// console.log(account.getBalance());

// account.withdraw(1500);
// console.log(account.getBalance);

// account.deposit(500);
// console.log(account.getBalance());

// account.withdraw(2000);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails('3'));




// function calcAverageCalories (days){
//   let calories = 0;
//   for(let day of days) {
//     calories += day.calories;
//   }
//   if(days.length === 0) {
//     return 0
//   }
//   return calories / days.length
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([])
// ); // 0



// const profile = {
//   username: "Jacob",
// playTime: 300,

// changeUsername(newName) {
//   this.username = newName;
// },

// updatePlayTime(hours) {
//   this.playTime += hours;
// },

// getInfo() {
//   return `${this.username} has ${this.playTime} active hours!`
// }
// };


// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo());

// const user = {
//    name: 'Alex',
//    vip: true,
// }

// function getUserBonus(user, onSuccess, onReject) {
//    const bonus = {
//       id: 'wepr-2344-sdfs-2348-wsdv',
//       name: 'Welcome Bonus',
//       monye: 2000,
//    }

//    if (user.vip) {
//       onSuccess(bonus);
//    } else {
//       onReject(null)
//    }
// }

// function handleSuccess(bonus) {
//    console.log(bonus);
// }

// function handleError() {
//    console.error('Some error, try again later');
// }

// getUserBonus(user, handleSuccess, handleError);

// function each(array, callback) {
//    const newArray = [];

//    for (const element of array) {
//       const result = callback(element);
//       newArray.push(result);
//    }
//    return newArray;
// }

// console.log(
//    each([12, 33, 44, 72, 18], function (value) {
//       return value * 2;
//    })
// );


// //  USER__VIP

// const user = {
//    name: 'Alex',
//    type: 'admin',
//    age: 16,
//    vip: true,
// }

// function clickOnBonus(user, onSuccess, onSuccessForAdmin, onReject, onRejectForAdmin) {
//    const bonus = {
//       id: '12-34-56-78',
//       name: 'Super Bonus!',
//       money: 2000,
//    }

//    if (user.vip && user.age >= 16) {
//       onSuccess(bonus)
//    } else {
//       onReject(null)
//    }

//    if (user.type === 'admin') {
//       onSuccessForAdmin(bonus)
//    } else {
//       onRejectForAdmin(null)
//    }
// }

// function handleSuccess(bonus) {
//    console.log(bonus);
// }

// function handleSuccessForAdmin(bonus) {
//    console.log(bonus);
// }

// function handleReject() {
//    console.error('Some error, try again later');
// }

// function handleRejectForAdmin() {
//    console.error('You not admin! Some error, try again later');
// }

// clickOnBonus(user, handleSuccess, handleSuccessForAdmin, handleReject, handleRejectForAdmin);

// // CALLBACK

// function callback() {
//    console.log('Hello world');
// }

// function saySomething(onSomething) {
//    onSomething()
// }

// saySomething(callback)


// // BUTTON


// const button = {
//     listeners: [],

//    click() {
//       for (const listener of this.listeners) {
//          listener();
//       }
//    },

//    addListener(callback) {
//       this.listeners.push(callback)
//    }
// }

// function onClick() {
//    console.log('Click 1');
// }

// function onClick2() {
//    console.log('Click 2');
// }

// button.addListener(onClick)
// button.addListener(onClick2)

// button.click();

// ADD

// function handleAdd(result) {
//    console.error(result);
// }

// function handleAdd2(result) {
//    console.log(result);
// }

// function add(a, b, callback) {
//    callback(a + b)
// }

// add(2, 3, handleAdd)

// add(8, 10, handleAdd2)

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// EACH

// function each(array, callback) {
//    const newArray = [];

//    for (const element of array) {
//       const result = callback(element)
//       newArray.push(result);
//    }

//    return newArray;
// }
// console.log(each([64, 49, 36, 25, 16], function (value) {
//    return value * 2;
// }));

// // ADMIN_CALLBACK


// function addMessage(result) {
//    console.error(result);
// }

// function addMessage2(result) {
//    console.warn(result);
// }

// function addListener(a, d, callback) {
//    callback(a + d)
// }

// addListener('You not ' ,'Admin!', addMessage);
// addListener('You not ', 'Admin!', addMessage2);


// function each(array, callback) {
//    const newArray = [];

//    for (element of array) {
//       const result = callback(element)
//       newArray.push(result)
//    }
//    return newArray;
// }

// console.log(
//    each([64, 49, 36, 25, 16], function (value) {
//    return value * 2;
//    })
// );


// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const number = [5, 10, 15, 20, 25, 30];

// let total = 0;

// number.forEach((value) => {
//     total += value;
// })

// console.log(total);


// const addNumber = (...argu) => {
//     let total = 0;
     
//     argu.forEach((number) => total += number)

//     return total / argu.length;
// }

// console.log(addNumber(12,3,5,7,1,4));
// console.log(addNumber(10,10,10,10));


// const allCar = [
//     { make: 'Toyota', amount: 12, price: 25141 },
//     { make: 'BMW', amount: 12, price: 32141 },
//     { make: 'Mercedes', amount: 12, price: 15141 },
//     { make: 'Ford', amount: 12, price: 75141 },
// ];

// // const result = allCar.map((car, i) => {
// //     return {
// //         ...car,
// //         make: car.make === 'Toyota' || car.make === 'Ford' ? car.make = 'Jiga' : car.make
// //     }
// // });

// const make = allCar.flatMap(make => make.make)
// console.log(make);
// // console.log(result);

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return balance;
//   },
//   getDiscount() {
//     return discount;
//   },
//   setDiscount(value) {
//     discount = value;
//   },
//   getOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost - cost * discount;
//     orders.push(order);
//   },
//   // Change code above this line
// };






// const options = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'gray', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F5185' },
// ];

// const colorPickerContainer = document.querySelector('.color-picker');

// // const colorElements = options.map((option) => {
// //     const colorElement = document.createElement('div');
// //     colorElement.className = 'color-picker__option';
// //     colorElement.title = option.label;
// //     colorElement.style.backgroundColor = option.color;

// //     return colorElement;
// // })

// // colorPickerContainer.append(...colorElements)


// const colorsHTML = options.reduce((html, option) => html + `
//     <div
//     title=${option.label}
//     style='background-color: ${option.color};'
//     class='color-picker__option'
//     >
//     </div>
// `, '')

// colorPickerContainer.insertAdjacentHTML('beforeend', colorsHTML)
// console.log(colorsHTML);

// const list = document.querySelector('#categories')
// const childeList = list.children;
// console.log(`Number of categories: ${childeList.length}`);
// const animals = list.childNodes;
// console.log(`Category: ${animals}`);
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const shopStone = {
//    stones: [
//       { name: 'Emerald', price: 1300, quantity: 4 },
//       { name: 'Diamond', price: 2700, quantity: 3 },
//       { name: 'Sapphire', price: 1400, quantity: 7 },
//       { name: 'Ruby', price: 800, quantity: 2 },
//    ],
//    calcTotalPrice(stoneName) {
//       const foundStone = this.stones.find(stone => stone.name === stoneName);

//       if (!foundStone) return 0;

//       return foundStone.price * foundStone.quantity;
//    },
// };

// console.log(shopStone.calcTotalPrice('Emerald'));
// console.log(shopStone.calcTotalPrice('Diamond'));
// console.log(shopStone.calcTotalPrice('Sapphire'));
// console.log(shopStone.calcTotalPrice('Ruby'));



// const obj = {
//    name: 'Alex',
//    age: 16,

//    sayThis() {
//       console.log(this.name);
//    }
// }

// // obj.sayThis();


// function meet(onSuccess) {
//    if (true) {
//       console.log('Hello what\'s your name?');
//       obj.sayThis();
//    }
// }

// meet(obj.sayThis);

// obj.sayThis()

// const obj2 = obj.sayThis;

// obj2();
 

// // Створення об'єкта
// var myObject = {
//   // Властивість об'єкта
//   property1: "Значення властивості",
  
//   // Метод об'єкта
//    method1() {
//     console.log("Це метод об'єкта");
//   }
// };

// // Виклик методу об'єкта
// myObject.method1(); // Виведе: Це метод об'єкта


// function saySomething(onResult) {
//    console.log('Something');
//    onResult();
// }

// saySomething(obj.sayThis)


// function sayThis() {
//    console.log(this);
// }

// const sayThis2 = () =>{
//    console.log(this);
// }



// sayThis();
// sayThis2();

// const account = {
//    balance: 1000,

//    sayThis() {
//       const arrowFn = () => {
//          console.log(this);
//       }
//       arrowFn();
//    }
// }

// account.sayThis();

// const showThis = function () {
//    console.log(this);
// }

// const obj = {
//    name: 'Alex',
//    age: 16,
// }

// showThis.call(obj)

// const animal = {
//    legs: 4,
// }

// const dog = Object.create(animal);

// dog.name = 'Sharik'
// dog.age = 6
// dog.legs = 4;

// for (const key in dog) {
//    if (dog.hasOwnProperty(key)) {
//       console.log(key);
      
//    }

   // console.log(key);
   
   // if (Object.hasOwnProperty.call(object, key)) {
   //    const element = object[key];
      
   // }
// }


// console.log(dog);

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750

  

// class User {
//   _email;

//   constructor(email) {
//     this._email = email;
//   }

//   get email() {
//     return this._email;
//   }

//   set email(newEmail) {
//     this._email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   static blacklistedEmails = [];

//   constructor({ email, access }) {
//     super(email);
//     this.access = access;
//   }

//   blacklist(email) {
//     Admin.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return Admin.blacklistedEmails.includes(email);
//   }
// }

// // Приклад використання:
// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(Admin.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// class Car {
//    speed = 0;
//    model = '';
//    color = '#000000';

//    #key = '';

//    get key() {
//       return this.#key
//    }

//    set key(newKey) {
//       if (this.#key) {
//          console.error('You have already have a key');
//          return;
//       }

//       this.#key = newKey;
//    }

//    constructor(speed, model, color, key) {
//       this.speed = speed;
//       this.model = model;
//       this.color = color;

//       this.#key = key;
//    }

//    start() {
//       if (this.#key) {
//          console.log(`${this.model} Started.`);
//       } else {
//          console.log(`${this.model} Started. Had Speed: ${this.speed}`);
//       }
//    }

//    stop() {
//       console.log(`${this.model} Stoped with color ${this.color}`);
//    }
// }

// const bmw = new Car(200, 'BMW', 'Red');
// const audi = new Car(300, 'AUDI', 'Blue');
// const tesla = new Car(50, 'Tesla', 'Black', 'sdfq-wgda-3465');

// // console.log(bmw);
// // console.log(audi);
// // console.log(tesla);


// audi.key = 'NEW KEY';

// console.log(audi.key)



// // bmw.start();
// // audi.start();
// // tesla.stop();
// // bmw.stop();

// class Storage {
//    #items = [];

//    constructor(items) {
//       this.#items = items;
//    }

//    getItems() {
//       return this.#items;
//    }

//    addItem(newItem) {
//       this.#items.push(newItem)
//    }

//    removeItem(itemToRemove) {
//       this.#items = this.#items.filter(product => product !== itemToRemove)
//    }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Home Work
// {1}
// const list = document.querySelector('#categories');
// const childeList = list.children;
// console.log(`Number of categories: ${childeList.length}`);

// const animals = list.querySelector('h2');
// console.log(`Category: ${animals.textContent}`);
// const elementAnimal = childeList[0].querySelectorAll('li');
// console.log(`Elements: ${elementAnimal.length}`);

// const product = list.querySelectorAll('#categories>li>h2')
// console.log(`Category: ${product[1].textContent}`);
// const elementProduct = childeList[1].querySelectorAll('li')
// console.log(`Elements: ${elementProduct.length}`);

// const technologies = list.querySelectorAll('#categories>li>h2')
// console.log(`Category: ${technologies[2].textContent}`);
// const elementTechnologies = childeList[2].querySelectorAll('li')
// console.log(`Elements: ${elementTechnologies.length}`);

// {2}
// const images = [
// {
// url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// alt: 'White and Black Long Fur Cat',
// },
// {
// url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
// },
// {
// url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// alt: 'Group of Horses Running',
// },
// {
// url:
// 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// alt: 'Elephant Beside on Baby Elephant',
// },
// {
// url:
// 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// alt: 'Blue Geeen and Orange Parrot',
// },
// {
// url:
// 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// alt: 'Zebras on Zebra',
// },
// ];

// const gallery = document.querySelector('.gallery');

// images.forEach((image) => {
//    const liElement = document.createElement('li');
//    const imgElement = document.createElement('img');
//    imgElement.className = 'gallery-box';
//    imgElement.alt = image.alt;
//    imgElement.src = image.url;

//    liElement.append(imgElement)
//    gallery.append(liElement)
// })

// const button = document.querySelector('.js-click');
// const box = document.querySelector('.js-box');

// const handlerButtonClick = () => {
//    box.style.backgroundColor = "green";
//    box.style.marginLeft = '80px';
//    box.style.transition = 'margin 2s ';
// }

// button.addEventListener('click', handlerButtonClick, {once: true});

// const userName = document.querySelector('.js-user-name');
// const button = document.querySelector('.js-button');

// let username = '';

// userName.addEventListener("input", (event) => {
//    username = event.target.value;
// });

// button.addEventListener('click', () => {
//    alert(`My name ${username}`);
//    userName.value = '';
//    username = '';
// })







// {1}
// const list = document.querySelector('#categories');
// const childeList = list.children;
// console.log(`Number of categories: ${childeList.length}`);

// const animals = list.querySelector('h2');
// console.log(`Category: ${animals.textContent}`);
// const elementAnimal = childeList[0].querySelectorAll('li');
// console.log(`Elements: ${elementAnimal.length}`);

// const product = list.querySelectorAll('#categories>li>h2')
// console.log(`Category: ${product[1].textContent}`);
// const elementProduct = childeList[1].querySelectorAll('li')
// console.log(`Elements: ${elementProduct.length}`);

// const technologies = list.querySelectorAll('#categories>li>h2')
// console.log(`Category: ${technologies[2].textContent}`);
// const elementTechnologies = childeList[2].querySelectorAll('li')
// console.log(`Elements: ${elementTechnologies.length}`);
// {2}
// const images = [
// {
// url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// alt: 'White and Black Long Fur Cat',
// },
// {
// url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
// },
// {
// url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// alt: 'Group of Horses Running',
// },
// {
// url:
// 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// alt: 'Elephant Beside on Baby Elephant',
// },
// {
// url:
// 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// alt: 'Blue Geeen and Orange Parrot',
// },
// {
// url:
// 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
// alt: 'Zebras on Zebra',
// },
// ];

// const gallery = document.querySelector('.gallery');

// images.forEach((image) => {
//    const liElement = document.createElement('li');
//    const imgElement = document.createElement('img');
//    imgElement.className = 'gallery-box';
//    imgElement.alt = image.alt;
//    imgElement.src = image.url;

//    liElement.append(imgElement)
//    gallery.append(liElement)
// })
// {3}
// const inputElement = document.querySelector('#name-input');
// const outputElement  = document.querySelector('#name-output');

// inputElement.addEventListener('input', () => {
//    if(inputElement.value.trim() === '') {
//       outputElement.textContent = 'Anonymous'
//    } else {
//       outputElement.textContent = inputElement.value;
//    }
// })
// {4}