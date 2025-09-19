import mongoose from 'mongoose';
import {testimonialSchema} from "../models/testimonialModel";

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export const addNewTestimonial = async (req, res) => {
    try {
        const newTestimonial = new Testimonial(req.body);
        const testimonial = await newTestimonial.save();
        res.json(testimonial);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const getTestimonials = async (req, res) => {
    try {
        const data = await Testimonial.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const getTestimonialWithId = async (req, res) => {
    try {
        const data = await Testimonial.findById(req.params.testimonialId);
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const updateTestimonial = async (req, res) => {
    try {
        const data = await Testimonial.findOneAndUpdate({_id: req.params.testimonialId}, req.body, {new: true});
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const deleteTestimonial = async (req, res) => {
    try {
        await Testimonial.deleteOne({_id: req.params.testimonialId});
        res.json({
            message: `Deleted testimonial with id ${req.params.testimonialId}`
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}