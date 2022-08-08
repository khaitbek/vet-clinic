let questionsLinks = document.querySelectorAll("#questionLink");
let dialog = document.querySelector("dialog");
let closeBtn = dialog.querySelector(".close-btn")

questionsLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.classList.remove("close");
        dialog.showModal();
    })
})

closeBtn.addEventListener("click", () => {
    dialog.classList.add("close");
    setTimeout(() => {
        dialog.close();
    }, 800)
})