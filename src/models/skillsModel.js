import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const skillsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});
