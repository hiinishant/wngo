const menu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
}

function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

const helpBtn = document.getElementById("btn1");
const helpForm = document.getElementById("formid");
const formcloseBtn = document.getElementById("fromclosebtn");

helpBtn.addEventListener("click", () => {
    helpForm.classList.add("active");
});

formcloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    helpForm.classList.remove("active");
});

const volunteerBtn = document.getElementById("btn2");
const volunteerForm = document.getElementById("volunteerForm");
const volunteerClose = document.getElementById("volunteerClose");

volunteerBtn.addEventListener("click", () => {
    volunteerForm.classList.add("active");
});

volunteerClose.addEventListener("click", (e) => {
    e.preventDefault();
    volunteerForm.classList.remove("active");
});

const mentorForm = document.getElementById("mentorForm");
const mentorClose = document.getElementById("mentorClose");
const mailButtons = document.querySelectorAll(".whybtn");

mailButtons.forEach(button => {
    button.addEventListener("click", () => {
        mentorForm.classList.add("active");
    });
});

mentorClose.addEventListener("click", (e) => {
    e.preventDefault();
    mentorForm.classList.remove("active");
});

// const slider = document.getElementById("slider");

// let auto = setInterval(move,15);

// function move(){
//     slider.scrollLeft++;
//     if(slider.scrollLeft >= slider.scrollWidth-slider.clientWidth){
//         slider.scrollLeft = 0;
//     }
// }

// slider.addEventListener("mouseenter",()=>{
//     clearInterval(auto);

// });

// slider.addEventListener("mouseleave",()=>{
//     auto = setInterval(move,15);
// });

function counter(id, end) {
    let count = 0;
    let speed = setInterval(() => {
        count++;
        document.getElementById(id).innerHTML = count + "+";
        if (count >= end) {
            clearInterval(speed);
        }
    }, 15);
}

counter("students", 500);
counter("volunteers", 40);
counter("events", 20);