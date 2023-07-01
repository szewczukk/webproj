const anchors = document.querySelectorAll('a[href]')
const navHeight = document
    .querySelector("nav")
    .getBoundingClientRect()
    .height

for (const anchor of anchors) {

    anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetTop = document
            .querySelector(this.hash)
            .getBoundingClientRect()
            .top;
        const top = targetTop + window.pageYOffset - navHeight;

        window.scrollTo({
            top,
            left: 0,
            behavior: "smooth",
        })
    })
}

