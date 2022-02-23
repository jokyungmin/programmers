function solution(n, arr1, arr2) {
    //1. arr1과 arr2의 숫자들을 2진수로 변경
    //2. 변경된 이진수에 맞게 2차원 배열을 생성
    //3. 두 이차원 배열을 합치고 1은 # 0은 공백으로 변경
    //4 . 결과 반환

    var result = [];
    for(var i = 0; i < n; i++){
        //arr1 배열 작업
        var binaryNumber = arr1[i].toString(2);
        if(binaryNumber.length < n){
            //2진수로 변환한 값의 길이가 n보다 작으면 그 차이만큼 앞에서부터 0을 붙여주기
            binaryNumber = "0".repeat(n - binaryNumber.length) + binaryNumber;
        }

        //arr2 배열 작업
        var binaryNumber2 = arr2[i].toString(2);
        if(binaryNumber2.length < n){
            //2진수로 변환한 값의 길이가 n보다 작으면 그 차이만큼 앞에서부터 0을 붙여주기
            binaryNumber2 = "0".repeat(n - binaryNumber2.length) + binaryNumber2;
        }
        
        var resultText = "";
        for(var j = 0; j < n; j++){
            //둘중 하나라도 1인 경우 결과 배열도 1
            //둘다 공백인 경우는 결과 배열에 공백
            if(binaryNumber[j] == 1 || binaryNumber2[j] == 1){
                resultText += "#";
            }else{
                resultText += " ";
            }
        }
        result.push(resultText);
    }

    return result;
}