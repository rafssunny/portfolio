
let text = "whoami"
let i = 0

function type() {

    if (i < text.length) {

        document.getElementById("cmd").innerHTML += text.charAt(i)
        i++
        setTimeout(type, 120)

    } else {

        setTimeout(() => {
            document.getElementById("boot").innerHTML += '<br>...<br>'
            setTimeout(() => {
                document.getElementById("boot").style.display = "none"
                document.getElementById("site").classList.remove("hidden")
            }, 1200)
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
