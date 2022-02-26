function solution(lottos, win_nums) {
    //lottos 배열에서 0의 수 체크
    var zeroCount = lottos.filter(value => 0 === value).length;
    var sameCount = 0; //lottos와 win_nums 배열에서 같은 수의 개수
    
    //점수에 따른 등수를 구하기 위한 object
    var gradeObject = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6,
    }
    
    //일치하는 수의 개수를 구하기
    for(var i = 0; i < lottos.length; i++){
        if(win_nums.indexOf(lottos[i]) != -1){
            sameCount++;
        }
    }
    
    //최고 순위일때 맞춘 수의 개수 ( 서로 일치하는 개수 + 0의 개수 )
    var maxCount = sameCount + zeroCount; 
    //최저 순위일때 맞춘 수의 개수
    var minCount = sameCount; 
    
    var result = [gradeObject[maxCount], gradeObject[minCount]];
    return result;
}