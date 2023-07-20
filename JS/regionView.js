function colorReset() {
    var seoul = document.getElementById("seoulTag");
    var gangwon = document.getElementById("gangwonTap");
    var chungnam = document.getElementById("chungnamTap");
    var chungbuk = document.getElementById("chungbukTap");
    var gyeongnam = document.getElementById("gyeongnamTap");
    var gyeongbuk = document.getElementById("gyuongbukTap");
    var jeonnam = document.getElementById("jeonnamTap");
    var jeonbuk = document.getElementById("jeonbukTap");
    var jeju = document.getElementById("jejuTap");

    seoul.style.backgroundColor="#A1CCD1"
    seoul.style.border="3px solid #A1CCD1"

    gangwon.style.backgroundColor="#A1CCD1"
    gangwon.style.border="3px solid #A1CCD1"

    chungnam.style.backgroundColor="#A1CCD1"
    chungnam.style.border="3px solid #A1CCD1"

    chungbuk.style.backgroundColor="#A1CCD1"
    chungbuk.style.border="3px solid #A1CCD1"

    gyeongnam.style.backgroundColor="#A1CCD1"
    gyeongnam.style.border="3px solid #A1CCD1"

    gyeongbuk.style.backgroundColor="#A1CCD1"
    gyeongbuk.style.border="3px solid #A1CCD1"

    jeonbuk.style.backgroundColor="#A1CCD1"
    jeonbuk.style.border="3px solid #A1CCD1"

    jeonnam.style.backgroundColor="#A1CCD1"
    jeonnam.style.border="3px solid #A1CCD1"

    jeju.style.backgroundColor="#A1CCD1"
    jeju.style.border="3px solid #A1CCD1"
}

// function cl(img, color){

// }

function clickSeoul() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/서울.png"
    document.getElementById("subimg").src = "./image/강원.png"

    var a = document.getElementById("seoulTag");
    a.style.backgroundColor="red"
    a.style.border="3px solid red"
}

function clickGangwon() {
    colorReset();
    
    document.getElementById("mainimg").src = "./우리나라 지도 모음/강원도.png"
    document.getElementById("subimg").src = "./image/강원.png"

    var a = document.getElementById("gangwonTap");
    a.style.backgroundColor="#0030ff"
    a.style.border="3px solid #0030ff"
}

function clickChungnam() {
    colorReset();
    
    document.getElementById("mainimg").src = "./우리나라 지도 모음/충청남도.png"
    document.getElementById("subimg").src = "./image/강원.png"

    var a = document.getElementById("chungnamTap");
    a.style.backgroundColor="#00a83f"
    a.style.border="3px solid #00a83f"
}

function clickChungbuk() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/충청북도.png"
    document.getElementById("subimg").src = "./image/강원.png"

    var a = document.getElementById("chungbukTap");
    a.style.backgroundColor="#edbe00"
    a.style.border="3px solid #edbe00"
}

function clickGyeongnam() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/경상남도.png"
    document.getElementById("subimg").src = "./image/강원.png"

    var a = document.getElementById("gyeongnamTap");
    a.style.backgroundColor="#7000ee"
    a.style.border="3px solid #7000ee"
}

function clickGyeongbuk() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/경상북도.png"
    document.getElementById("subimg").src = "./image/강원.png"

    var a = document.getElementById("gyuongbukTap");
    a.style.backgroundColor="#d400d2"
    a.style.border="3px solid #d400d2"
}

function clickJeonnam() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/전라남도.png"
    document.getElementById("subimg").src = "./image/강원.png"

    var a = document.getElementById("jeonnamTap");
    a.style.backgroundColor="#00dfdc"
    a.style.border="3px solid #00dfdc"
}

function clickJeonbuk() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/전라북도.png"
    document.getElementById("subimg").src = "./image/강원.png"

    var a = document.getElementById("jeonbukTap");
    a.style.backgroundColor="#e5ed00"
    a.style.border="3px solid #e5ed00"
}

function clickJeju() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/제주도.png"
    document.getElementById("subimg").src = "./image/강원.png"

    var a = document.getElementById("jejuTap");
    a.style.backgroundColor="#756e7c"
    a.style.border="3px solid #756e7c"
}