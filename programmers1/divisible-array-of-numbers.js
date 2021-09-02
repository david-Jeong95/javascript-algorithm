/*
나누어 떨어지는 숫자 배열

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수,
없다면 -1 반환
*/
function solution(arr, divisor) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }
  if (result.length === 0) {
    result.push(-1);
  }
  return result.sort((a, b) => a - b);
}
