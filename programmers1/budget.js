/*
예산

전체 예산은 정해짐, 최대한 많은 부서의 물품을 구매
물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원 ex) 1000원 신청한 부서는 1000원 지원

부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 
=> 최대 몇 개의 부서에 물품 지원 가능한지 return
*/
function solution(d, budget) {
  let answer = 0;
  let result = 0;
  let sorted = d.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    answer++;
    result += sorted[i];
    if (result > budget) {
      answer--;
    }
  }
  return answer;
}
