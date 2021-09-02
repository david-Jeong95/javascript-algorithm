/*
약수의 합

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

// function solution(n) {
//     let arr = [];
//     for(let i = 1; i < n + 1; i++){
//         if(n % i === 0){
//             arr.push(i)
//         }
//     }
//     let sum = arr.reduce((acc, cur) => {
//         acc = acc + cur;
//         return acc;
//     })
//     return sum
// }
//처음에는 reduce를 써서 접근하였지만 runtime error로
//조금 더 구동시간이 짧은 효율적인 방법의 접근이 필요했다.

function solution(n) {
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}
