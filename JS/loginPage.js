let loginBtn = $("button.loginBtn");
let id = $("input#id"); // 아이디
let pw = $("input#pw"); // 비밀번호

loginBtn.on("click", function () {
    if (id.val() == "") {
        alert("아이디를 입력해주세요.");
        id.focus();
        return false;
    }
    else if (pw.val() == "") {
        alert("비밀번호를 입력해주세요.");
        pw.focus();
        return false;
    }
    else {
        location.href = "main.html";
    }
});