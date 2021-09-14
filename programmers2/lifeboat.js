/* 
구명보트 (탐욕법)

무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

people	            limit	return
[70, 50, 80, 50]	100	    3
[70, 80, 50]	    100	    3
*/

function solution(people, limit) {
  let answer = 0;
  let sorted = people.sort((a, b) => b - a); // 내림차순으로 정렬
  let l = sorted.length;

  for (let i = 0; i < l; i++) {
    if (sorted[i] + sorted[l - 1] > limit) {
      // 처음과 끝을 비교 -> 2명씩 밖에 못타서
      answer++;
    } else {
      answer++;
      l--;
    }
  }
  return answer;
}
