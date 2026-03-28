let text = "whoami"
let i = 0

const cmd = document.getElementById("cmd")

const bootCursor = document.createElement("span")
bootCursor.innerHTML = "|"
bootCursor.style.animation = "blink 1s infinite"

cmd.after(bootCursor)

function type() {
    if (i < text.length) {
        cmd.innerHTML += text.charAt(i)
        i++
        cmd.after(bootCursor)
        setTimeout(type, 250)
    } else {
        setTimeout(() => {
            document.getElementById("boot").style.display = "none"
            const site = document.getElementById("site")
            site.classList.remove("hidden")

            // Fade-in effect com slide-up
            const sections = site.querySelectorAll("section")
            sections.forEach((section, index) => {
                section.style.opacity = "0"
                section.style.transform = "translateY(20px)"

                setTimeout(() => {
                    section.style.transition = "all 0.6s ease-out"
                    section.style.opacity = "1"
                    section.style.transform = "translateY(0)"
                }, index * 100)
            })

        }, 400)
    }
}

type()

let lang = "pt"

function applyLang() {
    document.querySelectorAll("[data-pt]").forEach(el => {
        el.innerText = el.dataset[lang]
    })
}

function toggleLang() {
    lang = lang === "pt" ? "en" : "pt"
    document.querySelector(".lang").innerText = lang === "pt" ? "EN" : "PT"
    applyLang()
}

applyLang()

const style = document.createElement("style")
style.innerHTML = `
@keyframes blink{
0%{opacity:1}
50%{opacity:0}
100%{opacity:1}
}`
document.head.appendChild(style)
