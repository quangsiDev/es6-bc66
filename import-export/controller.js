export let username = "alice";

export let sayHello = () => {
  console.log(account);
};

export let gmail = "alice@gmail.com";

// 2 loại export

// export thường : sử dụng được nhiều lần, import { trùng tên }

// export default : sử dụng được 1 lần trên 1 file, import tên tuỳ thích

let myPassword = "DiLamVuiVe";

export default myPassword;
