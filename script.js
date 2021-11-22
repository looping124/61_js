
let my_footer = document.querySelector('footer')

// Fonctionnalité 1 :
my_footer.addEventListener("click", function(){ 
  console.log("clique");
})

//Fonctionnalité 1-bis :
my_footer.addEventListener("click", function01)

var my_count = 1
function function01(){
  console.log(`clic numéro ${my_count}`)
  my_count++
}

//Fonctionnalité 2 :
let my_hamburger = document.querySelector('.navbar-toggler')
my_hamburger.addEventListener("click", function(){ 
  let navbar_to_change = document.getElementById('navbarHeader')
  navbar_to_change.classList.toggle("collapse");
})

//Fonctionnalité 3 :
let my_edit = document.querySelector('.btn.btn-sm.btn-outline-secondary')
my_edit.addEventListener("click", function(){ 
  my_edit.parentNode.parentNode.parentNode.style.color = "red"
})

//Fonctionnalité 4 :
let my_edit2 = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[1]
my_edit2.addEventListener("click", function(){ 
  let card02 = my_edit2.parentNode.parentNode.parentNode
  if (card02.style.color === "green") {
    card02.style.removeProperty('color');
  } else {
    card02.style.color = "green"
  }
})

//Fonctionnalité 5 :
let my_header = document.querySelector('header')
const bootstap_cdn = document.querySelector('link')
var bootstrap_is_here = true
my_header.addEventListener('dblclick', function(){ 
  if (bootstrap_is_here === true) {
    bootstap_cdn.remove()
    bootstrap_is_here = false
  }
  else {
    my_header.appendChild(bootstap_cdn)
    bootstrap_is_here = true
  }
  
});

//Fonctionnalité 6 :
let my_btn_views = document.querySelectorAll('.btn.btn-sm.btn-success')


my_btn_views.forEach(item => 
  item.addEventListener("mouseover", function(){ 
let card_of_item = item.parentNode.parentNode.parentNode
let my_image = card_of_item.parentNode.firstElementChild
  if (card_of_item.firstElementChild.style.display == "none"){
    card_of_item.firstElementChild.style.display = "block";
    my_image.style.height =  '100%';
    my_image.style.width = '100%';
  }
  else {
    card_of_item.firstElementChild.style.display = "none";
    my_image.style.height =  '20%';
    my_image.style.width = '20%';
  }
}))

//Fonctionnalité 7 :
let my_arrow_right = document.querySelector('a.btn.btn-secondary.my-2')
my_arrow_right.addEventListener("click", function(){ 
  last_card = document.querySelectorAll('div.col-md-4')[5]
  fist_card = document.querySelectorAll('div.col-md-4')[0]
  last_card.parentNode.insertBefore(last_card, fist_card);
})

//Fonctionnalité 8 :
let my_arrow_left = document.querySelector('a.btn.btn-primary.my-2')
my_arrow_left.addEventListener("click", function(){ 
  last_card = document.querySelectorAll('div.col-md-4')[5]
  fist_card = document.querySelectorAll('div.col-md-4')[0]
  fist_card.parentNode.insertBefore(fist_card, null);
})

//Fonctionnalité 9 :
let my_body = document.querySelector('body')
let js_event = document.querySelector('a.navbar-brand.d-flex.align-items-center')
js_event.addEventListener('keypress', logKey);
function logKey(e) {
  console.log(e)
  switch (e.code) {
    case "KeyQ":
  my_body.className = "";
  my_body.classList.add("col-4")
  my_body.classList.add("offset-md-0")
  break;
    case "KeyY":
  my_body.className = "";
  my_body.classList.add("col-4")
  my_body.classList.add("offset-md-4")
  break;
    case "KeyP":
  my_body.className = "";
  my_body.classList.add("col-4")
  my_body.classList.add("offset-md-8")
  break;
    case "KeyB":
  my_body.className = "";
  break;
  }
}

