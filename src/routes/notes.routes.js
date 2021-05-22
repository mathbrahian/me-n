import {Router} from 'express';
const router = Router();
import { getNotes, getNote, createNote, updateNote, deleteNote } from "../controllers/notes.controllers";

router.get('/', getNotes)

router.post('/', createNote)

router.get('/:id', getNote)

router.put('/:id', updateNote)

router.delete('/:id', deleteNote)


export default router; 