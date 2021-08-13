// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// console.log(new Car("Audi", "Q3", 36000));

// -------------------------------------------------

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const Car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });

// console.log(Car.prototype.hasOwnProperty("getPrice"));

// console.log(Car1.price);

// Car1.changePrice(35000);
// console.log(Car1.price);

// -----------------------------------------------------------

//  function Storage   (items) {
//   this.items = items;
// };

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   if (this.items.includes(newItem)) {
//     return;
//   }
//   this.items.push(newItem);
//   //   console.log(this.items);
// };

// Storage.prototype.removeItem = function (Item) {
//   const nameIndex = this.items.indexOf(Item);
//   console.log(this.items);
//   console.log(nameIndex);
//   if (nameIndex < 0) {
//     console.log(`${Item} does not exist`);
//     return;
//   }

//   this.items.splice(nameIndex, 1);

//   console.log(this.items);
// };

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// // console.log(storage);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// // console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ---------------------------------------------------
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.value = str + this.value + str;
// };

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// // builder.padEnd("^");
// // console.log(builder.getValue()); // '^.^'
// // builder.padBoth("=");
// // console.log(builder.getValue()); // '=^.^='

// ----------------------------------------------------

// обьявления класса

// class Car {

//   brand;
//   model;
//   price;

// constructor ({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// }

// ----------------------------------------------------

// обьявление методов класса

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
// }
// -----------------------------------------------------------------

// class Car {
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     return (this.#brand = newBrand);
//   }
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// changeBrand("Honda");
// console.log(new Car());
