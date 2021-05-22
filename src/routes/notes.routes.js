import {Router} from 'express';
const router = Router();

import { getNotes, getNote, createNote, updateNote, deleteNote } from "../controllers/notes.controllers";
import { verifyUsers } from '../middlewares/users.middlewares';

router.get('/', verifyUsers, getNotes)

router.post('/', verifyUsers, createNote)

router.get('/:id', verifyUsers, getNote)

router.put('/:id', verifyUsers, updateNote)

router.delete('/:id', verifyUsers, deleteNote)


export default router; 