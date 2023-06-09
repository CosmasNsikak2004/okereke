const responsive={
    0:{
        items:1
    },
    350:{
        items:1
    },
    500:{
        items:2
    },
    1000:{
        items:3
    },
    1075:{
        items:4
    }

}

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

$(window).on("load",function(){
    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive:responsive
    });
    // AOS INSTANCE
    AOS.init()
    
});
  