function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += "responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/*----Dark Mode----*/
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");


toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

/*----typing Effect ----*/

var typingEffect = new Typed(".typedtext", {
    string: ["Designer", "coder","Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 200,

})

/*----Scroll animation ----*/

const sr = scrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info",{ delay: 200 });
sr.reveal(".text-btn",{ delay: 200 });
sr.reveal(".social_icons",{ delay: 200 });
sr.reveal(".featured-image",{ delay: 200 });

sr.reveal(".project-box",{ delay: 200 });

sr.reveal(".top-header",{});

const srLeft = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info" ,{ delay: 100});
srLeft.reveal(".contact-info", { delay: 100});

const srRighgt = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})   

sr.Righgt.reveal(".skills", { delay: 100 });
sr.Right.reveal(".skills-box", { delay: 100 });

/*----active link ----*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
    } else {
        document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
    }        
    });
}

window.addEventListener("scroll", scrollActive);