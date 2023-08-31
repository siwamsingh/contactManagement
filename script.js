

//  taskbar ..............................

var taskbar = document.getElementById('taskbar');
var c = document.getElementById('collide');
var main = document.getElementById('main');

taskbar.style.display = 'none';
collide.onclick = () => {
    if (taskbar.style.display == 'none') {
        taskbar.style.display = 'flex';
        c.innerHTML = '&lt;';
    } else {
        taskbar.style.display = 'none';
        c.innerHTML = '&gt;';
    }
};


//display .....................................

var n = document.getElementById('n');
var num = document.getElementById('num');
var email = document.getElementById('email');
var photo = document.querySelector('#photo img')

const listItems = document.querySelectorAll('#bottom li');
var data = document.getElementById('data');

let btn3 = document.getElementById('btn3');
btn3.onclick = () => {
    data.style.display = 'none';
};

listItems.forEach(li => {
    li.onclick = () => {
        let name = li.querySelector('.name').textContent;
        let number = li.querySelector('.number').textContent;
        let photoSrc = li.getAttribute('data-src');

        n.innerText = name;
        num.innerText = number;

        photo.src = photoSrc;
        
        email.innerHTML  = "";
        data.style.display = 'flex';
    };
});

//login..........................................

let signup = document.getElementById('SignUp');
let login = document.getElementById('Login');
let L = document.getElementById('L');
L.style.display = 'none';

signup.onclick  = () => {
    if (L.style.display == 'none') {
        L.style.display = 'flex';
    }
    else{
        L.style.display = 'none';
    }
};

login.onclick  = () => {
    if (L.style.display == 'none') {
        L.style.display = 'flex';
    }
    else{
        L.style.display = 'none';
    }
};





