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
    document.getElementById("list1").src = "./술목록/서울특별시/참이슬.png"
    document.getElementById("list2").src = "./술목록/서울특별시/향온주.png"
    document.getElementById("list3").src = "./술목록/서울특별시/옥로주.png"
    document.getElementById("list4").src = "./술목록/서울특별시/한주.png"
    document.getElementById("list5").src = "./술목록/서울특별시/남한산성소주.png"

    var a = document.getElementById("seoulTag");
    a.style.backgroundColor="red"
    a.style.border="3px solid red"
}

function clickGangwon() {
    colorReset();
    
    document.getElementById("mainimg").src = "./우리나라 지도 모음/강원도.png"
    document.getElementById("list1").src = "./술목록/강원도/처음처럼.png"
    document.getElementById("list2").src = "./술목록/강원도/메밀로25.png"
    document.getElementById("list3").src = "./술목록/강원도/사임당옥막걸리.png"
    document.getElementById("list4").src = "./술목록/강원도/강릉소주.png"
    document.getElementById("list5").src = "./술목록/강원도/백지.png"

    var a = document.getElementById("gangwonTap");
    a.style.backgroundColor="#0030ff"
    a.style.border="3px solid #0030ff"
}

function clickChungnam() {
    colorReset();
    
    document.getElementById("mainimg").src = "./우리나라 지도 모음/충청남도.png"
    document.getElementById("list1").src = "./술목록/충청남도/맑은린.png"
    document.getElementById("list2").src = "./술목록/충청남도/가야곡왕주.png"
    document.getElementById("list3").src = "./술목록/충청남도/계룡백일주.png"
    document.getElementById("list4").src = "./술목록/충청남도/백지.png"
    document.getElementById("list5").src = "./술목록/충청남도/백지.png"

    var a = document.getElementById("chungnamTap");
    a.style.backgroundColor="#00a83f"
    a.style.border="3px solid #00a83f"
}

function clickChungbuk() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/충청북도.png"
    document.getElementById("list1").src = "./술목록/충청북도/덕산막걸리.png"
    document.getElementById("list2").src = "./술목록/충청북도/청명주.png"
    document.getElementById("list3").src = "./술목록/충청북도/청풍.png"
    document.getElementById("list4").src = "./술목록/충청북도/백지.png"
    document.getElementById("list5").src = "./술목록/충청북도/백지.png"

    var a = document.getElementById("chungbukTap");
    a.style.backgroundColor="#edbe00"
    a.style.border="3px solid #edbe00"
}

function clickGyeongnam() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/경상남도.png"
    document.getElementById("list1").src = "./술목록/경상남도/좋은데이.png"
    document.getElementById("list2").src = "./술목록/경상남도/백지.png"
    document.getElementById("list3").src = "./술목록/경상남도/백지.png"
    document.getElementById("list4").src = "./술목록/경상남도/백지.png"
    document.getElementById("list5").src = "./술목록/경상남도/백지.png"

    var a = document.getElementById("gyeongnamTap");
    a.style.backgroundColor="#7000ee"
    a.style.border="3px solid #7000ee"
}

function clickGyeongbuk() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/경상북도.png"
    document.getElementById("list1").src = "./술목록/경상북도/C1.png"
    document.getElementById("list2").src = "./술목록/경상북도/대선.png"
    document.getElementById("list3").src = "./술목록/경상북도/하향주.png"
    document.getElementById("list4").src = "./술목록/경상북도/김천과하주.png"
    document.getElementById("list5").src = "./술목록/경상북도/설련주.png"

    var a = document.getElementById("gyuongbukTap");
    a.style.backgroundColor="#d400d2"
    a.style.border="3px solid #d400d2"
}

function clickJeonnam() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/전라남도.png"
    document.getElementById("list1").src = "./술목록/전라남도/잎새주.png"
    document.getElementById("list2").src = "./술목록/전라남도/홍주.png"
    document.getElementById("list3").src = "./술목록/전라남도/백지.png"
    document.getElementById("list4").src = "./술목록/전라남도/백지.png"
    document.getElementById("list5").src = "./술목록/전라남도/백지.png"

    var a = document.getElementById("jeonnamTap");
    a.style.backgroundColor="#00dfdc"
    a.style.border="3px solid #00dfdc"
}

function clickJeonbuk() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/전라북도.png"
    document.getElementById("list1").src = "./술목록/전라북도/이강고.png"
    document.getElementById("list2").src = "./술목록/전라북도/존버1925.png"
    document.getElementById("list3").src = "./술목록/전라북도/백지.png"
    document.getElementById("list4").src = "./술목록/전라북도/백지.png"
    document.getElementById("list5").src = "./술목록/전라북도/백지.png"

    var a = document.getElementById("jeonbukTap");
    a.style.backgroundColor="#e5ed00"
    a.style.border="3px solid #e5ed00"
}

function clickJeju() {
    colorReset();

    document.getElementById("mainimg").src = "./우리나라 지도 모음/제주도.png"
    document.getElementById("list1").src = "./술목록/제주도/한라산.png"
    document.getElementById("list2").src = "./술목록/제주도/고소리술.png"
    document.getElementById("list3").src = "./술목록/제주도/오메기술.png"
    document.getElementById("list4").src = "./술목록/제주도/우도땅콩막걸리.png"
    document.getElementById("list5").src = "./술목록/제주도/백지.png"

    var a = document.getElementById("jejuTap");
    a.style.backgroundColor="#756e7c"
    a.style.border="3px solid #756e7c"
}