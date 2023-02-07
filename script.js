
setTimeout(() => {
    const box = document.getElementById('loader');

    // 👇️ removes element from DOM
    box.style.display = 'none';

    //esay fade out

    box.target.style.transition = '3s';
    box.target.style.opacity = 0;

}, 3000);

// Path: index.html

var MyVar;

function myFunction() {
    MyVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}