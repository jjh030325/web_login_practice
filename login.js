document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = signupForm.username.value;
        const password = signupForm.password.value;
        console.log("회원가입 정보:", username, password);
        // 여기서 서버로 회원가입 정보를 보내는 작업을 수행할 수 있습니다.
    });
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const loginUsername = loginForm.loginUsername.value;
        const loginPassword = loginForm.loginPassword.value;
        console.log("로그인 정보:", loginUsername, loginPassword);
        // 여기서 서버로 로그인 정보를 보내는 작업을 수행할 수 있습니다.
    });
});
  