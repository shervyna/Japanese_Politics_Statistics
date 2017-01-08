var tooltipSpan = document.getElementsByClassName('tooltiptext');

window.onmousemove = function (e) {
    var x = e.pageX,
        y = e.pageY;
    tooltipSpan[0].style.top = (y-50) + 'px';
    tooltipSpan[0].style.left = (x-600) + 'px';
};

