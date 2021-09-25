/* 
124 나라의 숫자

10진법	    124 나라	    10진법	        124 나라
1	        1	            6	           14
2	        2	            7	           21
3	        4	            8	           22
4	        11	            9	           24
5	        12	            10	           41

자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.
*/

function solution(n) {
  let answer = "";
  let num = [4, 1, 2];

  while (n > 0) {
    answer = num[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return answer;
}
