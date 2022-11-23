const user = document.querySelector('#username2');
const pass = document.querySelector('#password2');
const signing = document.querySelector('#signing');
const register = document.querySelector('#register');
const login = document.querySelector('#login');
const loginF = document.querySelector('#failLog');
const remember = document.querySelector('#remember');
register.addEventListener('click', addingUser);
signing.addEventListener('click', tosign);
login.addEventListener('mouseover', gamingLobby);
loginF.addEventListener('mouseover', gamingLobby);
loginF.addEventListener('click', ()=>{alert("User does not exist")});
// remember.addEventListener('click', rememberMe)

function addingUser() {
    const username2 = document.querySelector('#username2');
    const password2 = document.querySelector('#password2');
    if(username2.value.length > 0 && username2.value.length <= 9 && password2.value.length>7){
    let obj = { name: username2.value, password: password2.value };
    let str = JSON.stringify(obj);
    let b = localStorage.getItem('usernumber');
    let usernumber = parseInt(b) + 1;
    let u = `monster${usernumber}`;
    localStorage.setItem('usernumber', `${usernumber}`);
    localStorage.setItem(u, str);
    const signupForm = document.querySelector('#signForm');
    const loginForm = document.querySelector('#loginForm');
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    console.log(localStorage);
    }
}

function tosign() {
    console.log("kop");
    const signupForm = document.querySelector('#signForm');
    const loginForm = document.querySelector('#loginForm');
    signupForm.style.display = "block";
    loginForm.style.display = "none";
}

function gamingLobby() {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const buttonLog = document.querySelector('#login');
    const buttonStay = document.querySelector('#failLog');
    let sum = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (obj.name == username.value && obj.password == password.value) {
            sum++;
        }
    }
    console.log(sum)
    if(sum==0){
        buttonLog.style.display="none";
        buttonStay.style.display="block";
    } 
    else{
        buttonLog.style.display="block";
        buttonStay.style.display="none";
    }

}

function rememberMe(){
    const remember = document.querySelector('#remember');
    const username2 = document.querySelector('#username2');
    const password2 = document.querySelector('#password2');
    if(remember.checked==1){
        sessionStorage.setItem('logUser',username2.value);
        sessionStorage.setItem('logPass',password2.value);
        console.log()
    }
    else{
        sessionStorage.setItem('logUser','');
        sessionStorage.setItem('logPass','');
    }
}
rememberMe();
window.addEventListener('load',load)
function load(){
user.value = sessionStorage.getItem('logUser');
console.log(user.value);
pass.value = sessionStorage.getItem('logPass');
console.log(pass.value);
}