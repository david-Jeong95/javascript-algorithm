/* 
행렬의 덧셈 (행렬의 기초)

두개의 행렬 arr1, arr2를 입력받아, 행렬을 덧셈하라

arr1	        arr2	        return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	    [[3],[4]]	    [[4],[6]]
*/

function solution(arr1, arr2) {
  let answer = [];
  let value = 0;

  for (let i = 0; i < arr1.length; i++) {
    let temp = []; // 전역변수로 선언하면 반복될때마다 temp에 []을 할당하지 않는다. ex) [4,6,7,9] => 한번만 선언되기 때문
    for (let j = 0; j < arr1[0].length; j++) {
      value = arr1[i][j] + arr2[i][j];
      temp.push(value);
    }
    answer.push(temp);
  }
  return answer;
}
