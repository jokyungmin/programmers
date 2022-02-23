function solution(n) {
    if(n < 0 || n > 3000){
        console.log(`n은 0 이상 3000이하인 정수입니다.`);
        return false;
    }
    var answer = 0;
    for(var i = 1; i <= n; i++){
        if(n % i == 0){
            answer += i;
        }
    }
    
    return answer;
}