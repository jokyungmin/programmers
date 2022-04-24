<?php 
    session_cache_expire(30); //세션이 유지될 시간(분)
    session_start();
    $projectName = "programmers_";
    //관리자 로그인 세션이 있는지 체크
    if(!isset($_SESSION[$projectName."admin"])){
        //로그인 페이지 경로
        echo "
        <script>
            showAlert({content: '관리자 로그인을 하지 않았습니다.', positiveMethod: 'moveLoginPage', positiveParam: null});
        </script>
        ";
    }
?>