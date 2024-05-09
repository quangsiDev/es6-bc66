// key và biến chứa value trùng nhau => chỉ cầm giữ lại 1

let username = "Alice";

let user = {
  //   username: username,
  username,
};

let a = 1;
let b = 2;
console.log({ a, b });
