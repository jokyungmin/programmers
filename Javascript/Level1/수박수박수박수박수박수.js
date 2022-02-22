function solution(n) {
    if(n > 10000){
        console.log(`n의 길이는 10,000 이하인 자연수입니다.`);
        return false;
    }
    
    var answer = '';
    for(var i = 1; i <= n; i++){
        if(i % 2 == 1){
            answer += "수";
        }else{
            answer += "박";
        }
    }
    
    return answer;
}