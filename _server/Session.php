<?php 
    class Session{
        private $projectName = "programmers_";

        function initSession(){
            if(!isset($_SESSION)){
                session_cache_expire(30); //세션이 유지될 시간(분)
                session_start();
            }
        }

        //key, value로 SESSION을 만들어주는 함수
        function createSession($key, $value){
            $this->initSession();
            $key = $this->projectName.$key;
            $_SESSION[$key] = $value; 
        }

        //세션 삭제 함수
        function deleteSession($key){
            $this->initSession();
            $key = $this->projectName.$key;
            unset($_SESSION[$key]);
        }
    }
?>