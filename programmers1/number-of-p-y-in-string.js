/*
문자열 내 p와 y의 개수

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
*/
function solution(s) {
  let countP = 0;
  let countY = 0;
  const S = s.toUpperCase(s);

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "P") {
      countP++;
    } else if (S[i] === "Y") {
      countY++;
    }
  }
  if (countP === countY) {
    return true;
  } else {
    return false;
  }
}
