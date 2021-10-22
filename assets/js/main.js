const l = document.querySelector('.uk-dotnav > .uk-active > *')
const text = document.createTextNode("This just got added");
l.appendChild(text);
l.style.background = 'red'