let body = document.querySelector('body');
// let body = document.querySelector('body');
let fingerprint = document.querySelector('.fingerprint');
let center = document.querySelector('.center');
let scan = document.querySelector('.scan');
let timer, timerSuccesss;


function onSuccess() {
    body.removeEventListener('mousedown', onTouchstart);
    body.removeEventListener('touchstart', onTouchstart);


    fingerprint.classList.remove('active');
    center.classList.add('success')

    clearTimeout(timerSuccesss);

    timerSuccesss = setTimeout(() => {
        body.addEventListener('mousedown', onTouchstart);
        body.addEventListener('touchstart', onTouchstart);
        center.classList.remove('success')

    },1000000);
}

function onTouchstart () {
    fingerprint.classList.add('active');
    timer = setTimeout(onSuccess,3000)
}

function onTouchEnd() {
    fingerprint.classList.remove('active')
    clearTimeout(timer)
}

fingerprint.addEventListener('mousedown', onTouchstart)
fingerprint.addEventListener('touchstart', onTouchstart)
fingerprint.addEventListener('mouseup', onTouchEnd)
fingerprint.addEventListener('touchend', onTouchEnd)