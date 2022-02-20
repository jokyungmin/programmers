function solution(a, b) {
    //입력 받은 파라미터에 해당하는 날짜
    var inputDate = new Date("2016-" + a + "-" + b); 
    //년도에 없는 데이터 입력하는 경우
    if(inputDate == "Invalid Date"){
        console.log(`올바른 년도 데이터가 아닙니다.`);
        return false;
    }
    
    var weekArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    //비교할 날짜
    //기준 날짜도 입력 데이터로 할 경우 고려사항
    //1 . 기준 날짜는 입력 받은 날짜보다 이전 날짜로 해야함
    //2 . 기준 날짜의 요일을 구해줘야 함
    var compareDate = new Date("2016-01-01");
    //weekArray에서 시작요일에 해당하는 index
    var startWeekIndex = compareDate.getDay();
    
    //입력 받은 날짜와 비교되는 날짜의 차이 구하기
    var differenceTime = inputDate.getTime() - compareDate.getTime();
    //ms 단위 ---> Day로 바꿔주기
    var differenceDay = Math.ceil(differenceTime / ( 1000 * 60 * 60 * 24 ));
    //입력 받은 날짜가 1월1일 기준 몇주하고 몇일이 지났는지 구하기
    var addWeek = differenceDay / 7; //문제푸는데 필요 없지만 그냥 구함
    var addWeekDay = differenceDay % 7;
    var currentWeekIndex = ( startWeekIndex + addWeekDay ) % 7;
    
    return weekArray[currentWeekIndex];
}