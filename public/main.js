const socket = io()
const button = document.getElementsByTagName("button")[0]
const chat = document.querySelector(".messages")
const inpuValue = document.querySelector("#inpuValue")
const h1 = document.querySelector("h1")
let ism = window.localStorage.getItem("name")
h1.textContent += ism

button.addEventListener('click', (event) => {
    event.preventDefault()
    socket.emit("msg", { message: inpuValue.value, ism })
    inpuValue.value = "" // inputni tozalash
})

socket.on("lar", ({ message, ism: senderIsm }) => {
    // o'zingiz yuborgan xabarni o'ng tomonga, boshqalarni chapga chiqaramiz
    const own = senderIsm === ism
    const li = document.createElement("li")
    li.textContent = message + "   ___   " + senderIsm
    li.className = own ? "own-message" : "other-message"
    chat.appendChild(li)
    chat.scrollTop = chat.scrollHeight // chatni pastga scroll qilish
})
