let fail_button = document.getElementById("testAnimation");
fail_button.addEventListener("click", fail);

let succeed_button = document.getElementById("testAnimation2");
succeed_button.addEventListener("click", succeed);

let progress_percent = 100;

function fail() {
    fail_button.classList.add("fail_animation")

    while (progress_percent != 0) {
        let progress_bar = document.querySelector(".progress_bar");
        progress_percent = progress_percent - 10
        progress_bar.style.width = progress_percent + "%"
        break
    }

    while (progress_percent == 0) {
        let heart_img = document.querySelector(".heart_sad");
        break
    }
}

function succeed() {
    fail_button.classList.add("succeed_animation")

    while (progress_percent != 100) {
        let progress_bar = document.querySelector(".progress_bar");
        progress_percent = progress_percent + 10
        progress_bar.style.width = progress_percent + "%"
        break
    }
}