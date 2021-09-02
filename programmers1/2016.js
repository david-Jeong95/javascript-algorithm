/*
2016년

2016년 a월 b일은 무슨 요일인지? 두 수 a,b를 입력받아 무슨 요일인지 리턴
*/
function solution(a, b) {
  let date = new Date(`2016, ${a}, ${b}`); //날짜 가져오는 메소드
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return day[date.getDay()];
}
