document.addEventListener("DOMContentLoaded", () => {

    const habitNameInput = document.querySelector("#user-habit-name input");
    const frequencyInput = document.querySelector("#user-frequency input");
    const descriptionInput = document.querySelector("#user-description input");

    habitNameInput.value = localStorage.getItem("habitName");
    frequencyInput.value = localStorage.getItem("frequency");
    descriptionInput.value = localStorage.getItem("description");

    habitNameInput.addEventListener("input", () => {
        localStorage.setItem("habitName", habitNameInput.value);
    });
    
    frequencyInput.addEventListener("input", () => {
        localStorage.setItem("habitFrequency", frequencyInput.value);
    });
    
    descriptionInput.addEventListener("input", () => {
        localStorage.setItem("habitDescription", descriptionInput.value);
    });

    console.log(localStorage.getItem("habitName"));
    console.log(localStorage.getItem("habitFrequency"));
    console.log(localStorage.getItem("habitDescription"));
});
