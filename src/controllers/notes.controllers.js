import Note from "../models/notes.models";

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes)
    } catch (error) {
        return res.status(400).json({
            message: 'Error get notes',
            error
        })
    }
}

export const createNote = async (req, res) => {
    const{title, description} = req.body
    try {
        const note = new Note({title, description})
        const save = await note.save()
        res.status(201).json(save)
    } catch (error) {
        return res.status(400).json({
            message: 'Error post note',
            error
        })
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        res.status(200).json(note)
    } catch (error) {
        return res.status(400).json({
            message: 'Error get note',
            error
        })
    }
}


export const updateNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(note)
    } catch (error) {
        return res.status(400).json({
            message: 'Error put note',
            error
        })
    }
}

export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json(note) 
    } catch (error) {
        return res.status(400).json({
            message: 'Error delete note',
            error
        })
    }
}