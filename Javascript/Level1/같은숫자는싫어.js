//같은 숫자는 싫어
function solution(arr){
    if(arr.length < 1 || arr.length > 1,000,000){
        console.log(`배열의 크기는 1,000,000 이하의 자연수`);
        return false;
    }
    
    //splice로 처리했을때 효율성 테스트 실패하는 이유
    //배열 길이가 10000개라 쳤을때 splice로 0번째 index의 값을 지워주면
    //전부 한칸씩 앞으로 이동해야되서 9999번의 작업이 이루어짐
    //조건에 배열 최대 길이가 1,000,000인데 spice로 처리시 엄청난 연산이 이루어지므로
    //다른방법으로 처리해줘야 함
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0 || arr[i] > 9 || !Number.isInteger(arr[i])){
            console.log(`배열의 원소는 0보다 크거나 같고 9보다 작거나 같은 정수`);
            return false;
        }
        
        if(arr[i] != arr[i + 1]){
            result.push(arr[i]);
        } 
    }
    
    return result;
}