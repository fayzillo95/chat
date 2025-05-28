const username = document.getElementById("username")

username.onkeyup = (event) => {
    if(event.keyCode != 13) return
    if(username.value.trim().length < 1){
        alert("Oldin xabar kiriting !")
        return
    }
    localStorage.setItem("name",username.value)
    window.location = "/"
}