function solution(s){
    //문자열 s의 길이 제한
    if(s.length < 0 || s.length > 50){
        console.log(`문자열 s의 길이는 50이하의 자연수`);
        return false;
    }
    
    //문자열 s는 알파벳으로만 이루어짐
    const regex = /^[|a-z|A-Z|]/;
    if(!regex.test(s)){
        console.log(`문자열 s는 알페벳으로만 이루어져야 함`);
        return false;
    }

    var answer = true;
    var pCount = 0;
    var yCount = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i].toUpperCase() == "P"){
            pCount++;
        }else if(s[i].toUpperCase() == "Y"){
            yCount++;
        }
    }
    
    //p와 y의 수가 다르면 false return;
    if(pCount != yCount){
        answer = false;
    }

    return answer;
}