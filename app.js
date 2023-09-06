const express = require('express')
const app = express()


//telling the nodejs to set view engine to ejs
app.set('view engine', 'ejs')

// all blogs page
app.get("/", (req, res) => {

    res.render("home")
})

//about us page
app.get("/aboutus", (req, res) => {

    res.render("aboutus")
})

//create Blogs
app.get("/createBlogs", (req, res) => {
    res.render("createBlogs")
})

//contact us page
app.get("/contact", (req, res) => {
    res.render("contact")
})


//FOrm submitted conformation Page
app.get("/submissionConformation", (req, res) => {
    res.render("submissionConformation")
})


//form bata data aairaxa parse gar na vha or handel gar vhaneko ho
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//create blogs post
app.post("/createblogs", (req, res) => {
    console.log(req.body)
    res.render("submissionConformation")
})

//started port at 3000 using 3000 port for project
app.listen(3000, () => {
    console.log("Nodejs Project has started at port 3000")
})