let cat = {
  name: "tom",
  age: 2,
};
let name = "alice";
// let name= cat.name
// let age= cat.age
// destructuring and rename
let { name: catName, age } = cat;
console.log("😀 - catName", catName);
console.log("😀 - name, age", name, age);
