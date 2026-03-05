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

        setTimeout(type, 120)

    } else {

        setTimeout(() => {

            document.getElementById("boot").style.display = "none"

            const site = document.getElementById("site")
            site.classList.remove("hidden")

            const walker = document.createTreeWalker(site, NodeFilter.SHOW_TEXT, null, false)
            let nodes = []

            while (walker.nextNode()) {
                let n = walker.currentNode
                if (n.nodeValue.trim() !== "") nodes.push(n)
            }

            nodes.forEach(n => {
                n._text = n.nodeValue
                n.nodeValue = ""
            })

            const cursor = document.createElement("span")
            cursor.innerHTML = "|"
            cursor.style.animation = "blink 1s infinite"

            let nodeIndex = 0
            let charIndex = 0

            function write() {

                if (nodeIndex >= nodes.length) {
                    site.appendChild(cursor)
                    return
                }

                let node = nodes[nodeIndex]
                let text = node._text

                if (charIndex < text.length) {

                    node.nodeValue += text.charAt(charIndex)
                    node.parentNode.appendChild(cursor)

                    charIndex++
                    setTimeout(write, 5)

                } else {

                    nodeIndex++
                    charIndex = 0
                    write()

                }

            }

            write()

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