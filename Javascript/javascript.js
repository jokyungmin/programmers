let navigation = null;
let backButton = null;
let levelButtonWrap = null;
let levelButtons = null;

let mainArticle = null;
let mainSection = null;

let LevelOneArray = {
    state : true,
    title : [
        "체육복", "2016년", "최소직사각형", "나머지가 1이되는 수 찾기", "부족한 금액 계산하기",
        "[1차] 비밀지도", "가운데 글자 가져오기", "[1차] 다트 게임", "같은 숫자는 싫어", "나누어 떨어지는 숫자 배열",
        "두 정수 사이의 합", "문자열 내 마음대로 정렬하기", "문자열 내 p와 y의 수", "문자열 내림차순으로 배치하기", "문자열 다루기 기본",
        "서울에서 김서방 찾기", "소수 찾기", "수박수박수박수박수박수?", "문자열을 정수로 바꾸기", "약수의 합",
    ],

    difficulty : [
        "2", "1", "1", "1", "1",
        "1", "1", "1", "2", "1",
        "1", "1", "1", "1", "1", 
        "1", "4", "1", "1", "1",
    ],

    showProblemLink : [
        "https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript", //체육복
        "https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript", //2016년
        "https://programmers.co.kr/learn/courses/30/lessons/86491?language=javascript", //최소직사각형
        "https://programmers.co.kr/learn/courses/30/lessons/87389?language=javascript", //나머지가 1이되는 수 찾기
        "https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript", //부족한 금액 계산하기
        "https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript", //[1차] 비밀지도
        "https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript", //가운데 글자 가져오기
        "https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript", //[1차] 다트 게임
        "https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript", //같은 숫자는 싫어
        "https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript", //나누어 떨어지는 숫자 배열
        "https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript", //두 정수 사이의 합
        "https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript", //문자열 내 마음대로 정렬하기
        "https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript", //문자열 내 p와 y의 수
        "https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript", //문자열 내림차순으로 배치하기
        "https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript", //문자열 다루기 기본
        "https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript", //서울에서 김서방 찾기
        "https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript", //소수 찾기
        "https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript", //수박수박수박수박수박수?
        "https://programmers.co.kr/learn/courses/30/lessons/12925?language=javascript", //문자열을 정수로 바꾸기
        "https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript", //약수의 합
    ],
    showCodeLink : [
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EC%B2%B4%EC%9C%A1%EB%B3%B5.js", //체육복
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/2016%EB%85%84.js", //2016년
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EC%B5%9C%EC%86%8C%20%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95.js", //최소직사각형
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EB%82%98%EB%A8%B8%EC%A7%80%EA%B0%80%201%EC%9D%B4%EB%90%98%EB%8A%94%20%EC%88%98%20%EC%B0%BE%EA%B8%B0.js", //나머지가 1이되는 수 찾기
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EB%B6%80%EC%A1%B1%ED%95%9C%20%EA%B8%88%EC%95%A1%20%EA%B3%84%EC%82%B0%ED%95%98%EA%B8%B0.js", //부족한 금액 계산하기
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%5B1%EC%B0%A8%5D%20%EB%B9%84%EB%B0%80%EC%A7%80%EB%8F%84.js", //[1차] 비밀지도
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EA%B0%80%EC%9A%B4%EB%8D%B0%20%EA%B8%80%EC%9E%90%20%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0.js", //가운데 글자 가져오기
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%5B1%EC%B0%A8%5D%20%EB%8B%A4%ED%8A%B8%20%EA%B2%8C%EC%9E%84.js", //[1차] 다트 게임
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EA%B0%99%EC%9D%80%20%EC%88%AB%EC%9E%90%EB%8A%94%20%EC%8B%AB%EC%96%B4.js", //같은 숫자는 싫어
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EB%82%98%EB%88%84%EC%96%B4%20%EB%96%A8%EC%96%B4%EC%A7%80%EB%8A%94%20%EC%88%AB%EC%9E%90%20%EB%B0%B0%EC%97%B4.js", //나누어 떨어지는 숫자 배열
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EB%91%90%20%EC%A0%95%EC%88%98%20%EC%82%AC%EC%9D%B4%EC%9D%98%20%ED%95%A9.js", //두 정수 사이의 합
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EB%AC%B8%EC%9E%90%EC%97%B4%20%EB%82%B4%20%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C%20%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0.js", //문자열 내 마음대로 정렬하기
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EB%AC%B8%EC%9E%90%EC%97%B4%20%EB%82%B4%20p%EC%99%80%20y%EC%9D%98%20%EA%B0%9C%EC%88%98.js", //문자열 내 p와 y의 수
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EB%AC%B8%EC%9E%90%EC%97%B4%20%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%20%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0.js", //문자열 내림차순으로 배치하기
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EB%AC%B8%EC%9E%90%EC%97%B4%20%EB%8B%A4%EB%A3%A8%EA%B8%B0%20%EA%B8%B0%EB%B3%B8.js", //문자열 다루기 기본
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EC%84%9C%EC%9A%B8%EC%97%90%EC%84%9C%20%EA%B9%80%EC%84%9C%EB%B0%A9%20%EC%B0%BE%EA%B8%B0.js", //서울에서 김서방 찾기
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EC%86%8C%EC%88%98%20%EC%B0%BE%EA%B8%B0.js", //소수 찾기
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98.js", //수박수박수박수박수박수?
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84%20%EC%A0%95%EC%88%98%EB%A1%9C%20%EB%B0%94%EA%BE%B8%EA%B8%B0.js", //문자열을 정수로 바꾸기
        "https://github.com/jokyungmin/programmers/blob/main/Javascript/Level1/%EC%86%8C%EC%88%98%20%EC%B0%BE%EA%B8%B0.js", //약수의 합
    ],
};

let LevelTwoArray = {state : false};
let LevelThreeArray = {state : false};
let LevelFourArray = {state : false};
let LevelFiveArray = {state : false};

let levelArray = [LevelOneArray, LevelTwoArray, LevelThreeArray, LevelFourArray, LevelFiveArray];

window.onload = function(){
    init();
}

function init(){
    navigation = document.querySelector('#navigation');
    backButton = navigation.querySelector('.backButton');
    levelButtonWrap = navigation.querySelector('.levelButtonWrap');
    levelButtons = levelButtonWrap.querySelectorAll('button');

    mainArticle = document.querySelector('#mainArticle');
    mainSection = mainArticle.querySelectorAll('section');

    ClickEvent();
    createCard();
}

function ClickEvent(){
    if(mainSection.length != levelButtons.length){
        alert("Section의 수와 버튼 배열의 수가 일치하지 않습니다.")
        return;
    }

    //home 버튼 클릭 이벤트
    backButton.onclick = function(){
        location.href = "../index.html"
    }

    //Level 버튼 클릭 이벤트
    for(let i = 0; i < levelButtons.length; i++){
        (function (index) {
            levelButtons[index].onclick = function(){
                for(let j = 0; j < levelButtons.length; j++){
                    levelButtons[j].classList.remove('active');
                    mainSection[j].style.display = "none";
                }
                levelButtons[index].classList.add('active');
                mainSection[index].style.display = "block";
            }
        })(i);
    }
}

function createCard(){
    if(mainSection.length != levelArray.length){
        alert("Section의 수와 Level 배열의 수가 일치하지 않습니다.")
        return;
    }

    //로딩 실행
    document.querySelector('.loading').style.display = "block";
    for(let i = 0; i < mainSection.length; i++){
        let data = levelArray[i];
        if(data.state){
            let cardLength = data.title.length;
            for(let j = 0; j < cardLength; j++){
                var copy = document.querySelector('#cardCopy').cloneNode(true);
                copy.id = "";

                //제목 넣어주기
                copy.querySelector('.cardTitle').innerHTML = data.title[j];

                //난이도 만큼 노란색 별 넣어주기
                let star = data.difficulty[j];
                for(let k = 1; k <= 5; k++){
                    let img = new Image();
                    if(k <= star){
                        img.src = "../_image/yellowStar.png"
                    }else{
                        img.src = "../_image/grayStar.png"
                    }

                    copy.querySelector('.cardDifficulty').appendChild(img);
                }

                //문제 이동 링크 넣어주기
                copy.querySelector('.showProblem').onclick = function(){
                    window.open(data.showProblemLink[j]);
                }

                //깃허브 이동 링크 넣어주기
                copy.querySelector('.showCode').onclick = function(){
                    window.open(data.showCodeLink[j]);
                }

                mainSection[i].querySelector('.cardWrap').appendChild(copy);
            }
        }else{
            var copy = document.querySelector('#wait').cloneNode(true);
            copy.id = "";
            mainSection[i].appendChild(copy);
        }
    }
    //로딩 끝
    document.querySelector('.loading').style.display = "none";
}

//모바일에서 레벨 select box 변경시 실행
function levelChange(elem){
    for(let i = 0; i < levelButtons.length; i++){
        levelButtons[i].classList.remove('active');
        mainSection[i].style.display = "none";
    }

    levelButtons[elem.value].classList.add('active');
    mainSection[elem.value].style.display = "block";
}