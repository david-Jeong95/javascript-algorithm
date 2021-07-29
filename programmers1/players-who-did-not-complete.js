function solution(participant, completion){
    let obj = {};
    for(let p of participant){
        obj[p] = obj[p] ? obj[p] + 1 : 1 
    }
    for(let c of completion){
        obj[c] -= 1
    }
    for(let key in obj){
        if(obj[key] !== 0){
            return key
        }
    }
}