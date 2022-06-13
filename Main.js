// navbar
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    let isopen = false;
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        if (isopen) {
            setTimeout(() => {
                nav.classList.toggle("nav-hidden");
            }, 1000);
        } else {
            nav.classList.toggle("nav-hidden");
        }
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
                    }s`;
            }
        });
        isopen = !isopen;
    });
};
navSlide();

// body move

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

