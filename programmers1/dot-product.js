/*
내적

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어짐
a와 b의 내적을 return
(a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1])
*/
function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}
