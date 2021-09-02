/*
가운데 글자 가져오기

단어 s의 가운데 글자를 반환하는 함수, 짝수라면 가운데 두글자 반환
*/
function solution(s) {
  if (s.length % 2 === 1) {
    let a = (s.length - 1) / 2;
    return s.slice(a, a + 1);
  } else {
    let b = s.length / 2;
    return s.slcie(b - 1, b + 1);
  }
}
