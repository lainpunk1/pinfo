document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.querySelector(".menu-container");
    const menuSection2Buttons = document.querySelectorAll(".menu-button-services, .menu-button, .trademark, .menu-section-inner-2");
    const closeButton = document.querySelector(".menu-section-3");
    const blurElements = document.querySelectorAll(".content");

    let tl = gsap.timeline({ paused: true });

    tl.to(menuContainer, {
        height: "14vw",
        duration: 0.75,
        ease: "power2.out",
    });

    tl.from([menuSection2Buttons, closeButton], { // Combine both menuSection2Buttons and closeButton
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.75,
        ease: "power1.inOut",
    }, "-=0.25");

    tl.to(blurElements, {
        filter: "blur(8px)", // Adjust the blur amount as needed
        duration: 0.3,
    }, "-=0.5");

    function openMenu() {
        menuContainer.classList.remove("hidden");
        menuContainer.style.pointerEvents = "all";
        tl.play();
    }

    function closeMenu() {
        tl.reverse().then(() => {
            menuContainer.classList.add("hidden");
            menuContainer.style.pointerEvents = "none";
        });
    }

    document.querySelector(".menu-icon").addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    menuContainer.classList.add("hidden");
    menuContainer.style.pointerEvents = "none";
    tl.reverse();
});
