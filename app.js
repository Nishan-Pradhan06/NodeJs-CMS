const express = require('express')
const app = express()


//telling the nodejs to set view engine to ejs
app.set('view engine', 'ejs')

// all blogs page
app.get("/home", (req, res) => {

    res.render("home")
})

//create Blogs
app.get("/createBlogs", (req, res) => {

    res.render("createBlogs")
})
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


app.listen(3000, () => {
    console.log("Nodejs Project has started at port 3000")
})