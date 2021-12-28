const menu_btn = document.getElementById("menu_btn");
const mobile_menu = document.getElementById("mobile_menu");
const links = document.querySelectorAll("links");


function menu (){
    if (mobile_menu.style.display == "none") {
        mobile_menu.style.display = "flex";
    } else {
        mobile_menu.style.display = "none";
      } 
}
menu_btn.addEventListener("click", menu);

