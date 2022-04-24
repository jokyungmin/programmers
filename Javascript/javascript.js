let navigation = null;
let backButton = null;
let levelButtonWrap = null;
let levelButtons = null;

let mainArticle = null;
let mainSection = null;

let body = null;

let level = 1;
let problemKind = "javascript";

let dataObj = {
    state : true,
    title : [],
    difficulty : [],
    showProblemLink : [],
    code : [],
};

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

    body = document.querySelector('body');
    body.addEventListener('oncontextmenu', function(){
        return false;
    });

    body.addEventListener('ondragstart', function(){
        return false;
    });

    body.addEventListener('onselectstart', function(){
        return false;
    });

    ClickEvent();

    requestProblem();
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

                level = index + 1;
                requestProblem();
            }
        })(i);
    }
}

//문제 목록을 가져오는 함수
function requestProblem(){
    //모든 유효성을 통과하면 실행
    $('.loading').fadeIn();
    $.ajax({
        url: "../_server/ProblemModel.php",
        type: "post",
        dataType : 'json',
        data: {
            method: "selectProblem",
            value: {
                problemKind : problemKind,
                level : level,
            },
        },
        //통신 성공
        success: function(data){
            $('.loading').fadeOut();
            doubleClick = true;
            if(data.success){
                //쿼리 성공
                createLevelArray(data.value);
                createCard();
            }else{
                //쿼리 실패
                dbError(data.error);
            }
        },
        //통신 에러
        error: function(error){
            ajaxError(error);
        },
    });
}

function createLevelArray(data){
    dataObj = {
        state : true,
        title : [],
        difficulty : [],
        showProblemLink : [],
        code : [],
    }

    if(data.length == 0){
        dataObj.state = false;
    }
    
    for(let i = 0; i < data.length; i++){
        dataObj.title.push(data[i].title); //제목
        dataObj.difficulty.push(data[i].difficulty); //난이도
        dataObj.showProblemLink.push(data[i].showProblemLink); //문제 링크
        dataObj.code.push(data[i].code); //문제 코드
    }
}

function createCard(){
    //로딩 실행
    document.querySelector('.loading').style.display = "block";
    
    let data = dataObj;
    mainSection[level - 1].querySelector('.cardWrap').innerHTML = "";
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
                openCodeModal(data.code[j]);
            }

            mainSection[level - 1].querySelector('.cardWrap').appendChild(copy);
        }
    }else{
        var copy = document.querySelector('#wait').cloneNode(true);
        copy.id = "";
        if(mainSection[level - 1].querySelector('.wait') == null){
            mainSection[level - 1].appendChild(copy);
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

    level = Number(elem.value) + 1;
    requestProblem();
}

//귀찮으니까 나중에 정리
function openCodeModal(code){
    document.querySelector("#codeModal").style.display = "block";
    document.querySelector("#codeModalBackground").style.display = "block";

    document.querySelector("#cancelButton").onclick = function(){
        document.querySelector("#codeModal").style.display = "none";
        document.querySelector("#codeModalBackground").style.display = "none";
        document.querySelector("#code").innerHTML = "";
    }

    document.querySelector("#codeModalBackground").onclick = function(){
        document.querySelector("#codeModal").style.display = "none";
        document.querySelector("#codeModalBackground").style.display = "none";
        document.querySelector("#code").innerHTML = "";
    }

    document.querySelector("#code").innerHTML = code;
}