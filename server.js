const express=require("express")
const bodyParser=require("body-parser")
const projectRoutes=require("./routes/projectRoutes")
const cors=require("cors")
const connectDb=require("./db/connection")
require("dotenv").config()

const app=express()
const PORT=process.env.PORT

connectDb()

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))

app.use(cors())

app.use("/api/projects",projectRoutes)

app.listen(PORT,()=>{
    console.log(`server is listening on Port :${PORT}`)
})

