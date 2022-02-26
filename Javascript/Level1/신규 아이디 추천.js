function solution(new_id) {
    //1단계 : 대문자를 소문자로 치환
    new_id = new_id.toLowerCase();
    //2단계 : 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 문자 제거
    new_id = new_id.replace(/[^-._a-z0-9]+/g,'');
    //3단계 : 마침표가 2개 이상이면 1개로 변경
    new_id = new_id.replace(/\.+/g,'.');
    //4단계 : 마침표가 처음이나 끝에 위치하면 제거
    if(new_id[0] == "."){
        new_id = new_id.substring(1, new_id.length);
    }
    
    if(new_id[new_id.length - 1] == "."){
        new_id = new_id.substring(0, new_id.length - 1);
    }
    
    //5단계 : new_id가 빈 문자열이면 a로 변경\
    if(new_id == ""){
        new_id = "a";
    }
    
    //6단계 : new_id의 길이가 16자 이상이면 처음부터 15개를 제외한 나머지 문자들은 제거하고
    //제거후 제일 마지막 문자가 마침표(.)면 제거
    if(new_id.length >= 16){
        new_id = new_id.substring(0, 15);
        if(new_id[new_id.length - 1] == "."){
            new_id = new_id.substring(0, new_id.length - 1);
        }
    }
    
    //7단계 : new_id의 길이가 2자 이하라면 new_id의 마지막 문자를 new_id의 길이가 3이 될때까지 반복
    if(new_id.length <= 2){
        var lastChar = new_id[new_id.length - 1];
        while(new_id.length < 3){
            new_id += lastChar;
        }
    }
    
    return new_id;
}