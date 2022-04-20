let homeButton = null;
let logoutButton = null;
let sideUl = null;
let sideLi = null;
let levelButtons = null;
let moveUploadButton = null;
let deleteButton = null;
let problemWrap = null;
let noPost = null;
let pageName = null;
let allCheck = null;

//모달
let uploadModal = null;
let uploadModalBackground = null;
let uploadButton = null;
let cancelButton = null;

//문제 종류 ( javascript, mysql, python)
let problemKind = null;

//문제 레벨 ( 1 ~ 5 )
let level = 1;

//url parameter kind에 들어가는 값
let kindParamterArray = ["javascript", "mysql", "python"];
let levelParameterArray = ["1", "2", "3", "4", "5"];

//테이블 번호
let tableNumber = 1;

//현재 체크중인 게시글의 idx 배열
let checkIndexArray = [];

$(document).ready(function(){
    init();
});

//체크박스 전체 클릭 선택시 실행
function allCheckClick(elem){
    let checkbox = document.querySelectorAll('[data-check]');
    if(elem.checked == true){
        for(let i = 0; i < checkbox.length; i++){
            checkbox[i].checked = true;
            checkIndexArray.push(checkbox[i].getAttribute('data-check'));
        }
    }else{
        for(let i = 0; i < checkbox.length; i++){
            checkbox[i].checked = false;
        }
        checkIndexArray = [];
    }
}

//게시글 체크박스 선택시 실행
function checkboxClick(elem){
    //하나라도 체크가 해제된 체크박스가 있으면 전체 체크박스 해제
    let checkbox = document.querySelectorAll('[data-check]');
    let allCheckFlag = true;
    for(let i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked == false){
            allCheckFlag = false;
            break;
        }
    }

    allCheck.checked = allCheckFlag;
    checkIndexArray.push(elem.getAttribute('data-check'));
}

//선택한 리스트에 맞는 문제 데이터를 가져오는 함수
function requestProblem(){
    //모든 유효성을 통과하면 실행
    $('.loading').fadeIn();
    $.ajax({
        url: "../../_server/ProblemModel.php",
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
                createTableData(data.value);
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

function createTableData(value){
    problemWrap.innerHTML = "";
    tableNumber = 1;
    for(let i = 0; i < value.length; i++){
        let clone = document.querySelector("#problemCopy").cloneNode(true);
        clone.style.cursor = "move";
        let attr = clone.querySelectorAll("[data-attr]");
        for(let j = 0; j < attr.length; j++){
            attr[j].classList.add(problemKind);
            if(attr[j].getAttribute('data-attr') == "check"){
                attr[j].querySelector('input').setAttribute('data-check', value[i].idx);
                attr[j].querySelector('input').onclick = function(){
                    checkboxClick(this);
                }
            }else if(attr[j].getAttribute('data-attr') == "number"){
                attr[j].innerHTML = addZeroText(tableNumber);
                tableNumber++;
            }else if(attr[j].getAttribute('data-attr') == "title"){
                attr[j].innerHTML = value[i].title;
            }else if(attr[j].getAttribute('data-attr') == "difficulty"){
                attr[j].innerHTML = "⭐".repeat(value[i].difficulty);
            }else if(attr[j].getAttribute('data-attr') == "level"){
                attr[j].innerHTML = "Level " + value[i].level;
            }else if(attr[j].getAttribute('data-attr') == "regdate"){
                attr[j].innerHTML = dateFormat(value[i].regdate, 1);
            }else if(attr[j].getAttribute('data-attr') == "updateBtn"){
                attr[j].querySelector('button').onclick = function(){
                    openUpdateModal(value[i]);
                }
            }
        }

        problemWrap.appendChild(clone);
    }

    //게시글이 하나도 없는 경우
    if(value.length == 0){
        let noPostClone = noPost.cloneNode(true);
        noPostClone.querySelector('td').classList.add(problemKind);
        problemWrap.appendChild(noPostClone);
    }

    //순서 변경과 관련된 event
    changeSequenceEvent();
}

function changeSequenceEvent(){
    $("#problemWrap").sortable({
        cursor: "move",
        update: function(){
            if(doubleClick){
                $('.loading').fadeIn();
                doubleClick = false;
                changeSequenceProblem();
            }
        }
    });
}

function changeSequenceProblem(){
    //현재 게시글 순서대로 idx 배열을 생성
    let idxArray = [];
    let tr = problemWrap.querySelectorAll('tr');
    for(let i = 0; i < tr.length; i++){
        let checkbox = tr[i].querySelector('.checkbox');
        idxArray.push(checkbox.getAttribute('data-check'));
    }

    $.ajax({
        url: "../../_server/ProblemModel.php",
        type: "post",
        dataType : 'json',
        data: {
            method: "changeSequenceProblem",
            value: {
                idxArray : JSON.stringify(idxArray),
                problemKind : problemKind,
            },
        },
        //통신 성공
        success: function(data){
            $('.loading').fadeOut();
            doubleClick = true;
            if(data.success){
                //쿼리 성공
                let obj = {content: "게시글 순서가 변경되었습니다.", positiveMethod: "requestProblem", positiveParam: null}
                showAlert(obj);
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

//왼쪽 사이드 메뉴 선택시 발생하는 이벤트
function sideListEvent(){
    //현재 선택된 li에 active 함수 추가
    document.querySelector('[data-' + problemKind + ']').classList.add('active');
    for(let i = 0; i < sideLi.length; i++){
        (function (index) {
            sideLi[index].onclick = function(){
                let linkObj = {
                    kind : kindParamterArray[index],
                    level : 1,
                }
                movePage(linkObj);
            }
        })(i);
    }
}

//레벨 버튼을 클릭시 발생하는 이벤트
function levelTabEvent(){
    //최초 접근시 첫번째 리스트가 선택된 상태
    levelButtons[level - 1].classList.add('active');

    for(let i = 0; i < levelButtons.length; i++){
        (function (index) {
            levelButtons[index].onclick = function(){
                let linkObj = {
                    kind : problemKind,
                    level : levelParameterArray[index],
                }
                movePage(linkObj);
            }
        })(i);
    }
}

//문제 등록 모달 오픈 함수
function openUploadModal(){
    uploadModal.style.display = "block";
    uploadModalBackground.style.display = "block";

    uploadButton.onclick = function(){
        uploadProblem("uploadProblem", 0);
    }
}

//문제 수정 모달 오픈 함수
function openUpdateModal(data){
    openUploadModal();

    let title = document.querySelector("#title"); //문제 제목
    let difficulty = document.querySelector("#difficulty"); //문제 난이도
    let showProblemLink = document.querySelector("#showProblemLink"); //문제 링크
    let code = document.querySelector("#code"); //문제 코드
    let level = document.querySelector("#level"); //문제 레벨

    title.value = data.title;
    difficulty.value = data.difficulty;
    showProblemLink.value = data.showProblemLink;
    code.value = data.code;
    level.value = data.level;

    uploadButton.onclick = function(){
        uploadProblem("updateProblem", data.idx);
    }
}

//문제 등록 모달 닫기 함수
function closeUploadModal(){
    uploadModal.style.display = "none";
    uploadModalBackground.style.display = "none";

    //모달을 닫을때 모달안의 value 값 초기화
    document.querySelector("#title").value = "";
    document.querySelector("#difficulty").value = 0;
    document.querySelector("#showProblemLink").value = "";
    document.querySelector("#code").value = "";
    document.querySelector("#level").value = 0;
}

//문제 등록하기 함수
function uploadProblem(method, idx){
    if(doubleClick){
        doubleClick = false;
        
        let title = document.querySelector("#title"); //문제 제목
        let difficulty = document.querySelector("#difficulty"); //문제 난이도
        let showProblemLink = document.querySelector("#showProblemLink"); //문제 링크
        let code = document.querySelector("#code"); //문제 코드
        let level = document.querySelector("#level"); //문제 레벨

        //유효성 체크
        if(title.value == ""){
            commonShowAlert("문제 제목을 입력해주세요.", title);
        }else if(difficulty.value == 0){
            commonShowAlert("문제 난이도를 선택해주세요.", null);
        }else if(showProblemLink.value == ""){
            commonShowAlert("문제 링크를 선택해주세요.", showProblemLink);
        }else if(code.value == ""){
            commonShowAlert("문제 코드를 입력해주세요.", code);
        }else if(level.value == 0){
            commonShowAlert("문제 레벨을 선택해주세요.", null);
        }else{
            //모든 유효성을 통과하면 실행
            $('.loading').fadeIn();
            $.ajax({
                url: "../../_server/ProblemModel.php",
                type: "post",
                dataType : 'json',
                data: {
                    method: method,
                    value: {
                        title: title.value,
                        difficulty: difficulty.value,
                        showProblemLink: showProblemLink.value,
                        code: code.value,
                        level: level.value,
                        problemKind : problemKind,
                        idx : idx,
                    },
                },
                //통신 성공
                success: function(data){
                    $('.loading').fadeOut();
                    doubleClick = true;
                    if(data.success){
                        //쿼리 성공
                        let obj = {content: "등록하였습니다.", positiveMethod: "movePage", positiveParam: {kind: problemKind, level: level.value}}
                        showAlert(obj);
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
    }else{
        let obj = {content: "잠시만 기다려주세요."}
        showAlert(obj);
    }
}

//문제 삭제여부 확인 함수
function deleteConfirm(){
    //선택한 게시글이 없는 경우
    if(checkIndexArray.length == 0){
        commonShowAlert("삭제할 게시글을 선택해주세요.");
    }else{
        let obj = {content: "게시글을 삭제하시겠습니까?", positiveMethod : "deleteProblem"} 
        showConfirm(obj);
    }
}

//문제 삭제 함수
function deleteProblem(){
    $('.loading').fadeIn();
    $.ajax({
        url: "../../_server/ProblemModel.php",
        type: "post",
        dataType : 'json',
        data: {
            method: "deleteProblem",
            value: {
                problemKind : problemKind,
                checkIndexArray : JSON.stringify(checkIndexArray),
            },
        },
        //통신 성공
        success: function(data){
            $('.loading').fadeOut();
            doubleClick = true;
            if(data.success){
                //쿼리 성공
                let obj = {content: "삭제하였습니다.", positiveMethod: "movePage", positiveParam: {kind: problemKind, level: level}}
                showAlert(obj);
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

function commonShowAlert(msg, elem){
    let obj = {content: msg, element : elem}
    showAlert(obj);
    doubleClick = true;
}

function firstStringUpper(text){
    let firstString = text.substring(0, 1);
    text = text.replace(firstString, firstString.toUpperCase());
    return text;
}

//url parameter에 들어가는 값이 있는지 체크하고
//없으면 초기값으로 설정
function urlParameterCheck(){
    //url kind 값이 없으면 javascript로 설정
    problemKind = undefiendCheck(param.kind, "javascript");
    //problemKind가 kindParamArray에 포함되지 않는다면 javascript로 설정
    problemKind = arrayCheck(kindParamterArray, problemKind, 'javascript');

    //url level 값이 없으면 1로 설정
    level = undefiendCheck(param.level, 1);
    //level이 1 ~ 5에 포함되지 않는 다면 1로 설정
    level = arrayCheck(levelParameterArray, level, 1);
}

function init(){
    param = getParameter();
    urlParameterCheck();

    homeButton = document.querySelector("#homeButton");
    logoutButton = document.querySelector("#logoutButton");
    sideUl = document.querySelector("#sideList");
    sideLi = sideUl.querySelectorAll('li');
    levelButtons = document.querySelector('#levelTab').querySelectorAll('li');
    moveUploadButton = document.querySelector("#moveUploadButton");
    deleteButton = document.querySelector("#deleteButton");
    problemWrap = document.querySelector("#problemWrap");
    noPost = document.querySelector("#copyArea").querySelector('.noPost');
    pageName = document.querySelector("#pageName");
    allCheck = document.querySelector("#allCheck");

    //모달
    uploadModal = document.querySelector("#uploadModal");
    uploadModalBackground = document.querySelector("#uploadModalBackground");
    uploadButton = document.querySelector("#uploadButton");
    cancelButton = document.querySelector("#cancelButton");

    //페이지 이름 설정
    pageName.innerHTML = firstStringUpper(problemKind);

    //홈페이지로 이동
    homeButton.onclick = function(){
        location.href = "../../index.html";
    }

    //로그아웃
    logoutButton.onclick = function(){
        logout();
    }

    //side 메뉴 리스트 선택시 발생하는 이벤트
    sideListEvent();

    //level Tab 버튼을 클릭시 발생하는 이벤트
    levelTabEvent();

    //등록하기 버튼 클릭시 등록 모달 오픈
    moveUploadButton.onclick = function(){
        openUploadModal();
    }

    //모달 백그라운드 클릭시 모달창 닫아주기
    uploadModalBackground.onclick = function(){
        closeUploadModal();
    }

    //삭제하기 버튼 클릭시 실행
    deleteButton.onclick = function(){
        deleteConfirm();
    }

    //모달에서 취소하기 버튼 클릭시 모달창 닫아주기
    cancelButton.onclick = function(){
        closeUploadModal();
    }

    //전체 체크를 선택한 경우 실행
    allCheck.onclick = function(){
        allCheckClick(this);
    }

    //문제 목록을 가져오는 함수
    requestProblem();
}