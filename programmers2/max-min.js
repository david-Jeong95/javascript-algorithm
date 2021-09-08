/* 
최댓값과 최솟값

문자열 s에는 공백으로 구분된 숫자들이 저장
"최솟값 최대값"형태의 문자열 봔환

s	            return
"1 2 3 4"	    "1 4"
"-1 -2 -3 -4"	"-4 -1"
"-1 -1"	        "-1 -1"
*/
function solution(s) {
  let answer = " ";
  let newS = s.split(" ");
  let min = Math.min(...newS);
  let max = Math.max(...newS);
  return min + answer + max;
}

function solution2(s) {
  let answer = " ";
  let newS = s.split(" ");
  let min = parseInt(newS[0]);
  let max = parseInt(newS[0]);

  for (let i = 1; i < newS.length; i++) {
    if (min > parseInt(newS[i])) {
      min = newS[i];
    }
    if (max < parseInt(newS[i])) {
      max = newS[i];
    }
  }
  return min + answer + max;
}
