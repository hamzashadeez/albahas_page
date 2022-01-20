const menu_btn = document.getElementById("menu_btn");
const close = document.getElementById("close");
const mobile_menu = document.getElementById("mobile_menu");
const waiting_list_form = document.getElementById("waiting_list_form");
const email = document.getElementById("email");
const join = document.getElementById("join");
const links = document.querySelectorAll("links");


// COntact
const contact_form = document.getElementById("contact_form");
const contact_email = document.getElementById("contact_email");
const fullName = document.getElementById("fullName");
const form_message = document.getElementById("form_message");
const sendbtn = document.getElementById("sendbtn");


// SUMBITTING A MESSAGE
contact_form.addEventListener('submit',(async(e)=>{
  e.preventDefault();
  sendbtn.disabled = true;
  let message = {
    name: fullName.value,
    email: contact_email.value,
    message: form_message.value
  }
  db.collection('messages').add(message).then(()=>{
      alert('Message received, we will get back to you, thank you!')
    sendbtn.disabled = false;
  }).catch((err)=>{
    alert("Something is wrong")
    sendbtn.disabled = false;
  })
}))


waiting_list_form.addEventListener('submit',(async(e)=>{
  e.preventDefault();
  join.disabled = true;
  db.collection('waiting_list').add({"mail":email.value}).then(()=>{
      alert('Thank you for joining our waiting list, you will be notified when Albahas is ready! ')
    join.disabled = false;
  }).catch((err)=>{
    alert("Something is wrong")
    join.disabled = false;
  })
  
}))


function menu() {
  close.style.display = "flex";
  mobile_menu.style.display = "none";
  menu_btn.style.display = "flex";
}

function openNav() {
  mobile_menu.style.display = "flex";
  menu_btn.style.display = "none";
  close.style.display = "flex";
}

function closeNav() {
  mobile_menu.style.display = "none";
  menu_btn.style.display = "flex";
  close.style.display = "none";
}

menu_btn.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
