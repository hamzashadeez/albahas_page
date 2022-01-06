const menu_btn = document.getElementById("menu_btn");
const close = document.getElementById("close");
const mobile_menu = document.getElementById("mobile_menu");
const links = document.querySelectorAll("links");


function menu (){
    if (mobile_menu.style.display == "none") {
        mobile_menu.style.display = "flex";
        
    } else {
        mobile_menu.style.display = "none";
      } 
}

function openNav(){
    mobile_menu.style.display = "flex";
    menu_btn.style.display = "none";
    close.style.display = "flex";
    

}


function closeNav(){
    mobile_menu.style.display = "none";
    menu_btn.style.display = "flex";
    close.style.display = "none";
    
}


menu_btn.addEventListener("click", openNav);
close.addEventListener("click", closeNav);

