var t1 = gsap.timeline();
t1.from(".line h1 ,h2", {
    y: 150,
    stagger: 0.5,
    duration:0.6,
    delay:0.5,
});
t1.from("#line-one-part-1", {
    opacty: 0,   
    onStart: function () {
        var h5timer = document.querySelector("#line-one-part-1 h5");
        var grow = 0;
        setInterval(function () {
            if (grow < 100) {
                h5timer.innerHTML = grow++;
            } else {
                h5timer.innerHTML = grow;
            }
        }, 33);
    },
});
tl.to(".line h2", {
    animationName: "anime",
    opacity:1,
})
t1.to("#loader", {
    opacity: 0,
    duraton: 0.2,
    delay: 4,
});
tl.from(".page1", {
    y: 1600,
    opacity: 0,
    delay:0.5,
    ease:Power4
})
t1.to("#loader" , {
    display:"none"
});