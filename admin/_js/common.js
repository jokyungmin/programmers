//통신 에러시 처리
function ajaxError(error){
    console.log(error.responseText);
    alert("관리자에게 문의해주세요.");
    $('.loading').fadeOut();
}

//DB 쿼리 에러시 처리
function dbError(error){
    console.log(error);
}