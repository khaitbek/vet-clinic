const openBtns = document.querySelectorAll(".features__btn");

openBtns.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        let title = btn.parentElement.querySelector("h3");
        let text = btn.parentElement.querySelector("p");
        window.localStorage.setItem("title",title.innerText)
        window.localStorage.setItem("text",text.innerText)
        window.location = "/services-1.html"
    })
})