function solution(n) {  
    if(n < 3 || n > 1,000,000 || !Number.isInteger(n)){
        console.log(`n은 3이상 100만 이하의 자연수`);
        return false;
    }
    
    for(var i = 1; i <= n; i++){
        if(n % i == 1){
            return i;
        }
    }
}