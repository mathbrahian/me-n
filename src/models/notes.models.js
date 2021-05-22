import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    title: {type: String, required: [true, 'The title is required']},
    description: String
},{
    timestamps: true
})

export default model('Note', noteSchema)