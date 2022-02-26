function solution(s) {
    //문자열 s의 포함된 영문을 숫자로 바꿀때 사용할 object
    var numberObject = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
    }
    
    //key값을 가져옴 ( zero ~ nine )
    var numberKeys = Object.keys(numberObject);
    for(var i = 0; i < numberKeys.length; i++){
        var index = s.indexOf(numberKeys[i]);
        //문자열 s에 zero ~ nine 문자가 포함되어 있으면
        //key에 대응하는 value 값으로 치환
        if(index != - 1){
            s = s.replace(numberKeys[i], numberObject[numberKeys[i]]);
            i--;
        }
    }
    
    return Number(s)
}