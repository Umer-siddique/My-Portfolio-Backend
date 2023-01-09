const express=require("express")
const {getAllProjects,getSingleProject,createProject,updateProject,deleteProject}=require("../controller/projectController")
const router=express.Router()

router.get("/",getAllProjects)
router.get("/:id",getSingleProject)
router.post("/",createProject)
router.put("/:id",updateProject)
router.delete("/:id",deleteProject)

module.exports=router