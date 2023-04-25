var primary_nav = document.querySelector('.primary_navigation');
var nav_toggle =  document.querySelector('.nav_toggle');

nav_toggle.addEventListener('click', ()=>{

   var isvisible = JSON.parse(primary_nav.getAttribute('data-visible'));
   if( isvisible== false){
    primary_nav.setAttribute('data-visible', true)
    nav_toggle.setAttribute('aria-expanded', true);
   }
   else{
    primary_nav.setAttribute('data-visible', false)
    nav_toggle.setAttribute('aria-expanded', false);
   }
    
});