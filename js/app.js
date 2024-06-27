/* animated cursor */

var animatedCursor = document.createElement('div');
animatedCursor.className = 'animated-cursor';

document.body.appendChild(animatedCursor);

document.addEventListener('mousemove', function (e) {
    animatedCursor.style.left = e.pageX + 'px';
    animatedCursor.style.top = e.pageY + 'px';
});