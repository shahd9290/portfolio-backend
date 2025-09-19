import mongoose from 'mongoose';
import {projectsSchema} from "../models/ProjectModel";

const Project = mongoose.model('Project', projectsSchema);

export const addNewProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const getProjects = async (req, res) => {
    try {
        const data = await Project.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const getProjectWithId = async (req, res) => {
    try {
        const data = await Project.findById(req.params.ProjectId);
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const updateProject = async (req, res) => {
    try {
        const data = await Project.findOneAndUpdate({_id: req.params.ProjectId}, req.body, {new: true});
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const deleteProject = async (req, res) => {
    try {
        await Project.deleteOne({_id: req.params.ProjectId});
        res.json({
            message: `Deleted Project with id ${req.params.ProjectId}`
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}