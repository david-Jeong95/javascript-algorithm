/*
완주하지 못한 선수 (해시)

단 한명의 선수를 제외하고 모든 선수 완주

participant	completion	return
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"

완주하지 못한 선수의 이름을 return
*/
function solution(participant, completion) {
  let obj = {};
  for (let p of participant) {
    obj[p] = obj[p] ? obj[p] + 1 : 1;
  }
  for (let c of completion) {
    obj[c] -= 1;
  }
  for (let key in obj) {
    if (obj[key] !== 0) {
      return key;
    }
  }
}
