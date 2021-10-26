const counters = document.querySelectorAll('.counter-wrapper');
let onlyOnce = { value: true };

window.onscroll = () => {
    start(counters, onlyOnce);
};
function start(counters, onlyOnce) {
    if (window.scrollY > 200 && onlyOnce.value) {
        onlyOnce.value = false;
        if (counters) {
            counters.forEach(c => {
                const counter = c.querySelector('.num');
                animateValue(counter, 0, counter.innerText, 3500);
            });
        }
    }
}
function animateValue(obj, start, end, duration) {
    if (start === end) {
        return;
    }
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function() {
    const el = document.getElementById('overlay');
    el.style.display = 'none';
};