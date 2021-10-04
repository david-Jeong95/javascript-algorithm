/* 
체육복 (탐욕법 greedy)

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

n	lost	reserve	    return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	        4
3	[3]	    [1]	        2

*/
function solution(n, lost, reserve) {
  let answer = 0;
  //학생 수 만큼 배열의 가지고 있는 체육복 수를 1로 초기화
  let hasSuit = new Array(n).fill(1);

  //잃어버린 학생은 -1을 해줌
  for (let i = 0; i < lost.length; i++) {
    hasSuit[lost[i] - 1]--;
  }
  //여벌이 있는 학생은 +1을 해줌
  for (let i = 0; i < reserve.length; i++) {
    hasSuit[reserve[i] - 1]++;
  }

  for (let i = 0; i < n; i++) {
    //체육복이 없을 때 좌우 학생이 있으면 빌려줌
    if (hasSuit[i] === 0) {
      if (hasSuit[i - 1] === 2) {
        hasSuit[i]++;
        hasSuit[i - 1]--;
      } else if (hasSuit[i + 1] === 2) {
        hasSuit[i]++;
        hasSuit[i + 1]--;
      }
    }
    //체육복이 한개이상 있으면
    if (hasSuit[i] > 0) {
      answer++;
    }
  }
  return answer;
}
