// var username
console.log("😀 - username", username);

var username = "alice";
var username = "bob";

let account = "alice";
// let account = "alice";

/**

var : hỗ trợ khai báo trùng tên / function scope

let : không hỗ trợ khai báo trùng tên  / block scope

scope : phạm vi hoạt động của 1 biến
 */

// function scope ~ var

var isLogin = true;
function checkLogin() {
  console.log("😀 - message", message);
  if (isLogin) {
    var message = "Success";
  } else {
    var message = "Error";
  }
}

checkLogin();

// block scope ~ let
let is_login = true;

function check_login() {
  if (is_login) {
    let message = "success";
  } else {
    let message = "error";
  }
}

check_login();
