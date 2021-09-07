/*
소수 찾기 (완전 탐색) - 2단계

한자리 숫자가 적힌 종이 조각이 흩어져 있습니다. 흩어진 종이 조각을 붙여 소수를 몇개 만들 수 있는지?

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

numbers	return
"17"	3       [1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.
"011"	2       [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.
*/

function solution(numbers) {
  const stack = [];

  const prime = (num) => {
    const sqrt = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const makeNum = (num, idx) => {
    if (num.length === numbers.length) return;

    for (let i = 0; i < numbers.length; i++) {
      if (idx.indexOf(i) !== -1) continue;

      const newNum = num + numbers[i];

      if (stack.indexOf(parseInt(newNum)) === -1 && parseInt(newNum) >= 2) {
        const isPrime = prime(parseInt(newNum));
        if (isPrime) {
          stack.push(parseInt(newNum));
        }
      }
      makeNum(newNum, [...idx, i]);
    }
  };
  makeNum("", []);
  return stack.length;
}
