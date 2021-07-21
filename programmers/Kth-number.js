function solution(array, commands){
    let arr = [];
    for(let i = 0; i < commands.length; i++){
        let result = array.slice(commands[i][0] - 1, commands[i][1]).sort((a,b) => a - b)
        arr.push(result[commands[i][2] - 1]) // result[commands[i][2] - 1]이 아님
    }
    return arr;
}