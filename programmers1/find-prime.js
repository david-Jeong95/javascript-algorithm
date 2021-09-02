/*
소수 찾기

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환
*/
//에라토스테네스 방법
function solution(n) {
  let arr = Array.from({ length: n + 1 }, () => true); // 0~10 인덱스에 true 값 대입 => [0: true, 1: true...]
  arr.splice(0, 2, false, false); // 0, 1은 false(소수가 아니므로)
  for (let i = 2; i < n + 1; i++) {
    if (arr[i]) {
      for (let j = i * i; j < n + 1; j += i) {
        arr[j] = false;
      }
    }
  }
  let answer = arr.filter((el) => el === true);
  return answer.length;
}

// function solution(n) {

//     function prime(n){
//         if (n < 2) return false;
//         if (n === 2) return true;
//         for(let i = 2; i <= Math.sqrt(n); i++){
//             if(n % i === 0){
//                 return false
//             }
//         }
//         return true
//     }
//     let arr = []
//     for(let i = 2; i < n + 1; i++){
//         if(prime(i)){
//             arr.push(i)
//         }
//     }
//     return arr.length
// }
