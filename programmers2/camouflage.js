/* 
위장 (해시)

스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의
조합의 수를 반환

clothes	                                                                                    return
[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]	5
[["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]	            3
*/

function solution(clothes) {
  let answer = 1;
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = obj[clothes[i][1]] ? obj[clothes[i][1]] + 1 : 2;
  }
  for (let key in obj) {
    answer *= obj[key];
  }
  return answer - 1;
}
