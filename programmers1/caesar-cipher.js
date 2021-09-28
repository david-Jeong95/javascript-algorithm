/* 
시저 암호

s	        n	        result
"AB"	     1	        "BC"
"z"	        1	        "a"
"a B z"	      4	        "e F d"

z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
*/

function solution(s, n) {
  let answer = "";
  let low = "abcdefghijklmnopqrstuvwxyz";
  let up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    if (text === " ") {
      answer = answer + " ";
    } else {
      let textArr = up.includes(text) ? up : low; //포함되어있는지 indexOf를 사용하지 않고 includes를 사용
      let idx = textArr.indexOf(text) + n;
      if (idx >= textArr.length) {
        idx = idx - textArr.length;
      }
      answer += textArr[idx];
    }
  }
  return answer;
}
