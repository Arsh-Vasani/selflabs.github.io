const nexticon = '<img src="images/next-btn.png" alt="next">';
const prewicon = '<img src="images/prew-btn.png" alt="prew">';
$('.goals').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    navText: [
        prewicon,
        nexticon 
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.companies').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    navText: [
        prewicon,
        nexticon 
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.last-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
