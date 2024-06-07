function changebackg(){
    var navbar = document.querySelector('#navbar');
    var scrollVal = window.scrollY;
    if(scrollVal<150){
        navbar.classList.remove('navcolor');
    }else{
        navbar.classList.add('navcolor');
    }
}
window.addEventListener('scroll',changebackg());