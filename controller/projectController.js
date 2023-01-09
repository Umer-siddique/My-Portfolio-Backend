const Projects = require("../model/projectSchema")
const mongoose = require("mongoose")

const getAllProjects = async (req, res) => {
    try {
        const getProjects = await Projects.find({}).sort({ createdAt: -1 })
        if (!getProjects) {
            throw new Error("No projects found...")
        }
        res.status(200).json(getProjects)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({ error: error.message })
    }
}

const getSingleProject = async (req, res) => {
    const { id } = req.params
   
    try {
        const getSingleProjects = await Projects.findById(id)
       if(!getSingleProjects){
        throw new Error("There is no project corresponding to this Id...")
       }
        res.status(200).json(getSingleProjects)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({ error: error.message })
    }
}

const createProject = async (req, res) => {
    const { title, technology, category, description,projectUrl,projectImage } = req.body
    try {
        const setProject = await Projects.create({ title, technology, category, description,projectUrl,projectImage })
        if (!setProject) {
            throw new Error("Project Not created sucessfully...")
        }
        res.status(200).json(setProject)

    } catch (error) {
        console.log(error.message)
        res.status(404).json({ error: error.message })
    }
}

const updateProject = async (req, res) => {
    const { id } = req.params
    try {

        const updatedProject = await Projects.updateOne({ _id: id }, {
            $set: req.body,
        })
        res.status(200).json(updatedProject)

    } catch (error) {
        console.log(error.message)
        res.status(404).json({ error: error.message })
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {

        const deletedProject = await Projects.findOneAndDelete({ _id: id })
        res.status(200).json(deletedProject)

    } catch (error) {
        console.log(error.message)
        res.status(404).json({ error: error.message })
    }
}

module.exports = { getAllProjects, getSingleProject, createProject, updateProject, deleteProject }