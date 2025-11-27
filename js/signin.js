const btnsignin2 = document.getElementById('btn-signin');

btnsignin2.addEventListener('click', function(){
    const btnemail = document.querySelector('#email').value;
    const btnpass = document.querySelector('#pass').value;
    if (btnemail === "hoang"&& btnpass === "12345") {
        window.location.href = "./home.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});