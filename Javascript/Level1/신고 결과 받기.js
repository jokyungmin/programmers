function solution(id_list, report, k) {
    var mailCountObject = {}; //메일을 전송 받을 횟수 저장 객체
    var reportCountObject = {}; //신고받은 횟수 저장 객체
    var stopIdArray = []; //정지되는 아이디 리스트
    
    //각 ID 리시트를 객체에 저장
    for(var i = 0; i < id_list.length; i++){
        mailCountObject[id_list[i]] = 0;
        reportCountObject[id_list[i]] = 0;
    }
    
    //같은 사람이 동일한 유저에게 신고한 횟수는 1회로 처리되므로
    //report 배열에서 중복되는 데이터는 제거
    var setReport = new Set(report);
    //... 문법으로 배열로 변환해서 저장
    report = [...setReport];
    
    //신고횟수가 k번이된 user ID를 stopIdArray 배열에 push
    for(var i = 0; i < report.length; i++){
        var array = report[i].split(" "); //0번째가 신고한 사람, 1번째가 신고당한 사람
        reportCountObject[array[1]]++;
        
        if(reportCountObject[array[1]] == k){
            stopIdArray.push(array[1]);
        }
    }
    
    //mailCountObject에서 stopIdArray에 포함된 값과 일치하는
    //key값의 value를 증가시켜줌 
    for(var i = 0; i < report.length; i++){
        var array = report[i].split(" "); //0번째가 신고한 사람, 1번째가 신고당한 사람
        //배열에 포함되는 경우
        if(stopIdArray.indexOf(array[1]) != -1){
            mailCountObject[array[0]]++;
        }   
    }
    
    //메일을 받는 횟수가 담긴 object의 value 값만 가져와서 배열로 저장
    var result = Object.values(mailCountObject);
    return result;
}