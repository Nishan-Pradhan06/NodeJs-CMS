const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.get("/", (req, res) => {
    // res.send("Hello")
    res.render("home")
})
app.get("/createblogs", (req, res) => {
    // res.send("Hello")
    res.render("createBlogs")
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/createblogs", (req, res) => {
    console.log(req.body)
})


app.listen(3000, () => {
    console.log("Nodejs Project has started at port 3000")
})