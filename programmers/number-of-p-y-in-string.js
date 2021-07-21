function solution(s) {
    let countP = 0;
    let countY = 0;
    const S = s.toUpperCase(s);

    for(let i = 0; i < S.length; i++){
        if(S[i] === 'P'){
            countP++;
        }else if(S[i] === 'Y') {
            countY++;
        }
    }
    if(countP === countY){
        return true;
    }else {
        return false;
    }
}