$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
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

    document.getElementById('someSwitchOptionInfo').onclick = function () {
        if (this.checked) {
            owl.trigger('play.owl');
        } else {
            owl.trigger('stop.owl');
        }
    };
});
