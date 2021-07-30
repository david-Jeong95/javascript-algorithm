function solution(absolutes, signs){
    let sum = 0;
    for(let i = 0; i < signs.length; i++){
        if(signs[i]){
            signs[i] = 1
        }else{
            signs[i] = -1
        }
        sum += absolutes[i] * signs[i]
    }
    return sum
}