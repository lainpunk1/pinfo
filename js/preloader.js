const text = baffle('.heading-text');  
const tl = gsap.timeline();
const welcomeScreen = gsap.timeline({
  paused: "true",
});

tl.from(".l-title", {
  duration: 0.5,
  opacity: 0,
  y: 10,
});
tl.from(".l-bracket", {
  duration: 0.3,
  scale: 0,
  margin: 0,
});

tl.from(".l-img", {
  duration: 0.8,
  y: 150,
  opacity: 0,
  stagger: {
    amount: 1,
  },
});
tl.from(
  ".l-bottom-line",
  {
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: {
      amount: 0.1,
    },
  },
  "-=.5"
);

// initializing loader
let id,
  i = 0,
  loadState = false;

function loader() {
  id = setInterval(frame, 45);
}
function frame() {
  if (i >= 80) {
    clearInterval(id);
    welcomeScreen.play();
    text.start();
    text.set({
    characters: '0123456789!@#$%*()®▓▒░ØÆ×±·¨≡µßªƒ',
    speed: 100
    });
    text.reveal(4000);
  } else {
    if(loadState == true){
    i++;
    }
  }
}
window.onload = function () {
  loader();
};

// welcome screen
welcomeScreen.to(".loading-section, .loading-images-container", {
  y: -10,
  opacity: 0,
});
welcomeScreen.to(".loading-screen", {
  duration: 0.3,
  y: -2000,
  ease: "Power4.out",
});
welcomeScreen.from(".img, .heading, .menu, .mask, .pinfo, .inner-inner-container", {
  duration: 0.6,
  y: 200,
  opacity: 0,
  stagger: {
    amount: 0.5,
  },
});




document.onreadystatechange = function () {
  if (document.readyState == "complete") {
  loadState = true;
  }
};