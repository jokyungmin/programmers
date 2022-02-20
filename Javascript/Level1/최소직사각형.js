//최소 직사각형
function solution(sizes) {
    //제한조건에 맞지 않는 경우
    if(sizes.length < 1 || sizes.length > 10000){
        console.log(`sizes의 길이는 1 이상 10,000 이하입니다.`);
        return false;
    }
    
    //2차원 배열에서 가로, 세로를 생각하지 않고 가장큰 수를 구함 ---> 이게 가로길이가 될거임
    var maxWidth = 0;
    for(var i = 0; i < sizes.length; i++){
        for(var j = 0; j < sizes[i].length; j++){
            //제한조건에 맞지 않는 경우
            if(sizes[i][j] < 1 || sizes[i][j] > 1000 || !Number.isInteger(sizes[i][j])){
                console.log(`가로 또는 세로길이는 1 이상 10,00 이하입니다.`);
                return false;
            }
            
            if(maxWidth <= sizes[i][j]){
                maxWidth = sizes[i][j];
            }
        }
    }
    //2차원 배열의 각 배열의 가장 작은 수중에서 가장 큰 수를 구함 ---> 이게 세로길이가 될거임
    var maxHeight = 0;
    for(var i = 0; i < sizes.length; i++){
        var currentHeight = maxWidth;
        for(var j = 0; j < sizes[i].length; j++){
            if(currentHeight > sizes[i][j]){
                currentHeight = sizes[i][j];
            }
        }
        
        if(maxHeight <= currentHeight){
            maxHeight = currentHeight;
        }
    }
    
    return maxWidth * maxHeight;
}