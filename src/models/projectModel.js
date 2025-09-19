import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const projectsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
    },
    tech: {
        type: [String],
        required: true
    },
    period: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        required: true
    },
    challenges: {
        type: [String],
        required: true
    },
    github: {
        type: String
    },
    demo: {
        type: String
    },
    image: {
        type: String
    }
},)