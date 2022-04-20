<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관리자 페이지</title>

    <link rel="stylesheet" href="../_css/problem.css?v=<?php echo date("H:i:s");?>">
    <link rel="stylesheet" href="../_css/modal.css?v=<?php echo date("H:i:s");?>">

    <link href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" ></script>



    <script type="text/javascript" src="../../_js/common.js?v=<?php echo date("H:i:s");?>"></script>
    <script type="text/javascript" src="../_js/problem.js?v=<?php echo date("H:i:s");?>"></script>

</head>
<body>
    <?php include_once 'modal.php';?>
    <?php include_once 'loginCheck.php';?>

    <article>
        <!-- 사이드 -->
        <aside>
            <!-- 관리자페이지 제목 -->
            <h1>프로그래머스</h1>
            <div class="buttonWrap">
                <button type="button" id="homeButton">Home</button>
                <button type="button" id="logoutButton">Logout</button>
            </div>

            <ul id="sideList">
                <li data-javascript>Javascript</li>
                <li data-mysql>Mysql</li>
                <li data-python>Python</li>
            </ul>
        </aside>

        <!-- 테이블 -->
        <section>
            <h2 id="pageName">Javascript</h2>
            <ul id="levelTab">
                <li>Level 1</li>
                <li>Level 2</li>
                <li>Level 3</li>
                <li>Level 4</li>
                <li>Level 5</li>
            </ul>
            
            <div id="tableWrap">
                <div class="buttonWrap">
                    <button type="button" id="moveUploadButton" class="uploadButton">등록</button>
                    <button type="button" id="deleteButton" class="deleteButton">삭제</button>
                </div>
                <table id="problemTable">
                    <thead>
                        <tr>
                            <td class="width5"><input type="checkbox" class="checkbox" id="allCheck"></td>
                            <td class="width5">No</td>
                            <td class="width40">제목</td>
                            <td class="width10">난이도</td>
                            <td class="width10">레벨</td>
                            <td class="width20">등록일</td>
                            <td class="width10">수정</td>
                        </tr>
                    </thead>
                    <tbody id="problemWrap">
                        
                    </tbody>
                </table>
            </div>
        </section>
    </article>

    <div id="copyArea">
        <table>
            <tr id="problemCopy">
                <td data-attr="check"><input type="checkbox" class="checkbox"></td>
                <td data-attr="number"></td>
                <td data-attr="title"></td>
                <td data-attr="difficulty"></td>
                <td data-attr="level"></td>
                <td data-attr="regdate"></td>
                <td data-attr="updateBtn"><button type="button" class="updateBtn">수정</button></td>
            </tr>

            <tr class="noPost">
                <td colspan="7">등록된 문제가 없습니다.</td>
            </tr>
        </table>
    </div>
    

    <div class="loading"><img src="../_image/loading.png" class="loading_img"></div>

    <div id="uploadModalBackground"></div>
    <div id="uploadModal">
        <form id="uploadModalForm">
            <h3>문제 등록</h3>
            <table>
                <tr>
                    <td class="width10 modalKey">제목</td>
                    <td class="width40 modalValue">
                        <input type="text" id="title">
                    </td>
                </tr>
                <tr>
                    <td class="width10 modalKey">난이도</td>
                    <td class="width40 modalValue">
                        <select id="difficulty">
                            <option value="0">선택</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="width10 modalKey">문제 링크</td>
                    <td class="width40 modalValue">
                        <input type="text" id="showProblemLink">
                    </td>
                </tr>
                <tr>
                    <td class="width10 modalKey">문제 코드</td>
                    <td class="width40 modalValue">
                        <textarea id="code"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="width10 modalKey">문제 레벨</td>
                    <td class="width40 modalValue">
                        <select id="level">
                            <option value="0">선택</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </td>
                </tr>
            </table>
        </form>
        <div class="buttonWrap">
            <button type="button" id="uploadButton" class="uploadButton">등록</button>
            <button type="button" id="cancelButton" class="cancelButton">취소</button>
        </div>
    </div>
</body>
</html>