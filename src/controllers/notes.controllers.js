import Note from "../models/notes.models";

export const getNotes = async (req, res) => {
    try {
        const userId = req.user.id
        const notes = await Note.find({userId});
        res.json(notes)
    } catch (error) {
        return res.status(400).json({
            message: 'Error get notes',
            error
        })
    }
}

export const createNote = async (req, res) => {
    try {
        req.body.userId = req.user.id
        const{title, description, userId} = req.body
        const note = new Note({title, description, userId})
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

        if(!(req.user.id==note.userId)){
            return res.status(401).json({message: 'Unauthorize'})

        }
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
        const note_id = await Note.findById(req.params.id)
        if(!(req.user.id==note_id.userId)){
            return res.status(401).json({message: 'Unauthorize'})
        }
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
        const note_id = await Note.findById(req.params.id)
        if(!(req.user.id==note_id.userId)){
            return res.status(401).json({message: 'Unauthorize'})
        }
        const note = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json(note)
    } catch (error) {
        return res.status(400).json({
            message: 'Error delete note',
            error
        })
    }
}