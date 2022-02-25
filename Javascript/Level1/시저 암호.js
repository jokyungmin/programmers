function solution(s, n) {
    var answer = "";
    for(var i = 0; i < s.length; i++){
        if(s[i] == " "){
            answer += " ";
        }else{
            var asciiCode = s[i].charCodeAt();
            asciiCode += n;

            //대문자 Z
            if(s[i].toUpperCase() == s[i]){
                if(asciiCode > 90){
                    asciiCode -= 26;
                }
            }
            
            //소문자 Z
            if(s[i].toLowerCase() == s[i]){
                if(asciiCode > 122){
                    asciiCode -= 26;
                }
            }
            answer += String.fromCharCode(asciiCode);
        }
        
        //90, 122
    }
    
    return answer;
}