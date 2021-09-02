/* 
음양 더하기

어떤 정수들이 있다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은
불리언 배열 signs가 매개변수로 주어짐 
=> 실제 정수들의 합을 구하려 return
*/
function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      signs[i] = 1;
    } else {
      signs[i] = -1;
    }
    sum += absolutes[i] * signs[i];
  }
  return sum;
}
