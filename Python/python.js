let navigation = null;
let backButton = null;
let levelButtonWrap = null;
let levelButtons = null;

let mainArticle = null;
let mainSection = null;

let LevelOneArray = {state : false};
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
                        img.src = "../image/yellowStar.png"
                    }else{
                        img.src = "../image/grayStar.png"
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