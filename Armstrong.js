// adding  numbers
// let n = 678;
// result = 0;
// while (n != 0) {
//   quo = Math.floor(n / 10);
//   remainder = n % 10;
//   result = result + remainder;
//   n = quo;
// }
// console.log(result);

// count digits
//  n = 578466;
//  c = 0;
// while (n != 0) {
//   quo = Math.floor(n / 10);
//   c++;
//   n = quo;
// }
// console.log(c);

// Armstrong
m = 153;
n = m;
c = 0;
result = 0;
while (n != 0) {
  quo = Math.floor(n / 10);
  c++;
  n = quo;
}
n = m;
while (n != 0) {
  quo = Math.floor(n / 10);
  remaind = n % 10;
  console.log(`${result} + ${remaind} power ${c}`);
  result = result + remaind ** c;
  n = quo;
  console.log(result);
}
console.log(result);
if(result==m){
  console.log("its armstrong");
  }
  else{
    console.log("not armstrong");
  }
