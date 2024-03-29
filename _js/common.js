let doubleClick = true;
let param = null; //Url Parameter

//통신 에러시 처리
function ajaxError(error){
    console.log(error.responseText);
    let obj = {content: "관리자에게 문의해주세요."};
    showAlert(obj);
    doubleClick = true;
    $('.loading').fadeOut();
    //에러 발생시 에러 메세지 DB에 저장
    saveErrorMsg(error.responseText);
}

//DB 쿼리 에러시 처리
function dbError(error){
    console.log(error);
    let obj = {content: "관리자에게 문의해주세요."};
    doubleClick = true;
    showAlert(obj);
    //에러 발생시 에러 메세지 DB에 저장
    saveErrorMsg(error);
}

//alert 모달을 보여주는 함수
//obj 파라미터에 들어오는 값
//title : 모달 제목
//content : 모달 내용
//btnTitle : 버튼 텍스트
//element : DOM 객체 ( 경고창 이후 focus가 필요할때 사용 )
function showAlert(obj){
    document.querySelector("#modalBg").style.display = "block";
    let alertModal = document.querySelector("#alertModal");
    alertModal.style.display = "block";

    let title = undefiendCheck(obj.title, "알림"); //모달 제목 ( 값이 없으면 기본값 "알림" )
    let content = obj.content; //모달 내용 ( 필수 값 )
    let btnTitle = undefiendCheck(obj.btnTitle, "확인"); //모달 버튼 텍스트 ( 값이 없으면 기본값 "확인" )
    let positiveMethod = obj.positiveMethod; //모달 버튼을 눌렀을때 실행되는 함수명 ( 없으면 Null )
    let positiveParam = obj.positiveParam; //함수가 실행될때 같이 전달되는 파라미터 ( 없으면 Null )
    let element = obj.element;

    document.querySelector("#alertTitle").innerHTML = title;
    document.querySelector("#alertContent").innerHTML = content;
    let alertButton = document.querySelector("#alertButton");
    alertButton.innerHTML = btnTitle;

    alertButton.onclick = function(){
        hideModal(alertModal); //버튼 선택히 모달창 닫기
        //모달창을 닫을때 element 객체가 있으면 focus
        if(element != null){
            element.focus();
        }

        //모달창을 닫을때 positiveMethod가 Null이 아니면 method 실행
        if(positiveMethod != null){
            if(positiveParam != null){
                eval(positiveMethod + "(" + JSON.stringify(positiveParam) + ");");
            }else{
                eval(positiveMethod + "();");
            }
        }
    }
}


//confirm 모달을 보여주는 함수
//obj 파라미터에 들어오는 값
//title : 모달 제목
//content : 모달 내용
//element : DOM 객체 ( 경고창 이후 focus가 필요할때 사용 )
function showConfirm(obj){
    document.querySelector("#modalBg").style.display = "block";
    let confirmModal = document.querySelector("#confirmModal");
    confirmModal.style.display = "block";

    let title = undefiendCheck(obj.title, "알림"); //모달 제목 ( 값이 없으면 기본값 "알림" )
    let content = obj.content; //모달 내용 ( 필수 값 )
    let firstBtnTitle = undefiendCheck(obj.firstBtnTitle, "확인"); //모달 첫번째 버튼 텍스트 ( 값이 없으면 기본값 "확인" )
    let secondBtnTitle = undefiendCheck(obj.secondBtnTitle, "취소"); //모달 두번째 버튼 텍스트 ( 값이 없으면 기본값 "취소" )
    let positiveMethod = obj.positiveMethod; //첫번째 모달 버튼을 눌렀을때 실행되는 함수명 ( 없으면 Null )
    let positiveParam = obj.positiveParam; //함수가 실행될때 같이 전달되는 파라미터 ( 없으면 Null )
    let negativeMethod = obj.negativeMethod; //두번째 모달 버튼을 눌렀을때 실행되는 함수명 ( 없으면 Null )
    let negativeParam = obj.negativeParam; //함수가 실행될때 같이 전달되는 파라미터 ( 없으면 Null )
    let element = obj.element;

    //컨펌 모달 각 버튼 관련 이벤트
    document.querySelector("#confirmTitle").innerHTML = title;
    document.querySelector("#confirmContent").innerHTML = content;
    let firstConfirmButton = document.querySelector("#firstConfirmButton");
    firstConfirmButton.innerHTML = firstBtnTitle;
    let secondConfirmButton = document.querySelector("#secondConfirmButton");
    secondConfirmButton.innerHTML = secondBtnTitle;

    //첫번째 버튼 클릭시
    firstConfirmButton.onclick = function(){
        hideModal(confirmModal); //버튼 선택히 모달창 닫기
        //모달창을 닫을때 element 객체가 있으면 focus
        if(element != null){
            element.focus();
        }

        //모달창을 닫을때 positiveMethod가 Null이 아니면 method 실행
        if(positiveMethod != null){
            if(positiveParam != null){
                eval(positiveMethod + "(" + JSON.stringify(positiveParam) + ");");
            }else{
                eval(positiveMethod + "();");
            }
        }
    }

    //두번째 버튼 클릭시
    secondConfirmButton.onclick = function(){
        hideModal(confirmModal); //버튼 선택히 모달창 닫기
        //모달창을 닫을때 element 객체가 있으면 focus
        if(element != null){
            element.focus();
        }

        //모달창을 닫을때 positiveMethod가 Null이 아니면 method 실행
        if(negativeMethod != null){
            if(negativeParam != null){
                eval(negativeMethod + "(" + JSON.stringify(negativeParam) + ");");
            }else{
                eval(negativeMethod + "();");
            }
        }
    }
}

function hideModal(elem){
    document.querySelector("#modalBg").style.display = "none";
    elem.style.display = "none";
}

//넘겨받은 첫번째 파라미터가 있는지 체크하여 있으면 그대로 return, 없으면 두번째 파라미터 return
function undefiendCheck(text, returnText){
    if(text == undefined){
        return returnText;
    }
    return text;
}

//넘겨 받은 배열에 두번째 파라미터가 있는지 체키하여 있으면 두번째 파라미터, 없으면 세번째 파라미터 return
function arrayCheck(array, compareValue, basicValue){
    if(array.indexOf(compareValue) == -1){
        return basicValue;
    }
    return compareValue;
}

function saveErrorMsg(msg){
    $.ajax({
        url: "../../_server/ErrorModel.php",
        type: "post",
        dataType : 'json',
        data: {
            method: "insertErrorMsg",
            value: {
                msg: msg,
            },
        },
    });
}

//관리자 페이지 이동 함수
//넘겨 받은 값들을 전부 url에 &와 함께 붙여서 이동
function movePage(obj){
    var link = "?";
    for(var key in obj){
        link += "&" + key + "=" + obj[key];
    }

    location.href = link;
}

function moveLoginPage(){
    location.href = "../index.php";
}

function reload(){
    location.reload();
}

function showAlertLink(param){
    location.href = param.link;
}

//관리자 페이지 로그아웃 함수
function logout(){
    if(doubleClick){
        doubleClick = false;
        //로딩 이미지 필요
        $('.loading').fadeIn();
        $.ajax({
            url: "../../_server/LoginModel.php",
            type: "post",
            dataType : 'json',
            data: {
                method: "logout",
            },
            //통신 성공
            success: function(data){
                if(data){
                    $('.loading').fadeOut();
                    doubleClick = true;
                    let obj = {content: "로그아웃하였습니다.", positiveMethod: "showAlertLink", positiveParam: {link: "../index.php"}}
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
    }else{
        let obj = {content: "잠시만 기다려주세요."}
        showAlert(obj);
    }
}

//현재 url에 해당하는 모든 key, value를 object 형식으로 반환해주는 함수
function getParameter(){
    let param = location.href.split("?");
    let result = {};
    if(param.length > 1){
        const urlParams = new URLSearchParams("?" + param[1]);
        const entries = urlParams.entries();
        
        for(const entrie of entries){
            result[entrie[0]] = entrie[1];
        }
    }
    
    return result;
}

//숫자의 크기가 10보다 작으면 앞에 0를 붙여주고 return해주는 함수
function addZeroText(number){
    if(number < 10){
        return "0" + number;
    }
    return number;
}

//날짜 형식 format 함수
function dateFormat(date, type){
    let addText = "";
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);

    if(type == 1){
        addText = "-";
    }else if(type == 2){
        addText = ".";
    }

    return year + addText + month + addText + day;
}