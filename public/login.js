const form = document.getElementById("loginForm")
const username = document.getElementById("username")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const ism = username.value.trim()
    if (ism.length < 1) {
        alert("Iltimos, ismingizni kiriting!")
        return
    }
    localStorage.setItem("name", ism)
    window.location.href = "/"
})
