
/*Sticky Header */ 
const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

function stickyNavigation() {
 // console.log('navTop = ' + navTop);
 // console.log('scrollY = ' + window.scrollY);

  if (window.scrollY >= window.innerHeight) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('sticky');
  } else {
    document.body.style.paddingTop = 0;

   document.body.classList.remove('sticky');
}
}
window.addEventListener('scroll', stickyNavigation);


/*Scroll on Buttons */ 
function scrollIt(element) {

  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

const sectionplans = document.querySelector('.js--section-plans');
const sectionfeatures = document.querySelector('.js--section-features');
document.querySelector('.js--scroll-to-plans').addEventListener('click', () =>{
   scrollIt(sectionplans);
})
document.querySelector('.js--scroll-to-start').addEventListener('click', () =>{
  scrollIt(sectionfeatures);
})

/*Navigation Scroll */ 

function anchorLinkHandler(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(function() {
      const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
          targetAnchor.tabIndex = "-1";
          targetAnchor.focus();
          window.history.pushState("", "", targetID);
          clearInterval(checkIfDone);
      }
  }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

/*Animate on Scroll Manual  */

var waypointa = document.querySelector('js--wp-1'); 
var waypointb = document.querySelector('js--wp-2'); 
var waypointc = document.querySelector('js--wp-3'); 
var waypointd = document.querySelector('js--wp-4'); 


var waypoint1 = new Waypoint({
  element: document.getElementById('js--wp-1'),
  handler: function(direction) {
    document.getElementById('js--wp-1').classList.add("animated", "fadeIn"); 
  },
  offset:'50%'
});

var waypoint2 = new Waypoint({
  element: document.getElementById('js--wp-2'),
  handler: function(direction) {
    document.getElementById('js--wp-2').classList.add("animated", "fadeInUp"); 
  },
  offset:'50%'
});

var waypoint3 = new Waypoint({
  element: document.getElementById('js--wp-3'),
  handler: function(direction) {
    document.getElementById('js--wp-3').classList.add("animated", "fadeIn"); 
  },
  offset:'50%'
});
var waypoint4 = new Waypoint({
  element: document.getElementById('js--wp-4'),
  handler: function(direction) {
    document.getElementById('js--wp-4').classList.add("animated", "pulse"); 
  },
  offset:'50%'
});



/*Mobile Navigation*/

document.querySelector('.js--nav-icon').addEventListener('click', () =>{
 var nav = document.querySelector('.js--main-nav'); 
 var icon = document.querySelector('.js--nav-icon i'); 
 nav.classList.toggle('showheight'); 
 if(icon.classList.contains('ion-navicon-round')){
   icon.classList.add('ion-close-round'); 
   icon.classList.remove('ion-navicon-round'); 
 }
 else{
   icon.classList.add('ion-navicon-round'); 
   icon.classList.remove('ion-close-round'); 
 }
});