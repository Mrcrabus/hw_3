window.addEventListener('load', function () {
    let menu = document.querySelector('.menu');
    const goUp = document.querySelector('.go_up')

    const categories = {
        'about': 0,
        'price': 0,
        'app': 0,
        'nz': 0
    }


    if (window.location.hash !== '') {
        scrollToId(window.location.hash);
    }

    if (window.scrollY < 400) {
        goUp.style.opacity = '0'
    }


    function btnOpacity() {
        if (window.scrollY > 400) {
            goUp.style.opacity = '1'
        } else {
            goUp.style.opacity = '0'
        }
    }


    menu.addEventListener('click', function (e) {
        if (e.target.classList.contains('menu__link')) {
            e.preventDefault();

            let link = e.target;
            scrollToId(link.hash);

            menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
            link.classList.add('menu__link-active');
        }
    });

    goUp.addEventListener('click', function () {
        window.scrollTo(0, 0)
        // this.style.display = 'none'
    })


    window.onscroll = btnOpacity


});

function scrollToId(id) {
    let target = document.querySelector(id);

    if (target !== null) {
        let pos = target.offsetTop - 70;
        console.log(target);
        console.log(target.getBoundingClientRect())

        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    }
}
