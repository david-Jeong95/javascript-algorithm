/* 
기능 개발 (스택/ 큐)

각 기능은 진도가 100%일 때, 서비스에 반영가능할 때,
먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progress와 각 작없의 개발 속도가 적힌 
정수 배열 speeds가 주어질 때, 각 배포마다 몇 개의 기능이 배포되는지를 반환

progresses	                speeds	            return
[93, 30, 55]	            [1, 30, 5]	        [2, 1]
[95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
*/

function solution(progresses, speeds) {
  let answer = [];
  let count = 1;
  let first = Math.ceil((100 - progresses[0]) / speeds[0]);

  for (let i = 1; i < progresses.length; i++) {
    let a = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (first >= a) {
      count++;
      if (i === progresses.length - 1) {
        answer.push(count);
      }
    } else {
      first = a;
      answer.push(count);
      count = 1;
      if (i === progresses.length - 1) {
        answer.push(count);
      }
    }
  }
  return answer;
}
