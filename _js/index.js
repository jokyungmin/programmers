let mainArticle = null;
let section = null;
let javascriptSection = null;
let pythonSection = null;
let mysqlSection = null;

window.onload = function(){
    init();
}

function sectionClickEvent(){
    for(let i = 0; i < section.length; i++){
        let imageDiv = section[i].querySelector('.imageDiv');
        imageDiv.onclick = function(){
            pageMove(i);
        }
    }
}

let minusWidthValue = 60;
let sectionArray = null;
let movePageArray = ["Javascript/javascript.html", "Python/python.html", "Mysql/mysql.html"];
function pageMove(index){
    sectionArray[index].style.position = "relative";
    setInterval(function(){
        sectionArray[index].querySelector('.imageDiv').style.width = minusWidthValue + "%";
        minusWidthValue = minusWidthValue - 0.5;
        
        //모든 요소가 사라지면 다음 페이지로 이동
        if(minusWidthValue == 0){
            location.href = movePageArray[index];
        }
    }, 1);
}

function init(){
    mainArticle = document.querySelector("#mainArticle");
    section = mainArticle.querySelectorAll('section');
    javascriptSection = document.querySelector('#javascriptSection');
    pythonSection = document.querySelector('#pythonSection');
    mysqlSection = document.querySelector('#mysqlSection');
    sectionArray = [javascriptSection, pythonSection, mysqlSection];

    sectionClickEvent();
}