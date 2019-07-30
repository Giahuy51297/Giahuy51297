/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var h = null; // Giờ
var m = null; // Phút
var s = null; // Giây

var timeout = null; // Timeout

function start() {

    if (h === null) {
        h = 23;
        m = 59;
        s = 59;
    }


    if (s === -1) {
        m -= 1;
        s = 59;
    }


    if (m === -1) {
        h -= 1;
        m = 59;
    }


    if (h == -1) {
        clearTimeout(timeout);
        alert('Hết giờ');
        return false;
    }


    document.getElementById('h').innerText = h.toString();
    document.getElementById('m').innerText = m.toString();
    document.getElementById('s').innerText = s.toString();
    document.getElementById('h1').innerText = h.toString();
    document.getElementById('m1').innerText = m.toString();
    document.getElementById('s1').innerText = s.toString();

    timeout = setTimeout(function () {
        s--;
        start();
    }, 1000);
}

$(document).ready(function () {
    $('.owl-carousel1').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true,
                autoPlay: true
            },
            600: {
                items: 1,
                nav: false,
                loop: true,
                autoPlay: true
            },
            1000: {
                items: 1,
                nav: false,
                loop: true,
                autoPlay: true
            }
        }
    });
});
$('.play').on('load', function () {
    owl.trigger('play.owl.autoplay', [1000])
});

$(document).ready(function () {
    $('.owl-carousel2').owlCarousel({
        items: 2,
        loop: true,
        margin: 100,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            }
        }
    });
});

$(document).ready(function () {
    $('.owl-carousel4').owlCarousel({
        items: 3,
        loop: true,
        margin: 100,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            }
        }
    });
});

$(document).ready(function () {
    $('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });
});

$(document).ready(function () {
    $('.owl-carousel6').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("huyconcac").style.opacity = 0;
    document.getElementById("huyconcac").style.transition = "0.4s";
    document.getElementById("main").style.transition = "0.6s";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("huyconcac").style.opacity = 1;
    document.getElementById("huyconcac").style.transition = "0.4s";
    document.getElementById("main").style.transition = "0.6s";
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



function upQua1(){
    $qua = document.getElementById("quaPro1").innerHTML;
    document.getElementById("quaPro1").textContent = +$qua + 1;
}

function downQua1(){
    $qua = document.getElementById("quaPro1").innerHTML;
    if($qua!=0){
       document.getElementById("quaPro1").textContent = $qua-1;
    }   
}

function upQua2(){
    $qua = document.getElementById("quaPro2").innerHTML;
    document.getElementById("quaPro2").textContent = +$qua + 1;
}

function downQua2(){
    $qua = document.getElementById("quaPro2").innerHTML;
    if($qua!=0){
       document.getElementById("quaPro2").textContent = $qua-1;
    }   
}

function upQua3(){
    $qua = document.getElementById("quaPro3").innerHTML;
    document.getElementById("quaPro3").textContent = +$qua + 1;
}

function downQua3(){
    $qua = document.getElementById("quaPro3").innerHTML;
    if($qua!=0){
       document.getElementById("quaPro3").textContent = $qua-1;
    }   
}
