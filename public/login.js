const username = document.getElementById("username")

username.addEventListener("keyup", (event) => {
    if (event.key !== "Enter") return;  // Enter tugmasi bosilmasa hech narsa qilinmaydi
    
    const ism = username.value.trim();
    if (ism.length < 1) {
        alert("Iltimos, ismingizni kiriting!");
        return;
    }

    localStorage.setItem("name", ism);
    window.location.href = "/";
});
