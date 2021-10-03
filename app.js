const menu = document.querySelector('.header .navbar .menu');
const mobile_menu = document.querySelector('.header .navbar ul');
const header = document.querySelector('.header.container');

const atHome = document.querySelector('.header .navbar ul li:first-child a')

menu.addEventListener('click',()=>{
  menu.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})

if(!atHome.classList.contains('activepage')){
  header.style.backgroundColor = "#000000";
}
else{
  document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 600){
      header.style.backgroundColor = "#000000";
    }
    else{
      header.style.backgroundColor = "transparent";
    }
  })
}
