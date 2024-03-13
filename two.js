let buttons = document.querySelectorAll(".parent ul li");

buttons.forEach(ele => {
    ele.addEventListener("click", function() {
        ele.classList.remove("active");
    })
});

