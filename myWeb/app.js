const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const imageWrappers = document.querySelectorAll('.single-img-no-padding');
    let hideImages = false;

    const toggleImages = (hide) => {
        imageWrappers.forEach(wrapper => {
            const img = wrapper.querySelector('img');
            if (hide) {
                img.style.visibility = "hidden";
                wrapper.classList.add('disable-hover');
            } else {
                img.style.visibility = "visible";
                wrapper.classList.remove('disable-hover');
            }
        });
    };

    burger.addEventListener('click', () => {
        toggleImages(!hideImages);
        hideImages = !hideImages;

        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        // Lock or unlock scroll
        if (nav.classList.contains('nav-active')) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        navLinks.forEach((link, index) => {
            link.style.animation = link.style.animation
                ? ''
                : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    });

    // Reset everything on large screen resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            hideImages = false;
            toggleImages(false);
            document.body.classList.remove('no-scroll');

            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
};

navSlide();

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});