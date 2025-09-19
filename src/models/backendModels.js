import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testimonialSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    testimonial: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    relation: {
        type: String,
        required: true
    },
});