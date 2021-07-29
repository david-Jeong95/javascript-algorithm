function solution(d, budget) {
    let answer = 0;
    let result = 0;
    let sorted = d.sort((a, b) => a - b);

    for(let i = 0; i < sorted.length; i++){
        answer++;
        result += sorted[i]
        if(result > budget){
            answer--;
        }
    }
    return answer;
}