let joinBtn = $("button.joinBtn");
let id = $("input#id"); // 아이디
let pw = $("input#pw"); // 비밀번호
let pwV = $("input#pwVal"); // 비밀번호 확인 input

let pwRule = $("span.rule"); // 비밀번호 유효성 검사 문구
let pwSame = $("span.pwSame"); // 비밀번호가 일치o 일치x 문구

let pwValidation = false; // 비밀번호 유효성 검사

// pw 유효성 검사, pw input 값 바뀔 때 계속 검사
pw.on("input", function () {
    pwcheck()

    // let pwVal = pw.val(); // 비밀번호 벨류
    // let pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    // // 비밀번호 길이 8~16, 영문, 숫자, 특수문자 포함

    // // 비밀번호 유효성 검사
    // if (pwReg.test(pwVal)) { // 만족하면
    //     pwValidation = true; // 유효성 true
    //     pw.css("border-bottom", "1px solid blue"); // 파란색 밑줄
    //     pwRule.css("visibility", "hidden"); // rule 안보이게
    // }
    // else {
    //     pwValidation = false; // 만족하지 않으면
    //     pw.css("border-bottom", "1px solid red"); // 빨간색 밑줄
    //     pwRule.css("visibility", "visible"); // rule 보이게
    // }
});

// 비밀번호 일치 확인, 일치 input 값 바뀔 때 계속 검사
pwV.on("input", function () {
    pwcheck()

    // if (pw.val() != pwV.val()) { // 비밀번호가 일치하지 않으면
    //     pwSame.css("visibility", "visible"); // 일치하지 않습니다 문구 O
    //     pwV.css("border-bottom", "1px solid red"); // 빨간색 밑줄
    // }
    // else { // 비밀번호 일치시
    //     pwSame.css("visibility", "hidden"); // 일치하지 않습니다 문구 X
    //     pwV.css("border-bottom", "1px solid blue"); // 파란색 밑줄
    // }
});

// 기존 비밀번호 유효성 검사, 비밀번호 일치 검사 코드 합친 함수
function pwcheck() {
    // ★ 비밀번호 유효성 검사 ★
    let pwVal = pw.val(); // 비밀번호 벨류
    let pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    // 비밀번호 길이 8~16, 영문, 숫자, 특수문자 포함

    if (pwReg.test(pwVal)) { // 만족하면
        pwValidation = true; // 유효성 true
        pw.css("border-bottom", "1px solid blue"); // 파란색 밑줄
        pwRule.css("visibility", "hidden"); // rule 안보이게
    }
    else {
        pwValidation = false; // 만족하지 않으면
        pw.css("border-bottom", "1px solid red"); // 빨간색 밑줄
        pwRule.css("visibility", "visible"); // rule 보이게
    }

    // ★ 비밀번호 일치 검사 ★
    if (pw.val() != pwV.val()) { // 비밀번호가 일치하지 않으면
        pwSame.css("visibility", "visible"); // 일치하지 않습니다 문구 O
        pwV.css("border-bottom", "1px solid red"); // 빨간색 밑줄
    }
    else { // 비밀번호 일치시
        pwSame.css("visibility", "hidden"); // 일치하지 않습니다 문구 X
        pwV.css("border-bottom", "1px solid blue"); // 파란색 밑줄
    }
}

// 회원가입 버튼 클릭 시
joinBtn.click(function () {
    // id가 비어있을 때
    if (id.val() == "") {
        alert("아이디를 입력하세요!!");
        id.focus();
        return false;
    }
    // pw가 비어있을 때
    if (pw.val() == "") {
        alert("비밀번호를 입력하세요!!");
        pw.focus();
        return false;
    }
    else {
        // 비밀번호 유효성 검사
        if (!pwValidation) {
            alert("비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리로 입력해주세요!!");
            pw.focus();
            return false;
        }
    }

    // 비밀번호가 일치하지 않을 때
    if (pw.val() != pwV.val()) {
        alert("비밀번호가 일치하지 않습니다!!");
        pwV.focus();
        return false;
    }

    // 회원가입 성공 시
    alert("회원가입이 완료되었습니다!!");
    location.href = "loginPage.html";
});