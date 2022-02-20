//두 정수 사이의 합
function solution(a, b) {
    //a와 b가 같은 경우 아무 수나 리턴
    if(a == b){
        return a;
    }
    
    //a , b 범위 정의
    if(a >= -10,000,000 && a <= 10,000,000 && b >= -10,000,000 && b <= 10,000,000){
        console.log(`a와 b의 범위는 -10,000,000 이상 10,000,000 이하인 정수입니다.`);
        return false;
    }
    
    //a , b의 대소관계가 정해져 있지 않으므로 둘중 작은수 구하기
    var minNumber = a < b ? a : b;
    var maxNumber = a > b ? a : b;
    
    var answer = 0;
    for(var i = minNumber; i <= maxNumber; i++){
        answer += i;
    }
    
    return answer;
}