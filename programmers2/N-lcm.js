const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

function solution(arr) {
  let result = arr.reduce((acc, cur) => {
    acc = lcm(acc, cur);
    return acc;
  });

  return result;
}
