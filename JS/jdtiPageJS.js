let jdtiChoice=[-1];
let currentPageNumber=0;
function jdtiNextPage(pageNumber,userChoice){
    jdtiChoice[pageNumber]=userChoice;
    let nextPageNumber=Number(pageNumber+1);
    document.getElementById("jdtiPage"+pageNumber).style.display="none";
    document.getElementById("jdtiPage"+nextPageNumber).style.display="block";
}
function resultAnalysis(){
    document.getElementById("jdtiPage7").style.display="none";
    document.getElementById("jdtiProgress").style.display="none";
    document.getElementById("jdtiResultLoading").style.display="block";
    setTimeout(()=>{
        document.getElementById("jdtiSection1").style.display="none";
        document.getElementById("jdtiSection2").style.display="block";
    }, 3000)
}
$(".jdtiOption > div > span").on("click",function(){
    setTimeout(()=>{
        $(this).attr("style","background-color:tomato ; opacity:0.5;")
    }, 250)
    setTimeout(()=>{
        let userChoiceAdj=$(this).text()[0]-1;
        console.log(userChoiceAdj)
        // 값을 0부터 저장하려고 -1
        jdtiNextPage(currentPageNumber,userChoiceAdj);
        console.log(jdtiChoice);
        currentPageNumber++;
        document.getElementById("jdtiProgress").value=currentPageNumber/7*100;
    }, 700)
})