// rest params ~ convert argument trở thành array

// let tinhDTB = (toan, van) => {
//   let dtb = (toan + van) / 2;
//   console.log("😀 - dtb", dtb);
// };
let tinhDTB = (...arrayDiem) => {
  let tong = 0;
  arrayDiem.forEach((diem) => {
    tong += diem;
  });
  let dtb = tong / arrayDiem.length;
  console.log("😀 - dtb", dtb);
};

tinhDTB(7, 8); // 7.5

tinhDTB(7, 3, 2, 9, 7); //5.x
