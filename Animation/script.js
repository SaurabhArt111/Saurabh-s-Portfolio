
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize event to keep the canvas full-screen
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

// Function to generate dynamic file paths
function files(index) {
    return `./images/male${String(index + 1).padStart(4, '0')}.png`;
}

const frameCount = 300;
const images = [];
const imageSeq = { frame: 0 };

// Preload images
for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

// Wait until the first image loads before rendering
images[0].onload = render;

// GSAP Scroll Animation
gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: 0.15,
        trigger: "canvas",
        start: "top top",
        end: "600% top",
        scroller: "body",
    },
    onUpdate: render,
});

// Function to render images
function render() {
    if (images[imageSeq.frame]) {scaleImage(images[imageSeq.frame], context);}
}

// Function to scale images proportionally
function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}

ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
});


/* scrollTrigger */
gsap.to("#page1", {
    scrollTrigger: {
        trigger: `#page1`,
        start: `top top`,
        end: `bottom top`,
        marker: `true`,
        pin: `true`,
        scroll: `#main`
    }
})
gsap.to("#page2", {
    scrollTrigger: {
        trigger: `#page2`,
        start: `top top`,
        end: `bottom top`,
        marker: `true`,
        pin: `true`,
        scroll: `#main`
    }
})
gsap.to("#page3", {
    scrollTrigger: {
        trigger: `#page3`,
        start: `top top`,
        end: `bottom top`,
        marker: `true`,
        pin: `true`,
        scroll: `#main`
    }
})