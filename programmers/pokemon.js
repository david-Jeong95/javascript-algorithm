function solution(nums) {
    let N = nums.length / 2
    let newArr = [];
    
    let sorted = nums.sort((a, b) => a - b);
    newArr.push(sorted[0]);

    for(let i = 1; i < sorted.length; i++){
        if(sorted[i - 1] !== sorted[i]){
            newArr.push(sorted[i])
        }
    }
    let max = newArr.length
    if(max <= N){
        return max;
    }else{
        return N;
    }
}