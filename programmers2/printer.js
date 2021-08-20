function solution(priorities, loaction) {
    let target = loaction;
    let count = 0;

    while(priorities.length > 0) {
        let first = priorities.shift(); //가장 앞에 있는 문서를 추출

        //중요도가 높은 문서가 존재 시 push
        if(priorities.some((num) => num > first)){
            priorities.push(first);
        }else{
            count++;
            if(target === 0){
                return count
            }
        }
        //사용자가 선택한 문서가 중요도가 제일 높지 않은 경우 현재 대기목록의 맨 끝으로 index를 옮긴다.
        if(target === 0){
            target = priorities.length - 1;
        }else {
            target--;
        }
    }
}