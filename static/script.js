var tooltipSpan = document.getElementsByClassName('tooltiptext');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan[0].style.top = (y - 160) + 'px';
    tooltipSpan[0].style.left = (x - 500) + 'px';
};

