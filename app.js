const menu = document.querySelector('.header .navbar .menu');
const mobile_menu = document.querySelector('.header .navbar ul');
const header = document.querySelector('.header.container');

menu.addEventListener('click',()=>{
  menu.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
  var scroll_position = window.scrollY;
  if(scroll_position > 600){
    header.style.backgroundColor = "#525252";
  }
  else{
    header.style.backgroundColor = "transparent";
  }
})
