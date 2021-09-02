/*
폰켓몬

 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가는데
  최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 
  가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.
  nums	result
[3,1,2,3]	2
[3,3,3,2,2,4]	3
[3,3,3,2,2,2]	2
*/
function solution(nums) {
  let N = nums.length / 2;
  let newArr = [];

  let sorted = nums.sort((a, b) => a - b);
  newArr.push(sorted[0]);

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] !== sorted[i]) {
      newArr.push(sorted[i]);
    }
  }
  let max = newArr.length;
  if (max <= N) {
    return max;
  } else {
    return N;
  }
}
