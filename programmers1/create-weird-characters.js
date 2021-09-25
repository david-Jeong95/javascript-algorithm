/* 
이상한 문자 만들기

s	                    return
"try hello world"	    "TrY HeLlO WoRlD"

"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
*/
function solution(s) {
  let answer = "";
  let newS = s.split(" ");

  for (let i = 0; i < newS.length; i++) {
    let result = "";
    for (let j = 0; j < newS[i].length; j++) {
      if (j === 0) {
        result += newS[i][j].toUpperCase();
      } else if (j % 2 === 1) {
        result += newS[i][j].toLowerCase();
      } else {
        result += newS[i][j].toUpperCase();
      }
    }
    if (i === 0) {
      answer += result;
    } else {
      answer += " " + result;
    }
  }
  return answer;
}
