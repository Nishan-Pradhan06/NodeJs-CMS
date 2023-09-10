const express = require('express')
const { blogs, contact } = require('./model/index')
// const contactModel = require('./model/contactModel')
const app = express()
//database
require("./model/index")

//telling the nodejs to set view engine to ejs
app.set('view engine', 'ejs')



// all blogs page
app.get("/", async (req, res) => {
    //table bata data nikalnu paryo

    //blogs vhanne bata vayajati sabai data dey vhaneko ho
    const allblogs = await blogs.findAll()
    // console.log(allblogs);

    //blogs vanney key/name ma allblogs/data pass gareko ejs file lai
    res.render("home", { blogs: allblogs })
})
//about us page
app.get("/aboutus", (req, res) => {
    res.render("aboutus")
})
//create Blogs page
app.get("/createBlogs", (req, res) => {
    res.render("createBlogs")
})
//contact us page
app.get("/contact", (req, res) => {
    res.render("contact")
})
//Form submitted conformation Page
app.get("/submissionConformation", (req, res) => {
    res.render("submissionConformation")
})

//singe BLog page
app.get("/singleblog/:id", async (req, res) => {
    // console.log(req.params.title)
    // console.log(req.params.id)
    const id = req.params.id
    const blog = await blogs.findAll(
        {
            where: {
                id: id
            }
        })
    console.log(blog)
    res.render("singleBlogPage", { blog: blog })
})



/////////////DATABASE///////////////////////////


//form bata data aairaxa parse gar na vha or handel gar vhaneko ho
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create blogs post
app.post("/createblogs", async (req, res) => {
    // console.log(req.body)
    const title = req.body.title
    const subTitle = req.body.subtitle
    const description = req.body.description
    // console.log(title, subTitle, description)

    // databse ma halna paryo
    // yas code bata database ma data basxa
    await blogs.create({
        title: title,
        subTitle: subTitle,
        description: description,
    })
    res.redirect("/")
})

//database/table bata data nikalne way


//delete page
app.delete("/delete/:id", async (req, res) => {

    // if try inside code throws error then catch catches it and throws an error log  
    try {
        const deleteBlogs = await blogs.findOne({
            where: {
                id: (req.params.id) * 1,
            }
        })

        // deleting the content from the database
        await deleteBlogs.destroy();

        res.status(200).json({
            status:"success",
            message:"deleted",
        })
       
    } catch(err){
        console.log("blog cannot found with that" + err.message);
    }

})


//started port at 3000 using 3000 port for project
app.listen(3000, () => {
    console.log("Nodejs Project has started at port 3000")
})