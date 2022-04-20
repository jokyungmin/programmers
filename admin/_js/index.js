let idInput = null;
let passwordInput = null;
let loginButton = null;

$(document).ready(function(){
    init();
});

//ID와 비밀번호 input이 모두 빈값이 아니면
//로그인 버튼이 비활성화 ---> 활성 상태로 변경시켜주는 함수
function loginInputEvent(){
    idInput.onkeyup = function(){
        inputChangeEvent();
        inputEnterEvent();
        
    }

    passwordInput.onkeyup = function(){
        inputChangeEvent();
        inputEnterEvent();
    }
}

function inputEnterEvent(){
    if(window.event.keyCode == "13"){
        if(loginButton.className.indexOf('active') != -1){
            loginCheck();
        }
    }
}

function inputChangeEvent(){
    if(idInput.value != "" && passwordInput.value != ""){
        loginButton.classList.add('active');
    }else{
        loginButton.classList.remove('active');
    }
}

//로그인 버튼 선택시 계정이 맞는지 체크해주는 함수
function loginCheck(){
    if(doubleClick){
        doubleClick = false;
        //로딩 이미지 필요
        $('.loading').fadeIn();
        $.ajax({
            url: "../../_server/LoginModel.php",
            type: "post",
            dataType : 'json',
            data: {
                method: "loginCheck",
                value: {
                    id: idInput.value,
                    password: passwordInput.value,
                },
            },
            //통신 성공
            success: function(data){
                $('.loading').fadeOut();
                doubleClick = true;
                if(data.success){
                    //쿼리 성공
                    if(data.value[0].count == 0){
                        //일치하는 계정이 없는 경우
                        let obj = {content: data.message}
                        showAlert(obj);
                        return;
                    }

                    //일치하는 계정이 있으면 첫번째 페이지로 이동
                    location.href = "page/problem.php?kind=javascript";
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

function init(){
    idInput = document.querySelector("#id");
    passwordInput = document.querySelector("#password");
    loginButton = document.querySelector("#loginButton");

    loginInputEvent();

    loginButton.onclick = function(){
        loginCheck();
    }
}