$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var letter = $(".letter");
    var hidden = $("#hiddenLetter");

    letter.click(function() {
        openLetter();
    });

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open hidden");
        hidden.addClass("hidden").removeClass("visible");
    }

    function openLetter(){
        hidden.addClass("visible").removeClass("hidden");
        envelope.addClass("hidden").removeClass("open");
    }
});

function onDevToolsOpen() {
    console.log("Code không clean xin đừng xem :<");
}

onDevToolsOpen();

function signUp(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rePass = document.getElementById("confirm-password").value;
  
    // Check if the passwords match.
    if (password !== rePass) {
      alert("Passwords do not match");
      return;
    }else{
      alert("Sign up successful");
      window.location.href = "../index.html";
  
    }
  
    // Create a new user object.
    var user = {
      username: username,
      password: password,
    };
  
    // Save the user object to local storage.
    localStorage.setItem(username, JSON.stringify(user));
  
    // Redirect the user to the sign-in page.
  }
  function signIn(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    switch(username){
        case "Mom" :
            if(password ==="271272") {
                alert("Đăng nhập thành công! Helu mẹ mìn");
                window.location.href = "../mom/index.html";
                break;
            }
        case "Sis" :
            if(password ==="090595"){
                alert("Login Successful! Hello sít tờ");
                window.location.href = "../sis/index.html";
                break;  
            }
        case "Bae" :
            if(password ==="040600"){
                alert("Login Successful! Hello bấy bì");
                window.location.href = "../babe/index.html";
                break;  

            }
        case data.username :
            if(password === data.password){
                alert("Login Successful!");
                window.location.href = "../woman/index.html";
                break;  

            }
        case null :
            alert("Username does not exist");
            break;
        default :
        alert("Username or password is incorrect");
        break;  


    }
    // Check if the user exists in local storage.

}

