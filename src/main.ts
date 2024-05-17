import "./style.css"
import "./modern-normalize.min.css"

const navigationLinks: NodeListOf<HTMLElement> = document.querySelectorAll("[data-nav-link]");
const pages: NodeListOf<HTMLElement> = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function (this: HTMLElement) {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo({top: 0, left: 0, behavior: "smooth"});
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }

    });
}