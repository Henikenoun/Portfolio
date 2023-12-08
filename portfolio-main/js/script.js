/* ============================================================== nav toggler ==============================================================*/

const navtoggler = document.querySelector('.nav-toggler'),
aside = document.querySelector('.aside');
navtoggler.onclick= function()
{ 
    aside.classList.toggle("open");
    navtoggler.classList.toggle('open');
    document.querySelector('.main').classList.toggle("open");
}



const imgList = document.getElementsByClassName('portfolio-item');
const contentList = document.getElementsByClassName('desc');

for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('mouseenter', function() {
        contentList[i].style.display = 'block';
    });

    imgList[i].addEventListener('mouseleave', function() {
        contentList[i].style.display = 'none';
    });
}


