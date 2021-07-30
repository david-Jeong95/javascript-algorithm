function solution(s){
    if(s.length % 2 === 1){
        let a = (s.length - 1) / 2
        return s.slice(a, a + 1);
    }else{
        let b = s.length / 2;
        return s.slcie(b - 1, b + 1)
    }
}