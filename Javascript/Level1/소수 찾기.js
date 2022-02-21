function solution(n) {
    if(n < 2 || n > 1000000){
        console.log(`n은 2이상 1000000이하의 자연수입니다.`);
        return false;
    }
    
    // 0 ~ (n + 1) index 까지 true로 채우고 0과 1은 소수가 아니므로 false로 변경
    //true가 소수, false가 소수가 아님
    //처음에는 모든 숫자가 소수라고 가정하고 소수가 아닌 숫자는 false로 변경시켜주고
    //마지막에 true의 개수를 return
    //효율성 테스트 계속 실패해서 에라토스테네스 알고리즘 사용
    var array = Array(n + 1).fill(true);
    array[0] = false;
    array[1] = false;
    
    for(var i = 2; i <= array.length; i++){
        if(array[i]){
            for(var j = i ** 2; j <= array.length; j = j + i){
                array[j] = false;
            }
        }
    }
    
    //원소의 값이 true인 원소만 반환
    array = array.filter(item => item);
    
    return array.length;
}