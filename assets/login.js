document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    let logincheck = false;

    const showMaxLengthMessage = (inputElement, messageElementId) => {
        const maxLength = parseInt(inputElement.getAttribute('maxlength'));
        const currentLength = inputElement.value.length;

        const messageElement = document.querySelector(messageElementId);
        if (currentLength === maxLength) {
            messageElement.textContent = `${maxLength}글자 제한`;
        } else {
            messageElement.textContent = '';
        }
    };

    signupForm.username.addEventListener("input", function () {
        showMaxLengthMessage(this, "#usernameMessage");
    });

    signupForm.password.addEventListener("input", function () {
        showMaxLengthMessage(this, "#passwordMessage");
    });

    loginForm.loginUsername.addEventListener("input", function () {
        showMaxLengthMessage(this, "#loginusernameMessage");
    });

    loginForm.loginPassword.addEventListener("input", function () {
        showMaxLengthMessage(this, "#loginpasswordMessage");
    });

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
        
        if(loginUsername == "adminid" && loginPassword == "adminpw")
        {
            if(logincheck == false)
            {
                alert("로그인 성공!");
                logincheck = true;
                console.log("admin login");
            }else{
                alert("이미 로그인됨");
            }
        }
        console.log("로그인 정보:", loginUsername, loginPassword);
        // 여기서 서버로 로그인 정보를 보내는 작업을 수행할 수 있습니다.
    });
});
  