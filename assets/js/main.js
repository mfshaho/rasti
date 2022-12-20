const main = document.querySelector('.main');
const video = main.querySelector('video');
const text = document.querySelector('.hero');
const boutme = document.querySelector('.boutme');
const personal = document.querySelector('.personal');
// Video Galley
const vG = document.querySelector('.videos');
const pG = document.querySelector('.photos');

// ELEMENTS
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.footer');
// console.log(main);
// console.log(video);
// console.log(text);

// Scroll Magic
const controller = new ScrollMagic.Controller();
// const hideAlle1 = TweenMax.fromTo(boutme,personal, 0.01, {opacity:1},{opacity:0})
// Scene
let scene = new ScrollMagic.Scene({
	duration: 7500,
	triggerElement: main,
	triggerHook: 0
})
// .addIndicators()
.setPin(main)
.addTo(controller);

const heroAnimation = TweenMax.fromTo(text, 0.1, { opacity:1}, {opacity:0});
let scene2 = new ScrollMagic.Scene({
	duration: 3500,
	triggerElement: main,
	triggerHook: 0
})
.setTween(heroAnimation)
.addTo(controller);

const boutmeAnimation = TweenMax.fromTo(boutme, 0.1, {opacity:0}, {opacity:1});
let scene3 = new ScrollMagic.Scene({
	duration: 1000,
	triggerElement: main,
	triggerHook: 0
})
.setTween(boutmeAnimation)
.addTo(controller);

// Video Animation
let accelAmount = 1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
	scrollpos = e.scrollPos / 1000;
	
});

setInterval(() => {
	delay += (scrollpos - delay) * accelAmount;
	// console.log(scrollpos, delay);

	video.currentTime = delay;
}, 33.3);