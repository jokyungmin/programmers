function solution(price, money, count) {
    //제한사항
    if(price < 1 || price > 2500){
        console.log(`놀이기구의 이용료 범위 초과`);
        return false;
    }
    
    if(money < 1 || money > 1000000000){
        console.log(`소유금액 초과`);
        return false;
    }
    
    if(count < 1 || count > 2500){
        console.log(`놀이기구의 이용 횟수 범위 초과`);
        return false;
    }
    
    //count수 만큼 반복하면 money에서 가격을 빼주고 ( 가격은 price * count )
    //count가 0이 되는 순간 money 값을 return
    for(var i = 1; i <= count; i++){
        money = money - ( price * i );
    }
    
    //님은 money가 0보다 크면 0을 return
    if(money > 0){
        money = 0;
    }

    return -money;
}