
const signing = document.querySelector('#signing');
const register = document.querySelector('#register');
const login = document.querySelector('#login');
localStorage.setItem('usernumber', 0);
register.addEventListener('click', addingUser);
signing.addEventListener('click', tosign);
login.addEventListener('mouseover', gamingLobby);


function addingUser() {
    const username2 = document.querySelector('#username2');
    const password2 = document.querySelector('#password2');
    let obj = { name: username2.value, password: password2.value };
    let str = JSON.stringify(obj);
    let b = localStorage.getItem('usernumber');
    let usernumber = parseInt(b) + 1;
    let u = `ofek${usernumber}`;
    localStorage.setItem('usernumber', `${usernumber}`);
    localStorage.setItem(u, str);
    console.log(localStorage);
    console.log("h1");
    const signupForm = document.querySelector('#signForm');
    const loginForm = document.querySelector('#loginForm');
    signupForm.style.display = "none";
    loginForm.style.display = "block";
}

function tosign() {
    console.log("kop");
    const signupForm = document.querySelector('#signForm');
    const loginForm = document.querySelector('#loginForm');
    signupForm.style.display = "block";
    loginForm.style.display = "none";
}

function gamingLobby() {
    const loginForm = document.querySelector('#loginForm');
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    let sum = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (obj.name == username.value && obj.password == password.value) {
            sum++;
        }
    }
    if(sum==0){
        loginForm.action="#";
    } 
    else{
        
        loginForm.action="/html/game.html";
    }

}
