const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const button = document.getElementById('button');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});


const menuSpan = document.getElementById("menuSpan");

menuBtn.onclick = function () {

    if (menuSpan.textContent === `-`){
        
        menuSpan.textContent = `X`
    }

    else {
        menuSpan.textContent = `-`
    }
}

button.onclick = function () {
    alert("Discord User : nikosgaming1")
}