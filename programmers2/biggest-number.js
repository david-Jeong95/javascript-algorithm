function solution(numbers) {
    let answer = numbers.map(e => e + '').sort((a, b) => (b + a) - (a + b)).join('');
    /* 
    1. numbers.map => 각 숫자들을 문자로 변환 (1 => '1')
    2. sort((a, b) => (b+a)-(a+b)) = 문자로 변환된 숫자를 연결하여 비교정렬 ('3', '30' => ('303')- ('330'))
    3. join('') = 문자열 합치기
    4. numbers 배열이 0으로만 구성되어 있을 경우 '0'만 출력
    */
    return answer[0] === '0' ? '0' : answer
}