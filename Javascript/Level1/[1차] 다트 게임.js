function solution(dartResult) {
    var result = 0;
    var currentNumber = 0;
    var numberFlag = true;
    var scoreArray = [];
    //문자열을 for문으로 돌면서 scoreArray에 점수를 담아주고
    //스타상이나 아차상이 나오면 담겨져 있는 점수와 계산해준 뒤
    //마지막에 scoreArray에 있는 모든 점수의 합을 return
    for(var i = 0; i < dartResult.length; i++){
        if(isNaN(Number(dartResult[i]))){
            numberFlag = true;
            
            var length = scoreArray.length;
            
            //싱글 ---> 점수에서 1제곱
            if(dartResult[i] == "S"){
                scoreArray.push(currentNumber);
            }
            //더블 ---> 점수에서 제곱
            else if(dartResult[i] == "D"){
                scoreArray.push(currentNumber ** 2);
            }
            //트리플 ---> 점수에서 세제곱
            else if(dartResult[i] == "T"){
                scoreArray.push(currentNumber ** 3);
            }
            //스타상
            //첫번째 점수에 붙으면 해당 점수만 2배
            //두번째 이상에 붙으면 해당 점수와 이전 점수를 2배
            //2개가 등장하면 이전 점수는 중첩되어 4배
            else if(dartResult[i] == "*"){
                //* 바로 앞 점수와 그 전 점수를 2배로 해준다
                //* 이 첫번째 점수에 나오는 경우가 있기 때문에 length가 1 이상인 경우만 그 전 점수 계산해주기
                scoreArray[length - 1] = scoreArray[length - 1] * 2;
                if(length > 1){
                    scoreArray[length - 2] = scoreArray[length - 2] * 2;    
                }
            }
            //아차상
            //-1배이며 뒤에 스타상이 있으면 2배 효과도 같이 받는다
            else if(dartResult[i] == "#"){
                //# 바로 앞 점수를 -1배
                scoreArray[length - 1] = scoreArray[length - 1] * -1;
            }
        }else{
            //숫자가 한자리수가 아니라 두자리수가 들어올 수 있으므로
            //flag를 줘서 두번 연속 else문으로 들어오면 이전 숫자와 현재 숫자를 합친 숫자를
            //currentNumber에 넣어주고 계산해주기
            if(numberFlag){
                currentNumber = Number(dartResult[i]);  
                numberFlag = false;
            }else{
                currentNumber = Number(dartResult[i - 1] + dartResult[i]);
            }
        }
    }
    
    for(var i = 0; i < scoreArray.length; i++){
        result += scoreArray[i];
    }
    
    return result;
}