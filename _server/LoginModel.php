<?php 
    date_default_timezone_set('Asia/Seoul');
    include("../_database/database.php");
    include("Session.php");

    $param = $_REQUEST;
    $db = new database();
    $session = new Session();

    if(isset($param["method"])){
        if(isset($param["value"])){
            $param["method"]($param["value"]);
        }else{
            $param["method"]();
        }
    }else{
        echo "존재하지 않는 함수입니다.";
    }

    //관리자 로그인 체크 함수
    function loginCheck($param){
        $db = $GLOBALS["db"];
        $session = $GLOBALS["session"];

        $sql = "select count(*) as count, idx from admin ";
        $sql .= "where id = ".$db->nullCheck($param["id"])." ";
        $sql .= "and pw = ".$db->nullCheck($param["password"])." ";
        $result = $db->dbSelect($sql);
        if($result["success"]){
            if($result["value"][0]["count"] == 1){
                //조회되는 계정이 있으면 관리자 SESSION 생성
                $session->createSession("admin", $result["value"][0]["idx"]);
            }else{
                //일치하는 계정이 없는 경우
                $result["message"] = "일치하는 계정이 없습니다.";
            }
        }else{
            //쿼리 실패시 관리자 SESSION 제거
            $session->deleteSession("admin");
        }

        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

    //관리자 로그아웃 함수
    function logout(){
        $session = $GLOBALS["session"];
        $session->deleteSession("admin");

        echo true;
    }
?>