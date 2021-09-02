/*
타겟 넘버(깊이 우선 탐색 dfs)

n개의 음이 아닌 정수가 있을 때, 이 수를 적절히 더하거나 빼서 타겟 넘버 만듦.
numbers	         target	 return
[1, 1, 1, 1, 1]	  3	      5 
*/

function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}
