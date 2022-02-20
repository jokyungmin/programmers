//문자열 내 마음대로 정렬하기
function solution(strings, n) {
    //strings 배열 길이 제한
    if(strings.length < 1 || strings.length > 50){
        console.log(`strings 배열의 길이는 1 이상 50 이하입니다.`);
        return false;
    }

    //제한 조건 검사
    for(var i = 0; i < strings.length; i++){
        //strings 배열은 소문자 알파벳으로 이루어져 있음
        if(!lowerCaseCheck(strings[i])){ //대문자가 포함된 경우
            console.log(`strings의 원소는 소문자 알파벳으로 이루어져 있습니다.`);
            return false;
        }

        // strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
        if(strings[i].length < 1 || strings[i].length > 100){
            console.log(`strings의 원소는 길이 1 이상, 100이하인 문자열입니다.`);
            return false;
        }

        // strings 배열 각 원소의 길이는 n 보다 큼
        if(strings[i].length <= n){
            console.log(`strings 배열 각 원소의 길이는 n 보다 큼`);
            return false;
        }
    }

    //넘겨받은 문자열이 소문자로만 이루어져 있으면 true 반환
    function lowerCaseCheck(str){
        for(var i = 0; i < str.length; i++){
            //문자열중에 대문자가 하나라도 포함된 경우 return false
            if(str[i] == str.toUpperCase()){
                return false;
            }
        }
        return true;
    }

    //해당 인덱스의 문자가 같은 문자면 사전순으로 정렬
    var answer = [];
    for(var i = 0; i < strings.length - 1; i++){
        var compareData = strings[i][n];
        var currentIndex = 0;
        for(var j = 1; j < strings.length; j++){
            if(compareData > strings[j][n]){
                compareData = strings[j][n];
                currentIndex = j;
            }else if(compareData == strings[j][n]){
                if(strings[currentIndex] > strings[j]){
                    compareData = strings[j][n];
                    currentIndex = j;
                }
            }
        }
        answer.push(strings[currentIndex]);
        strings.splice(currentIndex, 1);
        i--;
    }
    answer.push(strings[0]);
    return answer;
}