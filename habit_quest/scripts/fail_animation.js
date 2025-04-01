let fail_button = document.getElementById("testAnimation");
fail_button.addEventListener("click", fail);

let succeed_button = document.getElementById("testAnimation2");
succeed_button.addEventListener("click", succeed);

let progress_percent = 100;
// const key
// on load

function fail() {
// onclick
    fail_button.classList.add("fail_animation")

    while (progress_percent != 0) {
        let progress_bar = document.querySelector(".progress_bar");
        progress_percent = progress_percent - 10
        progress_bar.style.width = progress_percent + "%"
        break
    }

    while (progress_percent == 0) {
        let heart_img = document.querySelector(".heart_img");
        heart_img.classList.add("heart_sad");
        break
    }
}

function succeed() {
// onclick
    fail_button.classList.add("succeed_animation")

    while (progress_percent != 100) {
        let progress_bar = document.querySelector(".progress_bar");
        progress_percent = progress_percent + 10
        progress_bar.style.width = progress_percent + "%"

        let heart_img = document.querySelector(".heart_sad");
        heart_img.classList.remove("heart_sad");
        break
    }
}