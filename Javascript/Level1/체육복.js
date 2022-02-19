function solution(n, lost, reserve) {
    //문제 기본적인 제한사항에 해당하지 않는 경우
    //n이 2이상 30이하가 아닌경우
    if(n < 2 || n > 30){
        console.log(`전체 학생의 수는 2명 이상 30명 이하입니다.`);
        return false;
    }
    //lost, reserve 배열의 길이는 1이상 n이하이며 중복되는 숫자는 없어야 함
    if(lost.length < 1 || lost.length > n || reserve.length < 1 || reserve.length > n){
        console.log(`lost 배열과 reserve 배열의 길이는 1이상 ${n}이하로 넣어주세요.`);
        return false;
    }
    
    //lost, reserve 배열에 들어가는 값은 중복값이 있으면 안됨
    //set.size는 중복된 값을 제외한 길이를 알려주므로 배열 길이랑 다르면 중복된 값이 있는 경우
    var lostSet = new Set(lost);
    var reserveSet = new Set(reserve);
    if(lostSet.size != lost.length || reserveSet.size != reserve.length){
        console.log(`배열에 중복된 값이 들어가 있습니다.`);
        return false;
    }
    
    //초기값은 총인원수에서 체육복을 잃어버린 학생수만큼 뺀 값
    var answer = n - lost.length;
    
    //1 . 여벌 체육복을 가져온 학생이 체육복을 도난당한 학생인지 확인 ---> 해당 경우는 체육복을 빌려줄 수 가 없음
    for(var i = 0; i < reserve.length; i++){
        //도난당한 학생 배열에 여벌 체육복을 소유중인 학생이 포함되어 있으면
        //해당 학생 번호를 각 배열에서 제외시켜준다.
        if(lost.includes(reserve[i])){
            var deleteIndex = lost.indexOf(reserve[i]);
            lost.splice(deleteIndex, 1);
            reserve.splice(i, 1);
            i--;
            answer++;
        }
    }
    
    //lost와 reserve 배열을 내림차순으로 정렬 시켜준다
    //예시로 n = 5 , lost = [3, 1] , reserve = [2, 4]의 경우
    //2번이 1번을 빌려주고 4번이 3번을 빌려줄 수 있어 return은 5가 되어야 하지만
    //정렬을 하지 않으면 reserve의 2가 lost의 3한테 빌려주고 lost = [1], reserve = [4]만 남게되어
    //최댓값을 반환하지 않게되므로 두 배열을 정렬해주고 해야 알맞은 반환값이 나옴
    //정렬하지 않은 경우 테스트 13, 18번에서 계속 실패
    //실패한 예제 안알려줘서 실패 예제 찾는데 30분 넘게 걸림
    //프로그래머스 실패 케이스 알려주세요
    lost = lost.sort(function(a, b){
        return a-b; 
    });
    
    reserve = reserve.sort(function(a, b){
        return a-b; 
    });
    
    //2 . 도난 당한 배열과 여벌 체육복 배열을 2중 for문으로 비교하며 체육복을 빌려줄 수 있는 학생수 구하기
    for(var i = 0; i < reserve.length; i++){
        for(var j = 0; j < lost.length; j++){
            //여벌 체육복을 가져온 학생 번호의 앞번호 또는 뒷번호인 경우 빌려줄 수 있음
            if(reserve[i] - 1 == lost[j] || reserve[i] + 1 == lost[j]){
                //한명이 여러명에게 체육복을 빌려줄 수 없으므로
                //카운트가 끝나면 해당하는 학생을 배열에서 제외시켜 준다.
                reserve.splice(i, 1);
                i--;
                lost.splice(j, 1);
                j--; 
                answer++;
            }
        }
    }
    
    return answer;
}