// object  ~ pass by reference ( địa chỉ ô nhớ)

let cat1 = {
  name: "mun",
};
let cat2 = {
  name: "mun",
};
console.log(cat1 == cat2); //false
console.log(JSON.stringify(cat1) == JSON.stringify(cat2)); //true
// deep compare

// ---------
// tạo cat3 từ cat1 cũ theo cách dưới thì 2 object sẽ chứa chung địa chỉ
let cat3 = cat1;
console.log(cat3 == cat1); // true

// dùng spead operator để clone object

let cat4 = { ...cat1 };
cat4.name = "miu";
console.log(cat1, cat4);

// vừa clone, vừa update
let cat5 = { ...cat1, name: "tom" };

// với array

let colors = ["black", "red"];

let newColors = [...colors, "white", "green"];
console.log("😀 - newColors", newColors);

// shallow copy, deep copy
// shallow compre , deep compare
