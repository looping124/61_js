
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