function solution(seoul) {
    if(seoul.length < 1 || seoul.length > 1000){
        console.log(`길이 1 이상, 1000 이하인 배열입니다.`);
        return false;
    }
    
    for(var i = 0; i < seoul.length; i++){
        if(seoul[i].length < 1 || seoul[i].length > 20){
            console.log(`원소는 길이 1 이상, 20 이하인 문자열입니다.`);
            return false;
        }
    }
    
    var index = seoul.indexOf("Kim");
    if(index == -1){
        console.log(`Kim은 반드시 seoul 안에 포함되어 있습니다.`);
        return false;
    }else{
        return "김서방은 " + index + "에 있다";
    }
}