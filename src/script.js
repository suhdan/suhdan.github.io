var body = document.querySelector('body');
var internalLinks = document.querySelectorAll('.contact, .resume');

// adds class to <body> to open whichever link was pressed
function enterSection(event) {
  event.currentTarget.classList.add('centered');
  body.classList.add('subsection');
}

// only contact and resume have functionality. Other two links are just links
internalLinks.forEach( function(el) {
  el.addEventListener('click', enterSection);
});

document.querySelector('.back').addEventListener('click', function(event) {
  body.classList.remove('subsection');
  internalLinks.forEach( function(el) {
    el.classList.remove('centered');
  });
})

console.log('%c Hi! Welcome to my site.', 'color: red; font-size: 20px;');
