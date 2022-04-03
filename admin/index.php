<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관리자 페이지</title>
    <link rel="stylesheet" href="_css/index.css?v=<?php echo date("H:i:s");?>">
    <link rel="stylesheet" href="_css/modal.css?v=<?php echo date("H:i:s");?>">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="_js/common.js?v=<?php echo date("H:i:s");?>"></script>
    <script type="text/javascript" src="_js/index.js?v=<?php echo date("H:i:s");?>"></script>
</head>
<body>
    <?php include_once 'page/modal.php';?>
    <article id="loginArticle">
        <form id="loginForm">
            <h1>관리자 로그인</h1>
            <div id="inputWrap">
                <input type="text" name="id" placeholder="ID 입력" autocomplete="off" id="id">
                <input type="password" name="password" placeholder="비밀번호 입력" autocomplete="off" id="password">
            </div>
            <div id="buttonWrap">
                <button type="button" id="loginButton">Login</button>
            </div>
        </form>
    </article>
    <footer style="position: fixed; bottom: 10px; left: 50%;">
        <a href='https://kr.freepik.com/vectors/background' target="_black">Background 벡터는 freepik - kr.freepik.com가 제작함</a>
    </footer>

    <div class="loading"><img src="_image/loading.png" class="loading_img"></div>
</body>
</html>