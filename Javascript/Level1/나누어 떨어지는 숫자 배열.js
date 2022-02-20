function solution(arr, divisor) {
    //배열의 길이는 1 이상
    if(arr.length < 1){
        console.log(`배열의 길이는 1 이상인 배열입니다.`);
        return false;
    }
    
    //배열의 요소중 중복되는 수가 있는지 체크
    var arrSet = new Set(arr);
    //중복되는 요소가 있는 경우
    if(arrSet.size != arr.length){
        console.log(`배열의 요소는 중복되는 수가 들어올 수 없습니다.`);
        return false;
    }
    //나눠지는 수는 자연수만 가능
    if(!Number.isInteger(divisor) || divisor < 1){
        console.log(`나눠지는 수는 자연수만 들어올 수 있습니다.`);
        return false;
    }
    
    var result = [];
    for(var i = 0; i < arr.length; i++){
        //arr의 요소가 자연수가 아닌 경우
        if(!Number.isInteger(arr[i]) || arr[i] < 1){
            console.log(`배열의 원소는 자연수만 들어올 수 있습니다.`);
            return false;
        }
        
        if(arr[i] % divisor == 0){
            result.push(arr[i]);
        }
    }
    result.sort(function(a, b){
        return a - b;
    });
    
    if(result.length == 0){
        result.push(-1);
    }
    
    return result;
}