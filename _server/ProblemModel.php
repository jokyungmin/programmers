<?php 
    date_default_timezone_set('Asia/Seoul');
    include("../_database/database.php");

    $param = $_REQUEST;
    $db = new database();

    if(isset($param["method"])){
        if(isset($param["value"])){
            $param["method"]($param["value"]);
        }else{
            $param["method"]();
        }
    }else{
        echo "존재하지 않는 함수입니다.";
    }

    //문제 등록 함수
    function uploadProblem($param){
        $db = $GLOBALS["db"];
        $tableName = $param["problemKind"];

        $sql = "insert into $tableName(title, difficulty, showProblemLink, code, level, regdate) values(";
        $sql .= $db->nullCheck($param["title"]).",";
        $sql .= $param["difficulty"].",";
        $sql .= $db->nullCheck($param["showProblemLink"]).",";
        $sql .= $db->nullCheck($param["code"]).",";
        $sql .= $param["level"].",";
        $sql .= "now())";
        $result = $db->dbInsert($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

    //문제 수정 함수
    function updateProblem($param){
        $db = $GLOBALS["db"];
        $tableName = $param["problemKind"];

        $sql = "update $tableName set ";
        $sql .= "title = ".$db->nullCheck($param["title"]).",";
        $sql .= "difficulty = ".$param["difficulty"].",";
        $sql .= "showProblemLink = ".$db->nullCheck($param["showProblemLink"]).",";
        $sql .= "code = ".$db->nullCheck($param["code"]).",";
        $sql .= "level = ".$param["level"]." ";
        $sql .= "where idx = ".$param["idx"]." ";
        $result = $db->dbUpdate($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

    //문제 삭제 함수
    function deleteProblem($param){
        $db = $GLOBALS["db"];
        $tableName = $param["problemKind"];

        $idxArray = json_decode($param["checkIndexArray"], true);
        $sql = "delete from $tableName where idx = ";
        for($i = 0; $i < count($idxArray); $i++){
            if($i == 0){
                $sql .= $idxArray[$i];
            }else{
                $sql .= " or idx = ".$idxArray[$i];
            }
        }
        $result = $db->dbDelete($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

    //문제 순서 변경 함수
    function changeSequenceProblem($param){
        $db = $GLOBALS["db"];
        $tableName = $param["problemKind"];

        $idxArray = json_decode($param["idxArray"], true);
        for($i = 0; $i < count($idxArray); $i++){
            $sql = "update $tableName set ";
            $sql .= "seq = ".($i + 1)." ";
            $sql .= "where idx = ".$idxArray[$i];
            $result = $db->dbUpdate($sql);
        }
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

    //문제 목록을 가져오는 함수
    function selectProblem($param){
        $db = $GLOBALS["db"];
        $tableName = $param["problemKind"];

        $sql = "select * from $tableName ";
        $sql .= "where level = ".$param["level"]." ";
        $sql .= "order by seq asc, regdate desc ";
        $result = $db->dbSelect($sql);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
?>