var react = document.querySelector(".center");

react.addEventListener("mousemove", function(dets) {
    var location = react.getBoundingClientRect();
    var value = dets.clientX - location.left;
    
    if (value < location.width / 2) {
        var red = gsap.utils.mapRange(0, location.width / 2, 255, 0, value);
        
        gsap.to(react, {
            backgroundColor: `rgb(${red},0,0)`,
            ease: "power4.inOut" 
        });
    } else {
        var blue = gsap.utils.mapRange(0, location.width / 2, location.width, 255, value);
        
        gsap.to(react, {
            backgroundColor: `rgb(0,0,${blue})`,
            ease: "power4.inOut" 
        });
    }
});

react.addEventListener("mouseleave",function(){
    gsap.to(react,{
        backgroundColor:" rgba(19, 15, 144, 0.534)"
    })
})
document.addEventListener("DOMContentLoaded", function () {
    var rect = document.querySelector(".center");

    window.addEventListener("mousemove", function (dets) {
        var xval = gsap.utils.mapRange(0,
            window.innerWidth,
            100 + rect.getBoundingClientRect().width / 2,
            window.innerWidth - (100+rect.getBoundingClientRect().width / 2),
            dets.clientX);

        gsap.to(".center", {
            left: xval + 'px',
            ease: 'power2.inOut' // Wrap easing function in quotes
        });
    });
});
