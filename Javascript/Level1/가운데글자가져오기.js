function solution(s) {
    if(s.length < 1 || s.length > 100){
        console.log(`문자열의 길이는 1이상 100이하인 문자열로 입력해주세요.`);
        return false;
    }
    
    var answer = '';
    var length = s.length / 2;
    //문자열이 짝수인 경우
    //결과가 자연수면 짝수
    if(Number.isInteger(length)){
        answer = s[length - 1] + s[length];
    }
    //문자열이 홀수인 경우
    else{
        answer = s[parseInt(length)];
    }
    return answer;
}