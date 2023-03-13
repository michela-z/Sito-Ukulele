//const container = document.querySelector('.container');
const inizia = document.querySelector('.note');
const ukulele = document.querySelector('.ukulele');
const sandOver = document.querySelector('.sand-over');
const sandOver2 = document.querySelector('.sand-over-2');
const blur = document.querySelectorAll('.blur')
const ball = document.querySelector('.ball');
const coconut = document.querySelector('.coconut');
const monstera = document.querySelector('.monstera-leaves');
const palm = document.querySelector('.palm');
const background = document.querySelector('.body');
const cta = document.querySelector('.cta');
const hand = document.querySelector('.hand');
const objects = document.querySelector('.objects');
const home = document.querySelector('.home');
const wip = document.querySelector('.wip');

// TITLE
const title = document.querySelector('.title-container');
const titleOver = document.querySelector('.title-over'); 


home.addEventListener('click', () => {window.location.reload()})


inizia.addEventListener('mouseover', () => {

    console.log('ukulele');
    //inizia.classList.add('levitate');
    inizia.style.display = 'none';
    cta.style.display = 'inline';

    //background.style.backgroundColor = 'black';

    ukulele.addEventListener('mousemove', (e) => {
    
        inizia.style.display = 'none';
        cta.style.display = 'inline';

        blur.forEach(e => {e.style.filter = 'blur(10px)';})

        let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

        hand.style.transform = `translateX(${e.pageX / 1.5}px) translateY(${e.pageY / 2}px)`;
        hand.style.visibility = 'visible';

        //console.log(yAxis, xAxis)

        titleOver.style.transform = `translateX(${xAxis * 1}px)`;
        title.classList.add('levitate');

        cta.style.transform = `translateX(${(xAxis * 5)}px) translateY(${(yAxis * 5)}px)`;
        //scia.style.transform = `translateX(${(xAxis * 6)}px) translateY(${(yAxis * 6)}px)`;
        inizia.style.transform = `translate(-500px)`;
        //note.classList.add('levitate');

        sandOver.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg) translateX(${100 + (xAxis * 5)}px) scale(0.9)`;
        sandOver2.style.transform = `rotateY(${yAxis  / 10 }deg) rotateX(${xAxis / 10 }deg) translateX(${xAxis * 5}px) scale(1.2)`;
        monstera.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg) scale(1.3) translateX(-${90 + (xAxis * 5)}px)`;
        palm.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg) scale(1.4) translateX(${90 + (xAxis * 5)}px)`;
        ball.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1) translateX(-${90 + (xAxis * 5)}px)`;
        coconut.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1) translateX(-${90 + (xAxis * 5)}px) translateY(-50px)`;
        ukulele.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) rotate(-10deg) scale(1.1) translateX(${100 + (xAxis * 5)}px)`;

        // let mousePosX = e.clientX;
        // let mousePosY = e.clientY;
        // ukulele.style.transform = `translate3d(100px, px, 0px)`;
    })

    //ANIMATE
    // const moveVertical = [
    //     { transform: `translate3d(0px, ${pos}px, 0px)` }
    // ]
    // const moveTiming = {
    //     duration: 2000,
    //     iterations: 1,
    // }
});

// animate in
ukulele.addEventListener('mouseenter', () => {
    ukulele.style.transform = 'none';
});

//animate out
ukulele.addEventListener('mouseleave', e => {
    ball.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1) translateX(0px)'
    coconut.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1) translateX(0px)';
    ukulele.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1) translateY(0px)';
    monstera.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1) translateX(0px)';
    palm.style.transform = `rotateY(0deg) rotateX(0deg) scale(1) translateX(0px)`;
    title.style.transform = `translateY(0px)`;
    sandOver.style.transform = `translateY(0px)`;
    sandOver2.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1) translateX(0px)';
    title.classList.remove('levitate');
    titleOver.style.transform = `translateX(0px)`;
    inizia.style.display = 'inline';
    cta.style.display = 'none';
    hand.style.visibility = 'hidden';
    blur.forEach(e => {e.style.filter = 'blur(0px)';})
});


ukulele.addEventListener('click', (e) => {
    console.log('click')
    objects.style.transform = 'scale(10)';
    objects.style.filter = 'brightness(5)';

    const big = objects.getBoundingClientRect();

    if(big.width > 5000) {
        objects.style.display = 'none'
    }

    wip.style.visibility = 'visible';

    hand.style.width = '10px';
    setInterval(function() { ukulele.style.display = 'none';  }, 200)
    cta.style.display = 'none';
    inizia.style.visibility = 'hidden';
    title.style.visibility = 'hidden'

    const target = document.querySelectorAll('.scroll');

    let index = 0;
    let length = target.length;

    for (index; index < length; index++) {

        let pos = window.pageYOffset * target[index].dataset.rate;

        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
        } else {
            let posX = window.pageYOffset * target[index].dataset.ratex;
            let posY = window.pageYOffset * target[index].dataset.ratey;
            target[index].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
        }
    }
})



// WINDOW SCROLL

window.addEventListener('scroll', function scroll(e) {

    const target = document.querySelectorAll('.scroll');
    const ballRotate = document.querySelector('.rotate');
    const enlarge = document.querySelectorAll('.enlarge');

    let index = 0, length = target.length;

    for (index; index < length; index++) {

        let pos = window.pageYOffset * target[index].dataset.rate;

        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
        } else {
            let posX = window.pageYOffset * target[index].dataset.ratex;
            let posY = window.pageYOffset * target[index].dataset.ratey;
            target[index].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
        }
    }

    ballRotate.style.transform = `rotate(${window.pageYOffset}deg)`;
    ballRotate.style.right =  `-${window.pageYOffset*5}px`;

    enlarge.forEach((element) => {
        element.style.width = `${700 + window.pageYOffset*5}px`;
        element.style.height = `${700 + window.pageYOffset*5}px`;
    })
})



// inizia.addEventListener('mouseover', () => {
//     ukulele.classList.add('levitate');
// })
// inizia.addEventListener('mouseleave', () => {
//     ukulele.classList.remove('levitate')
// })