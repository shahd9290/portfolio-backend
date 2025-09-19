import mongoose from 'mongoose';
import {skillsSchema} from "../models/skillsModel";

const Skill = mongoose.model('Skill', skillsSchema);

export const addNewSkill = async (req, res) => {
    try {
        const newSkill = new Skill(req.body);
        const skill = await newSkill.save();
        res.json(skill);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const getSkills = async (req, res) => {
    try {
        const data = await Skill.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const getSkillWithId = async (req, res) => {
    try {
        const data = await Skill.findById(req.params.SkillId);
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const updateSkill = async (req, res) => {
    try {
        const data = await Skill.findOneAndUpdate({_id: req.params.SkillId}, req.body, {new: true});
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const deleteSkill = async (req, res) => {
    try {
        await Skill.deleteOne({_id: req.params.SkillId});
        res.json({
            message: `Deleted Skill with id ${req.params.SkillId}`
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}