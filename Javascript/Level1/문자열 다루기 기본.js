function solution(s) {
    if(s.length < 1 || s.length > 8){
        console.log(`s는 길이 1 이상, 길이 8 이하인 문자열입니다.`);
        return false;
    }
    
    var regex = /[^0-9]/g;
    if(s.length == 4 || s.length == 6){
        if(regex.test(s)){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}