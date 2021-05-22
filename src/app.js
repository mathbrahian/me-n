import express from 'express';
import morgan from 'morgan';
import notes from './routes/notes.routes'

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/notes', notes)

export default app;