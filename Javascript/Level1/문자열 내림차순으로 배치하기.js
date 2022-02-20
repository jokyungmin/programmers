function solution(s) {
    if(s.length < 1){
        console.log(`문자열의 길이는 1이상입니다.`);
        return false
    }
    
    //아스키코드는 대문자가 소문자보다 낮아서 내림차순으로만 정렬하면 해결 
    var array = s.split("").sort(); //문자열을 배열로 바꾸고 오름차순으로 정렬
    array = array.reverse().join(""); //정렬한 결과를 다시 내림차순으로 변경후 문자열로 변경
    return array;
}