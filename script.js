function checkUsername() {
    var usernameInput = document.getElementById("username");
    var usernameValidation = document.getElementById("usernameValidation");
  
    if (/^22200\d{4}$/.test(usernameInput.value)) {
      usernameValidation.className = "validation-icon valid";
    } else {
      usernameValidation.className = "validation-icon invalid";
    }
    return false
  }
  
  function checkPassword() {
    var passwordInput = document.getElementById("password");
    var passwordValidation = document.getElementById("passwordValidation");
  
    if (/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(passwordInput.value)) {
      passwordValidation.className = "validation-icon valid";
    } else {
      passwordValidation.className = "validation-icon invalid";
    }
    return false
  }
  
  function validateForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
  
    // 检查账号以22200起头且为9位数
    if (!/^22200\d{4}$/.test(usernameInput.value)) {
      alert("账号格式不正确！请以22200起头，且为9位数。");
      return false;
    }
  
    // 检查密码为字母和数字结合，且长度至少为8位
    if (!/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(passwordInput.value)) {
      alert("密码格式不正确！密码必须为字母和数字结合，且长度至少为8位。");
      return false;
    }
  
    // 登录成功，跳转到指定网址
    window.location.href="homepeag/index.html";
    return false;
  }
  
  function seekHelp() {
    window.location.href = "homepeag/helpme.html";
  }
  
  