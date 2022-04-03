<?php
    date_default_timezone_set('Asia/Seoul');
    include("../_database/database.php");
    $param = $_REQUEST;
    $db = new database();

    if(isset($param["method"])){
        $param["method"]($param["value"], $db);
    }else{
        echo "존재하지 않는 함수입니다.";
    }

    //에러 발생시 에러 메세지를 DB에 저장해주는 함수
    function insertErrorMsg($param, $db){
        $sql = "insert into errorLog(errorMsg, regdate) ";
        //values
        $value = "values(";
        $value .= $db->nullCheck($param["msg"]).",";
        $value .= "now() ";
        $value .= ")";
    
        //최종 쿼리
        $sql .= $value;
        $db->dbInsert($sql);
    }
?>