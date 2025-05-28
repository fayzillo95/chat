import express from "express"
import {Server} from "socket.io"
import path from "path";
import ejs from "ejs"
import http from "http"

const app = express()
const httpServer = http.createServer(app);
const io = new Server(httpServer)


app.engine("html",ejs.renderFile)
app.set("view engine", "html")
app.set("views", path.join(process.cwd(),"views"))

app.use(express.static(path.join(process.cwd(),"public")))

app.get("/",(req, res) =>{
    res.render("index")
})
app.get("/login",(req, res) =>{
    res.render("login")
})
app.post("/chat",(req, res) =>{
    res.render("chat")
})

io.on("connect", (socket) => {
    socket.on("msg", ({message,ism})=>{
        io.emit("lar",{message,ism})
    })
})

httpServer.listen(3000, () => console.log("\n   http://localhost:3000"));